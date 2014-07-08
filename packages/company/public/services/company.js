'use strict';

angular.module('mean.company').factory('Company', ['$resource',
  function($resource) {
    return $resource('company/:companyId', {
      companyId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
