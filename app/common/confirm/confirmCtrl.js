(function () {
    'use strict';

    angular.module('moto').controller('confirmCtrl', function($state, $stateParams) {
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
        } else {
            console.log('confirming forgot password');
            vm.validToken = true;
            vm.message = 'Parola ta a fost schimbata';
        }
    });


})();
