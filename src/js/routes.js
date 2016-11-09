'use strict';

/**
 * Route configuration
 */
angular.module('Books').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('detail', {
                url: '/detail/:bookId',
                templateUrl: 'templates/detail.html',
                controllerProvider: function () {
                    return 'DetailCtrl';
                }
            });
    }
]);

