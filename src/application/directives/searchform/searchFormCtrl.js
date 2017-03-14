(function () {
  'use strict'

  function SearchFormCtrl ($scope, LocationService) {
    $scope.submitForm = function () {
      if (!isValidAddress($scope.address)) return
      $scope.$emit('newSearch', {address: $scope.address})
    }

    $scope.userLocationChange = function () {
      if ($scope.personalLocation === true) {
        LocationService.getUserPosition((position) => {
          $scope.$emit('userPosition', {
            position: [position.latitude, position.longitude]
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

    function isValidAddress (address) {
      return true
    }
  }

  SearchFormCtrl.$inject = ['$scope', 'LocationService']
  App.controller('SearchFormCtrl', SearchFormCtrl)
  App.directive('searchForm', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/searchform/searchform.html'
    }
  })
}())
