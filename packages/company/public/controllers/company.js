'use strict';

angular.module('mean.company').controller('CompanyController', ['$scope', '$stateParams', '$location', 'Global', 'Company',
  function($scope, $stateParams, $location, Global, Company) {
    $scope.global = Global;

    $scope.hasAuthorization = function(company) {
      if (!company || !company.user) return false;
      return $scope.global.isAdmin || company.user._id === $scope.global.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var company = new Company({
          title: this.title,
          content: this.content
        });
        company.$save(function(response) {
          $location.path('company/' + response._id);
        });

        this.title = '';
        this.content = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(company) {
      if (company) {
        company.$remove();

        for (var i in $scope.companies) {
          if ($scope.companies[i] === company) {
            $scope.companies.splice(i, 1);
          }
        }
      } else {
        $scope.company.$remove(function(response) {
          $location.path('company');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var company = $scope.company;
        if (!company.updated) {
          company.updated = [];
        }
        company.updated.push(new Date().getTime());

        company.$update(function() {
          $location.path('company/' + company._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Company.query(function(companies) {
        $scope.companies = companies;
      });
    };

    $scope.findOne = function() {
      Company.get({
        companyId: $stateParams.companyId
      }, function(company) {
        $scope.company = company;
      });
    };
  }
]);
