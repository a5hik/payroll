'use strict';

angular.module('mean.company').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('company example page', {
            url: '/company/example',
            templateUrl: 'company/views/index.html'
        });
    }
]);
