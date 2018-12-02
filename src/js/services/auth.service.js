'use strict';

baseServices.service('AuthService', ['$rootScope', '$cookies', function($rootScope, $cookies) {
  this.token = null;
  this.username = null;

  this.update = function() {
    this.token = $cookies.get('baseUserToken');
    this.username = $cookies.get('baseUserName');
  };

  this.clear = function(){
    $cookies.remove('baseUserToken', {path: '/', domain: 'inceres.com.br'});
    $cookies.remove('baseUserName', {path: '/', domain: 'inceres.com.br'});
    this.update();
  };

  this.userIsLogged = function() {
    return this.token !== null && this.token !== undefined;
  };

}]);
