(function() {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
          .state({
            name: 'home',
            url: '/',
            component: 'mainComponent'
          })
          .state({
            name: 'tasks',
            parent: 'main',
            url: '/',
            component: 'taskComponent'
          });

    }
})();
