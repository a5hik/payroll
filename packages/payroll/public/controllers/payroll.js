'use strict';

angular.module('mean.payroll').controller('PayrollController', ['$scope', 'Global', 'Payroll',
    function($scope, Global, Payroll) {
        $scope.global = Global;
        $scope.package = {
            name: 'payroll'
        };
    }
]);
