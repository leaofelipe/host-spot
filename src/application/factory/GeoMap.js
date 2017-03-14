(function () {
  'use strict'

  let options = {
    defaultPosition: ['-19.935834', '-43.935001'],
    tile: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}' +
          '?access_token=pk.eyJ1IjoibGVhb2ZlbGlwZSIsImEiOiJjajA3a2NhcHowMWFqMndvdThnMWp0eXRwIn0.vEWefMT25jWniq0k30NcEw',
    maxZoom: 18
  }

  App.factory('GeoMap', () => {
    function GeoMap (element) {
      this.geoMap = L.map(element)

      L.tileLayer(options.tile, {
        maxZoom: options.maxZoom
      }).addTo(this.geoMap)

      this.geoMap.setView(options.defaultPosition, 13)
    }

    GeoMap.prototype.createServerMarker = function (position, serverData) {
      if (this.serverMarker) {
        this.geoMap.removeLayer(this.serverMarker)
      }

      this.serverMarker = L.circleMarker(position)
      this.serverMarker.addTo(this.geoMap)
      .bindPopup(`<ul class="serverInfo">
        <li><strong>IP:</strong> ${serverData.query}</li>
        <li><strong>ISP:</strong> ${serverData.isp}</li>
        <li><strong>Location:</strong> ${position[0]}, ${position[1]}</li>
      </ul>`)
      .openPopup()

      this.fitView(position)
    }

    GeoMap.prototype.createUserMarker = function (position) {
      this.userMarker = L.circleMarker(position, {
        color: '#ffffff'
      })
      this.userMarker.addTo(this.geoMap)
      this.fitView(position)
    }

    GeoMap.prototype.removeUserMarker = function () {
      if (this.userMarker) {
        this.geoMap.removeLayer(this.userMarker)
      }
    }

    GeoMap.prototype.fitView = function (position) {
      if (this.userMarker && this.serverMarker) {
        this.geoMap.fitBounds([this.userMarker, this.serverMarker])
      } else {
        this.geoMap.flyTo(position)
      }
    }

    GeoMap.prototype.flyTo = function (position) {
      this.map.flyTo(position, 15, {
        duration: 1.8,
        easeLinearity: 1
      })
    }

    return GeoMap
  })
}())
