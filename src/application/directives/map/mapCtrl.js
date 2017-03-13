(function () {
  'use strict'

  let options = {
    defaultPosition: ['-19.935834', '-43.935001'],
    tile: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}' +
          '?access_token=pk.eyJ1IjoibGVhb2ZlbGlwZSIsImEiOiJjajA3a2NhcHowMWFqMndvdThnMWp0eXRwIn0.vEWefMT25jWniq0k30NcEw',
    maxZoom: 18
  }

  function MapCtrl ($scope, $rootScope, MapService) {
    this.MapService = MapService
    this.map = L.map('mainMap')
    this.setMap()

    $rootScope.$on('newSearch', (e, data) => {
      this.search(data.address)
    }).bind(this)
  }

  MapCtrl.prototype.search = function (address) {
    this.MapService.getHostData(address)
    .then(this.setPosition.bind(this), this.serrorHandling)
  }

  MapCtrl.prototype.setPosition = function (response) {
    let serverData = response.data
    let position = [serverData.lat, serverData.lon]
    let marker = L.circleMarker(position)
    marker.addTo(this.map)
    this.map.flyTo(position, 15, {
      duration: 1.8,
      easeLinearity: 1
    })

    marker.bindPopup(`<ul class="serverInfo"><li><strong>IP:</strong> ${serverData.query}</li><li><strong>ISP:</strong> ${serverData.isp}</li></ul>`)
    marker.openPopup()
  }

  MapCtrl.prototype.errorHandling = function (err) {
    console.log('Error!', err)
    return false
  }

  MapCtrl.prototype.setMap = function () {
    L.tileLayer(options.tile, {
      maxZoom: options.maxZoom
    }).addTo(this.map)
    this.map.setView(options.defaultPosition, 13)
  }

  MapCtrl.$inject = ['$scope', '$rootScope', 'MapService']
  App.controller('MapCtrl', MapCtrl)
  App.directive('map', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/map/map.html'
    }
  })
}())
