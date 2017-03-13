(function () {
  'use strict'

  function SearchFormCtrl ($scope) {
    $scope.submitForm = function () {
      if (!isValidAddress($scope.address)) return
      $scope.$emit('newSearch', {address: $scope.address})
    }

    function isValidAddress (address) {
      return true
    }
  }

  SearchFormCtrl.$inject = ['$scope']
  App.controller('SearchFormCtrl', SearchFormCtrl)
  App.directive('searchForm', () => {
    return {
      restrict: 'E',
      templateUrl: 'application/directives/searchform/searchform.html'
    }
  })
}())
