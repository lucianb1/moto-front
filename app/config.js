(function() {
    'use strict';

    angular.module('moto')
        .factory('serverConfig', function() {
            return {
                baseUrl : 'http://localhost:8080/motorzz'
            };
        });

})();
