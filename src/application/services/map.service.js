(function () {
  'use strict'

  let MapService = function ($http) {
    let apiEndpoint = 'http://ip-api.com/json'
    let isValidAddress = function (address) {
      // Regex created by @gruber
      /* return /#\b(([\w-]+://?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|/)))#iS/g.test(address) */ 
      return true
    }

    let getHostData = function (address) {
      if (!isValidAddress(address)) return false
      let host = address || ''
      return $http.get(apiEndpoint + '/' + host)
    }

    return {
      getHostData: getHostData
    }
  }

  App.service('MapService', MapService)
}())
