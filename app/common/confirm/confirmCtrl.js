(function () {
    'use strict';

    angular.module('moto').controller('confirmCtrl', function($state, $stateParams, authService, swal) {
        var vm = this;
        vm.message = '';
        vm.validToken = false;
        var method = $stateParams.method;
        var token = $stateParams.token;

        if (method === undefined || token === undefined) {
            $state.go('home');
            return;
        }
        if (method === 'register') {
            console.log('confirming registration');
            vm.validToken = true;
            vm.message = 'Contul tau a fost activat';
            authService.confirmRegister(token).then(function(success) {
                swal({
                    title: 'Cont activat!',
                    text: 'Contul tau a fost activat cu succes',
                    type: 'success'
                });
            }, function(error) {
                swal({
                    title: 'Ne pare rau',
                    text: 'Link-ul nu este valid sau a expirat',
                    type: 'success'
                });
            });
        } else {
            console.log('confirming forgot password');
            vm.validToken = true;
            vm.message = 'Parola ta a fost schimbata';
        }
    });


})();
