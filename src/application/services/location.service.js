(function () {
  'use strict'

  let LocationService = function ($http) {
    let apiEndpoint = 'http://ip-api.com/json'

    function getHostData (address) {
      return $http.get(apiEndpoint + '/' + address)
    }

    function getUserPosition (callback, err) {
      return navigator.geolocation.getCurrentPosition(callback, err)
    }

    return {
      getHostData: getHostData,
      getUserPosition: getUserPosition
    }
  }

  App.service('LocationService', LocationService)
}())
