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
.config(($mdIconProvider) => {
  $mdIconProvider
  .icon('logo', 'assets/images/logo.svg', 24)
})
