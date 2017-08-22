(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth', []);

    authModule.config(function($stateProvider) {

        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'auth/register/register.html',
            controller: 'registerCtrl as vm'
        });

    });

    authModule.factory('authService', [ '$http', '$cookies', function ($http, $cookies) {

        var service = {
            login: login,
            logout: logout,
            register: register
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

        return service;
    }]);
})();
