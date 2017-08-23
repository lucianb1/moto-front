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
            if (vm.form.$valid) {
                authService.register(vm.email, vm.password);
            } else {
                vm.form.email.$setDirty();
                vm.form.password.$setDirty();
                vm.form.passwordConfirm.$setDirty();
            }
        //    addItem.capabilities.$setValidity("youAreFat", false);
        };

        vm.isEmpty = function(text) {
            return text === '';
        };



    });

})();
