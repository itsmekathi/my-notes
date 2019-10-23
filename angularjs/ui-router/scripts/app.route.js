(function () {
    'use strict';
    
    angular.module('app')
        .config(function ($stateProvider) {
            var helloState = {
                name: 'home',
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                controllerAs: "homeCtrl"
            }

            var aboutState = {
                name: 'about',
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'aboutController',
                controllerAs: "aboutCtrl"
            }

            var someState = {
                name: 'some',
                url: '/some',
                template: '<h3>This is some state you dont want to be in</h3>'
            }

            $stateProvider.state(helloState);
            $stateProvider.state(aboutState);
            $stateProvider.state(someState);
        })
})();