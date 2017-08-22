(function () {
    'use strict';

    // var authModule = angular.module('auth', ['$http', '$cookies']);
    var authModule = angular.module('auth');

    authModule.controller('registerConfirmCtrl', function($state, $stateParams, httpClient) {
        var vm = this;
        var token = $stateParams.token;

        if (token === undefined) {
            $state.go('home');
            return;
        }

        httpClient({
                method: 'GET',
                url: '/users'
            }
        ).then(function(success){}, function(error) {
            console.log(error.status);
        });


    });

})();
