(function () {
  'use strict'

  function SearchFormCtrl ($scope) {
    $scope.submitForm = function () {
      if (!isValidAddress($scope.address)) return
      $scope.$emit('newSearch', {address: $scope.address})
    }

    function isValidAddress (address) {
      let pattern = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/) // eslint-disable-line no-useless-escape
      return pattern.test(address)
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
