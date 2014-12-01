angular
    .module('helloApp')
    .controller('helloController', ['$scope', 'messagesModel', function ($scope, messagesModel) {
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.fullName = function () {
            return $scope.firstName + ' ' + $scope.lastName;
        }
        $scope.showMessage = function () {
            return $scope.firstName || $scope.lastName;
        }
        $scope.message = messagesModel.randomMessage();
        $scope.newMessage = function () {
            $scope.message = messagesModel.randomMessage();
        };
    }]);