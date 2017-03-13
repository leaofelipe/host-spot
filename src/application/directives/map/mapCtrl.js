(function () {
  'use strict'

  let options = {
    tile: 'https://api.mapbox.com/styles/v1/leaofelipe/cj07ketih000c2ss4lzo9qw1e/tiles/256/{z}/{x}/{y}?' +
          'access_token=pk.eyJ1IjoibGVhb2ZlbGlwZSIsImEiOiJjajA3a2NhcHowMWFqMndvdThnMWp0eXRwIn0.vEWefMT25jWniq0k30NcEw',
    maxZoom: 18
  }

  function MapCtrl ($scope, mapService) {
    console.log(mapService.a)
/*     let map = L.map('mainMap') */
/*     let position = window.localStorage.location */
/*     let pos = [position.coords.latitude, position.coords.longitude] */
/*     L.tileLayer(options.tile, {maxZoom: options.maxZoom}).addTo(map) */

/*     let marker = L.marker(pos, { */
/*       title: 'You are here!' */
/*     }) */
/*     marker.addTo(map) */
/*     map.setView(pos, 15) */
  }

  MapCtrl.$inject = ['$scope', 'mapService']
  App.controller('MapCtrl', MapCtrl)
  App.directive('map', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/map/map.html'
    }
  })
}())
