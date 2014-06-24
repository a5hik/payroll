'use strict';

angular.module('mean.reports').controller('ReportsController', ['$scope', 'Global', 'Reports',
    function($scope, Global, Reports) {
        $scope.global = Global;
        $scope.package = {
            name: 'reports'
        };
    }
]);
