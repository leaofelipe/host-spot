(function () {
  'use strict'

  function UserLocationCtrl ($scope, LocationService) {
    $scope.userLocationChange = function () {
      if ($scope.personalLocation === true) {
        LocationService.getUserPosition((position) => {
          $scope.$emit('userPosition', {
            position: [position.coords.latitude, position.coords.longitude]
          })
        }, (err) => {
          console.log(err)
          $scope.personalLocation = false
        }, {
          timeout: 3000
        })
      } else {
        $scope.$emit('userPosition', {})
      }
    }
  }

  UserLocationCtrl.$inject = ['$scope', 'LocationService']
  App.controller('UserLocationCtrl', UserLocationCtrl)
  App.directive('userLocation', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/userlocation/userlocation.html'
    }
  })
}())
