(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth');


    authModule.controller('registerCtrl', function(authService) {

        var vm = this;

        vm.email = '';
        vm.password = '';
        vm.passwordConfirm = '';

        vm.register = function() {
            authService.register(vm.email, vm.password);
        };

        vm.isEmpty = function(text) {
            return text === '';
        }



    });

})();
