'use strict';

baseFactories.factory('AuthInterceptor', ['$rootScope', '$q', 'AuthService', function($rootScope, $q, AuthService) {
  return {
    request: function(config) {
      return config;
    },
    responseError: function(response) {
      if (response.status === 401) {
        AuthService.clear();
        window.location.href = '/#!/login';
      }
      return $q.reject(response);
    }
  };
}]);
