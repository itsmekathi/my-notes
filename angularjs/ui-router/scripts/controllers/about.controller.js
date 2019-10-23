(function(){
    'use strict';
    angular.module('app')
    .controller('aboutController', ['$scope', '$state', function ($scope, $state) {
        $scope.pageName = "About Page";
    }]);
})();