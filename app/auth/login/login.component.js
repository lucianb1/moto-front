(function () {
    'use strict';

    var authModule = angular.module('auth');

    authModule.component('loginForm', {
        templateUrl: 'auth/login/login-template.html',
        controller: ['authService', function (authService) {
            var vm = this;
            vm.email = '';
            vm.password = '';
            vm.rememberMe = true;
            vm.login = function() {
                console.log('remember me', vm.rememberMe);
                authService.login(vm.email, vm.password);
            };

        }],
        controllerAs: 'vm'
    });


})();
