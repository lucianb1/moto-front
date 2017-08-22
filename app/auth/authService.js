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
                url: '/register/forgot-password',
                templateUrl: 'auth/register/confirm/registerConfirm.html',
                controller: 'registerConfirmCtrl as vm'
            });

    });

    authModule.factory('authService', ['$http', '$cookies', function ($http, $cookies) {

        var service = {
            login: login,
            logout: logout,
            register: register,
            confirmRegister: confirmRegister
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

        function confirmRegister(token) {
            console.log('confirm registration with token: ', token);
        }

        return service;
    }]);
})();
