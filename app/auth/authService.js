(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth', []);

    authModule.config(function ($stateProvider) {

        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'auth/register/register.html',
                controller: 'registerCtrl as vm'
            })
            .state('forgotPassword', {
                url: '/forgot-password',
                templateUrl: 'auth/forgot-password/forgotPassword.html',
                controller: 'forgotPasswordCtrl as vm'
            })
        ;

    });

    authModule.factory('authService', ['$http', '$cookies', function ($http, $cookies) {

        return {
            login: login,
            logout: logout,
            register: register,
            authenticate: authenticate
        };

        function login(email, password) {
            console.log('login', email, password);
        }

        function logout() {
            console.log('logout');
        }

        function register(email, password) {
            console.log('registering...');
        }

        function authenticate(loginResponse) {

        }

    }]);
})();
