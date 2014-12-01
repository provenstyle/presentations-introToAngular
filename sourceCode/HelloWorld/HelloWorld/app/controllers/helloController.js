angular
    .module('helloApp')
    .controller('helloController', function ($scope) {
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.fullName = function () {
            return $scope.firstName + ' ' + $scope.lastName;
        }
        $scope.showMessage = function () {
            return $scope.firstName || $scope.lastName;
        }
    });