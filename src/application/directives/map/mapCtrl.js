(function () {
  'use strict'

  function MapCtrl ($scope, $rootScope, LocationService, GeoMap) {
    this.geoMap = new GeoMap('mainMap')
    this.LocationService = LocationService

    $rootScope.$on('newSearch', (e, data) => {
      this.searchServer(data.address)
    }).bind(this)

    $rootScope.$on('userPosition', (e, data) => {
      this.setUserPosition(data.position)
    }).bind(this)
  }

  MapCtrl.prototype.searchServer = function (address) {
    this.LocationService.getHostData(address)
    .then(this.setServerPosition.bind(this), (err) => {
      console.log(err, 'Error on server position search')
    })
  }

  MapCtrl.prototype.setServerPosition = function (response) {
    let serverData = response.data
    let position = [serverData.lat, serverData.lon]
    this.geoMap.createServerMarker(position, serverData)
  }

  MapCtrl.prototype.setUserPosition = function (position) {
    if (position) {
      this.geoMap.createUserMarker(position)
    } else {
      this.geoMap.removeUserMarker()
    }
  }

  MapCtrl.$inject = ['$scope', '$rootScope', 'LocationService', 'GeoMap']

  App.controller('MapCtrl', MapCtrl)
  App.directive('map', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/map/map.html'
    }
  })
}())
