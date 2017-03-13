(function () {
  'use strict'

  let MapService = function ($http) {
    let apiEndpoint = 'http://ip-api.com/json'

    let getHostData = function (address) {
      let host = address || ''
      return $http.get(apiEndpoint + '/' + host)
    }

    return {
      getHostData: getHostData
    }
  }

  App.service('MapService', MapService)
}())
