angular.module('nprogress-rails', [])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(['$q', function($q) {
      return {
        'request': function(config) {
          NProgress.start();
          return config;
        },
        'requestError': function(rejection) {
          NProgress.done();
          return $q.reject(rejection);
        },
        'response': function(response) {
          NProgress.done();
          return response;
        },
        'responseError': function(rejection) {
          NProgress.done();
          return $q.reject(rejection);
        }
      };
    }]);
  }]);
