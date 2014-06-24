'use strict';

angular.module('mean.employee').controller('EmployeeController', ['$scope', 'Global', 'Employee',
    function($scope, Global, Employee) {
        $scope.global = Global;
        $scope.package = {
            name: 'employee'
        };
    }
]);
