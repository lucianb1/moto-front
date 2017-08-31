(function () {
    'use strict';

    angular.module('auth').controller('forgotPasswordCtrl', function(authService) {
        var vm = this;
        vm.email = '';
        vm.password = '';

        vm.changePassword = function() {
            if (vm.form.$valid) {
                authService.changePassword(vm.email, vm.password);
            } else {
                vm.form.email.$setDirty();
                vm.form.password.$setDirty();
            }

        };


    });

})();
