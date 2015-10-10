app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
    .state('home', {
            url: '/home',
            templateUrl: 'app/partials/global/home.html',
            controller: function($rootScope) {
                $rootScope.date = new Date();
            }
        }).
    state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/partials/global/dashboard.html',
            controller: function($rootScope) {
                $rootScope.date = new Date();
            }
        }).
   state('searchresults', {
        controller: 'searchController',
        templateUrl: 'app/partials/global/search_results.html',
        controller: function($rootScope) {
                $rootScope.title = 'Search Results';
                
            }
    })
   
   

});