app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
    .state('home', {
            url: '/home',
        views: {
        "content": { 
            templateUrl: 'app/partials/global/home.html',
            controller: function($rootScope) {
                $rootScope.date = new Date();
            }
        },
            "banner": { 
            templateUrl: 'app/partials/banner1.html'
            
        }
      }          
            
        }).
    state('getstarted-1', {
            url: '/getstarted-1',
        views: {
        "content": { 
            templateUrl: 'app/partials/getstarted-1.html',
            controller: function($rootScope) {
                $rootScope.title = 'Business Infor';
            }
        },
            "banner": { 
            templateUrl: 'app/partials/banner2.html'
            
        }
      }          
            
        }).
    state('getstarted-2', {
            url: '/getstarted-2',
        views: {
        "content": { 
            templateUrl: 'app/partials/getstarted-2.html',
            controller: function($rootScope) {
                $rootScope.title = 'Choose Template';
            }
        },
            "banner": { 
            templateUrl: 'app/partials/banner2.html'
            
        }
      }          
            
        }).
    state('getstarted-3', {
            url: '/getstarted-3',
        views: {
        "content": { 
            templateUrl: 'app/partials/getstarted-3.html',
            controller: function($rootScope) {
                $rootScope.title = 'Confirmation';
            }
        },
            "banner": { 
            templateUrl: 'app/partials/banner2.html'
            
        }
      }          
            
        })   
   

});


