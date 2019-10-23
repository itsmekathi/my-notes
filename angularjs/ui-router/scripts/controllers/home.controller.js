(function(){
    'use strict';
    angular.module('app')
    .controller('homeController', ['$scope', '$state', function ($scope) {
        $scope.pageName = "Home Page";

        $scope.buttonClicked = function(){
            console.log('You have clicked the button');
            console.log('Please let me know why');
        }
    }]);
})();