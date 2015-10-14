var app = angular.module("soko", ['ui.router','smart-table','restangular','textAngular','angularMoment','sn.skrollr']);

app.controller('HomeController', ['$scope', '$http',
  function ($scope, $http) {

  }]);



app.config(function(RestangularProvider,snSkrollrProvider) {
  RestangularProvider.setBaseUrl('http://localhost/');
  RestangularProvider.setRequestSuffix('.json');
snSkrollrProvider.config = { smoothScrolling: true };
});

app.factory('ApiRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://localhost/hmis/api');
  });
});

app.run(['$http', '$rootScope','snSkrollr',  function(
  $http, $rootScope,$snSkrollr
  ) {
     $rootScope.date = new Date();
     $rootScope.title = 'Soko';
     $rootScope.messages=[];
     $rootScope.menu=[];
     $snSkrollr.init();
 }]);




