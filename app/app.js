(function () {
    'use strict';

    /**
     * This is the main application file.
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('moto',
        ['ui.utils',
            'ui.router',
            'ngAnimate',
            'ngMessages',
            'ngCookies',
            'home',
            'auth',
            'common',
            'angular-sweetalert'
        ])
            .config(['$qProvider', function ($qProvider) {
                $qProvider.errorOnUnhandledRejections(false);
            }])
            .factory('httpClient', function ($http, serverConfig, $cookies) {
            return function (config) {
                return $http(updateConfig(config));
            };

            function updateConfig(config) {
                config.url = serverConfig.baseUrl + config.url;

                config.headers = config.headers || {};
                if ($cookies.get('token')) {
                    config.headers.Authorization = $cookies.get('token');
                }

                return config;
            }
        })
        .config(function ($stateProvider, $urlRouterProvider) {

            /* Add New States Above */
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('confirm', {
                url: '/confirm/:method?token',
                templateUrl: 'common/confirm/confirmPage.html',
                controller: 'confirmCtrl as vm'
            });

        })
        .run(function ($rootScope) {

            $rootScope.safeApply = function (fn) {
                var phase = $rootScope.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof(fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

        })
        .component('fixedHeader', {
            templateUrl: 'common/header/headerTemplate.html',
            controller: 'headerCtrl',
            controllerAs: 'vm'
        });

    // function interceptor($cookies) {
    //     return {
    //         request: function (config) {
    //             config.headers = config.headers || {};
    //             if ($cookies.get('token')) {
    //                 config.headers.Authorization = $cookies.get('token');
    //             }
    //             return config;
    //         },
    //         response: function (result) {
    //             return result;
    //         }
    //     };
    // }

})();
