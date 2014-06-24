'use strict';

angular.module('mean.company').controller('CompanyController', ['$scope', 'Global', 'Company',
    function($scope, Global, Company) {
        $scope.global = Global;
        $scope.package = {
            name: 'company'
        };
    }
]);
