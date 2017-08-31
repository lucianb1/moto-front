(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth');


    authModule.controller('registerCtrl', function(authService, swal) {

        var vm = this;

        vm.email = '';
        vm.password = '';
        vm.passwordConfirm = '';

        vm.register = function() {
            if (vm.form.$valid) {
                authService.register(vm.email, vm.password).then(function(success) {
                    swal({
                        title: 'Felicitari!',
                        text: 'Un mail de confirmare ti-a fost trimis la adresa de email',
                        type: 'success'
                    });
                }, function(error) {
                    swal({
                        title: 'Ne cerem scuze',
                        text: 'A intervenit o eroare. Va rugam incercati mai tarziu',
                        type: 'error'
                    });
                });
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
