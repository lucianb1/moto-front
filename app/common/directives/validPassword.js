(function() {
    'use strict';


    angular.module('common').directive('validPassword', function() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, elem, attr, ngModel) {
                var minLength = 6;
                var maxLength = 50;
                ngModel.$validators.validPassword = function(modelValue,viewValue){
                    var passwordLength = viewValue.length;
                    if(ngModel.$isEmpty(viewValue)){
                        return true;
                    }
                    if (passwordLength < minLength || passwordLength > maxLength) {
                        return false;
                    }
                    return true;
                };
            }
        };
    });


})();
