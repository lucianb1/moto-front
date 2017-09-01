(function () {
    'use strict';
    angular.module('moto').controller('headerCtrl', function() {
        var vm = this;
        vm.isLoggedIn = false;
        vm.userEmail = 'luci@yahoo.com';
    });

})();
