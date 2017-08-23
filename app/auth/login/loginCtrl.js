(function () {
    'use strict';

    angular.module('auth').controller('loginCtrl', function(authService) {
        var vm = this;
        vm.email = '';
        vm.password = '';
        vm.rememberMe = false;

        vm.login = function() {
            if (vm.form.$valid) {
                // authService.login(vm.email, vm.password);
                vm.form.email.$setValidity('notFound', false);
            } else {
                vm.form.email.$setDirty();
                vm.form.password.$setDirty();
            }
            //    addItem.capabilities.$setValidity("youAreFat", false);
        };
    });
})();
