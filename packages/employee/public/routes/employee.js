'use strict';

angular.module('mean.employee').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('employee example page', {
            url: '/employee/example',
            templateUrl: 'employee/views/index.html'
        });
    }
]);
