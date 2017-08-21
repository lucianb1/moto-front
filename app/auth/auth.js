(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth', []);

    authModule.factory('authService', [ '$http', '$cookies', function ($http, $cookies) {

        var service = {
            login: login,
            logout: logout
        };

        function login(email, password) {
            console.log('login', email, password);
        }

        function logout() {
            console.log('logout');
        }

        return service;
    }]);
})();
