'use strict'

window.App = angular.module('hostSpot', [
  'ngAnimate',
  'ngMaterial'
])
.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
  .primaryPalette('cyan')
  .dark()
})
