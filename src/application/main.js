'use strict'

window.App = angular.module('hostSpot', [
  'ngAnimate',
  'ngMaterial'
])
.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default').dark()
})
