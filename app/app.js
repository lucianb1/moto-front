(function(){
    'use strict';

    /**
     * This is the main application file.
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    var mainModule = angular.module('moto',
        ['ui.bootstrap',
            'ui.utils',
            'ui.router',
            'ngAnimate',
            'angular-loading-bar',
            'ngCookies',
            'home',
            'auth',
            'common'
        ]);

    mainModule.config(function($stateProvider, $urlRouterProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');

    });

    mainModule.run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

})();
