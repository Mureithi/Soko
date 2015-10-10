var app = angular.module("soko", ['ui.router','smart-table','restangular','textAngular','angularMoment']);

app.controller('HomeController', ['$scope', '$http',
  function ($scope, $http) {

  }]);



app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost/');
  RestangularProvider.setRequestSuffix('.json');
});

app.factory('ApiRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://localhost/hmis/api');
  });
});

app.run(['$http', '$rootScope',  function(
  $http, $rootScope
  ) {
     $rootScope.date = new Date();
     $rootScope.title = 'Soko';
     $rootScope.messages=[];
     $rootScope.menu=[];
     //snSkrollr.init();
 }]);




