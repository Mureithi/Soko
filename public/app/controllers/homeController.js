app.controller('homeController', function($scope, $http) {

	$scope.pools = [];
	$http.get('api').
	success(function(data, status, headers, config) {
		$scope.pools = data;
		console.log(data);
	});
	

});

app.controller('anotherController', function($scope, $http) {

	$scope.pools = [];
	$http.get('api/nextpage').
	success(function(data, status, headers, config) {
		$scope.pools = data;
		console.log(data);
	});
	

});

