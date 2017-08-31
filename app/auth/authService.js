(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth', []);

    authModule.config(function ($stateProvider) {

        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'auth/register/registerPage.html',
                controller: 'registerCtrl as vm'
            })
            .state('forgotPassword', {
                url: '/forgot-password',
                templateUrl: 'auth/forgot-password/forgotPassword.html',
                controller: 'forgotPasswordCtrl as vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'auth/login/loginPage.html',
                controller: 'loginCtrl as vm'
            })
        ;

    });

    authModule.factory('authService', ['httpClient', '$cookies', function (httpClient, $cookies) {

        return {
            login: login,
            logout: logout,
            register: register,
            authenticate: authenticate,
            changePassword: changePassword,
            confirmRegister: confirmRegister
        };

        function login(email, password) {
            console.log('login', email, password);
            console.log('logout');
            return httpClient({
                url: '/login',
                method: 'POST',
                data: {email: email, password: password}
            });
        }

        function logout() {
            console.log('logout');
            return httpClient({
                url: '/logout',
                method: 'POST'
            });
        }

        function register(email, password) {
            return httpClient({
                url: '/registration',
                method: 'POST',
                data: {email: email, password: password}
            });
        }

        function authenticate(loginResponse) {

        }

        function changePassword(email, newPassword) {
            console.log('changing password');
        }

        function confirmRegister(token) {
            return httpClient({
                url: '/registration/confirm',
                method: 'GET',
                params: {token: token}
            });
        }

    }]);
})();
