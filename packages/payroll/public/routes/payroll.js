'use strict';

angular.module('mean.payroll').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('payroll example page', {
            url: '/payroll/example',
            templateUrl: 'payroll/views/index.html'
        });
    }
]);
