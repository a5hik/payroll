'use strict';

angular.module('mean.reports').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('reports example page', {
            url: '/reports/example',
            templateUrl: 'reports/views/index.html'
        });
    }
]);
