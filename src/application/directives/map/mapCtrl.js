(function () {
  'use strict'

  let options = {
    tile: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}' +
          '?access_token=pk.eyJ1IjoibGVhb2ZlbGlwZSIsImEiOiJjajA3a2NhcHowMWFqMndvdThnMWp0eXRwIn0.vEWefMT25jWniq0k30NcEw',
    maxZoom: 18
  }

  function MapCtrl ($scope, MapService) {
    MapService.getHostData()
    .then(this.setPosition, this.errorHandling)
  }

  MapCtrl.prototype.errorHandling = function (err) {
    console.log('Error!', err)
    return false
  }

  MapCtrl.prototype.setPosition = function (response) {
    let map = L.map('mainMap')
    let serverData = response.data
    let pos = [serverData.lat, serverData.lon]
    L.tileLayer(options.tile, {
      maxZoom: options.maxZoom
    }).addTo(map)
    map.setView(pos, 13)

    let marker = L.marker(pos)
    marker.addTo(map)
    marker.bindPopup(`<ul class="serverInfo"><li><strong>IP:</strong> ${serverData.query}</li><li><strong>ISP:</strong>  ${serverData.isp}</li></ul>`)
    marker.openPopup()
  }

  MapCtrl.$inject = ['$scope', 'MapService']
  App.controller('MapCtrl', MapCtrl)
  App.directive('map', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/map/map.html'
    }
  })
}())
