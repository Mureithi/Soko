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




;// I control the main demo.
app.controller("homeCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope
    ) {
    
  }
]);
;// I control the main demo.
app.controller(
    "searchController", ['$scope', '$filter','$timeout', 'ApiRestangular','$state', function(scope, filter,timeout, ApiRestangular,state) {
        getMemberCount();
        


        scope.getMember = function getMember(newMember) {
            console.log(newMember);
            scope.member = newMember;
            state.go('searchresults');
        }

        scope.getMembers = function getMembers() {
            var AllMembers = ApiRestangular.all('members');
            
            // This will query /accounts and return a promise.
            AllMembers.customGET('').then(function(members) {
                scope.rowCollection = members.data;
                console.log(members.data);
                scope.displayedCollection = [].concat(scope.rowCollection);

            });
        }

        function getMemberCount() {
            var AllMembers = ApiRestangular.all('members');
            // This will query /accounts and return a promise.
            AllMembers.customGET('').then(function(members) {
                scope.records = members.data.length;
                scope.recordsPerPage = 5;
                scope.pages = Math.ceil(scope.records/scope.recordsPerPage);

            });
        }
       
    }]
);;app.directive("ng-head", function () {
    return {
        templateUrl: "/index.html"
    }
});
;app.config(function($stateProvider, $urlRouterProvider) {
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
   
   

});;app.service('searchService', ['ApiRestangular', function (ApiRestangular) {
    
    this.getMembers = function (){
       // console.log('It works');
    AllMembers = ApiRestangular.all('members');
    
     // This will query /accounts and return a promise.
            AllMembers.customGET('').then(function(members) {
              
                console.log(members.data);
               

            });
    
    }
       
  }]);



 ;angular.module('templates-dist', ['../app/partials/global/dashboard.html', '../app/partials/global/header.html', '../app/partials/global/home.html', '../app/partials/global/list.html', '../app/partials/global/search_results.html', '../app/partials/home/about.html', '../app/partials/home/banner.html', '../app/partials/home/footer.html', '../app/partials/home/header.html', '../app/partials/home/services.html', '../app/partials/home/sub-header.html']);

angular.module("../app/partials/global/dashboard.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/dashboard.html",
    "<div class=\"container\">\n" +
    "   \n" +
    "   <div class=\"row\">\n" +
    "      \n" +
    "      <div class=\"col-md-3\">\n" +
    "         \n" +
    "        \n" +
    "             <div class=\"row\">\n" +
    "                \n" +
    "                <div class=\"col-md-12\">\n" +
    "                   \n" +
    "                   <div id=\"profile\">\n" +
    "                     <div class=\"ui special cards\">\n" +
    "                          <div class=\"card\">\n" +
    "                            <div class=\"dimmable image pic-bg\">\n" +
    "                              <div class=\"ui dimmer\">\n" +
    "                                <div class=\"content\">\n" +
    "                                  <div class=\"center\">\n" +
    "                                    <div class=\"ui inverted button\">Edit</div>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                              \n" +
    "                              <div class=\"ui small images\" id=\"prof-pic\">\n" +
    "                                  <img src=\"./assets/images/profpic.png\">\n" +
    "                                </div>\n" +
    "                              \n" +
    "                            </div>\n" +
    "                            <div class=\"content pic-bg center-text\">\n" +
    "                             <div class=\"\">\n" +
    "                             JOHNSON K. DOE\n" +
    "                              </div>\n" +
    "                              \n" +
    "                              <div class=\"\">\n" +
    "                                <span class=\"\">Neuro Surgeon - Nairobi Hospital</span>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                          </div>\n" +
    "\n" +
    "                        </div>  \n" +
    "                   </div><!-- end #profile-->\n" +
    "                    \n" +
    "                </div>\n" +
    "                 \n" +
    "             </div>\n" +
    "             \n" +
    "             <div class=\"row\">\n" +
    "                 <div class=\"col-md-12\">\n" +
    "                     <div class=\"side-nav\" id=\"\">\n" +
    "                        \n" +
    "                        <div class=\"cat-header\"> Categories </div>\n" +
    "                        \n" +
    "                        <div class=\"ui large vertical menu\" id=\"stats\">\n" +
    "                              <a class=\"item\">\n" +
    "                                \n" +
    "                                ALL\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui teal label\">3308</div>\n" +
    "                                Drugs\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">1850</div>\n" +
    "                                Manufacturers\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">2100</div>\n" +
    "                                Brands\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">3210</div>\n" +
    "                                Diseases\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">4212</div>\n" +
    "                                Distributors\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">48</div>\n" +
    "                                Countries\n" +
    "                              </a>\n" +
    "                              \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"advert-left\">\n" +
    "                           <img src=\"./assets/images/ADVERT2.png\"> \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        \n" +
    "                        \n" +
    "                         \n" +
    "                     </div>\n" +
    "                 </div>\n" +
    "             </div>\n" +
    "        \n" +
    "          \n" +
    "      </div>\n" +
    "      \n" +
    "      <div class=\"col-md-9\">\n" +
    "         \n" +
    "         <div class=\"row\">\n" +
    "            \n" +
    "            <div class=\"col-md-6 featured-drugs\" id=\"\">\n" +
    "               <div id=\"drugs-header\">Featured Drugs</div>\n" +
    "               \n" +
    "                       <div class=\"contain-table\">\n" +
    "                            <table st-table=\"rowCollection\" class=\"table table-striped\">\n" +
    "	                            <thead>\n" +
    "	                                <tr>\n" +
    "		                                <th>Name</th>\n" +
    "		                                <th>Drugs</th>\n" +
    "                                        \n" +
    "	                                </tr>\n" +
    "	                            </thead>\n" +
    "	                                <tbody>\n" +
    "	                                    <tr ng-repeat=\"row in rowCollection\">\n" +
    "		                                    <td>{{row.Name}}</td>\n" +
    "                                            <td>{{row.drugs}}</td>\n" +
    "                                            \n" +
    "	                                    </tr>\n" +
    "	                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"drugs-footer\"> VIEW ALL </div>\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"col-md-6 common-diseases\" id=\"\">\n" +
    "               <div id=\"disease-header\">Common Diseases</div>\n" +
    "               \n" +
    "               <div class=\"contain-table\">\n" +
    "                            <table st-table=\"rowCollection\" class=\"table table-striped\">\n" +
    "	                            <thead>\n" +
    "	                                <tr>\n" +
    "		                                <th>Disease</th>\n" +
    "		                                <th>Drugs</th>\n" +
    "                                        \n" +
    "	                                </tr>\n" +
    "	                            </thead>\n" +
    "	                                <tbody>\n" +
    "	                                    <tr ng-repeat=\"row in rowCollection\">\n" +
    "		                                    <td>{{row.Disease}}</td>\n" +
    "                                            <td>{{row.drugs}}</td>\n" +
    "                                            \n" +
    "	                                    </tr>\n" +
    "	                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"disease-footer\"> VIEW ALL </div>\n" +
    "                \n" +
    "            </div>\n" +
    "             \n" +
    "         </div>\n" +
    "         \n" +
    "         <div class=\"row\">\n" +
    "            \n" +
    "             <div class=\"col-md-12 \">\n" +
    "                \n" +
    "                \n" +
    "                   \n" +
    "                   <img src=\"./assets/images/ADVERT.png\" class=\"advert-slim\">\n" +
    "                    \n" +
    "                 \n" +
    "             </div>\n" +
    "         </div>\n" +
    "         \n" +
    "          <div class=\"row\" style=\"\">\n" +
    "            \n" +
    "            <div class=\"col-md-6 manufacturers-list\" id=\"\">\n" +
    "               <div id=\"manufacturers-header\">Top Manufacturers</div>\n" +
    "               \n" +
    "                       <div class=\"contain-table\">\n" +
    "                            <table st-table=\"rowCollection\" class=\"table table-striped\">\n" +
    "	                            <thead>\n" +
    "	                                <tr>\n" +
    "		                                <th>Manufacturer</th>\n" +
    "		                                <th>Drugs</th>\n" +
    "                                        \n" +
    "	                                </tr>\n" +
    "	                            </thead>\n" +
    "	                                <tbody>\n" +
    "	                                    <tr ng-repeat=\"row in rowCollection\">\n" +
    "		                                    <td>{{row.Manufacturer}}</td>\n" +
    "                                            <td>{{row.drugs}}</td>\n" +
    "                                            \n" +
    "	                                    </tr>\n" +
    "	                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"manufacturers-footer\"> VIEW ALL </div>\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"col-md-6 distributors-list sides-border\" id=\"\">\n" +
    "               <div id=\"distributors-header\">Recent Distributors</div>\n" +
    "               \n" +
    "               <div class=\"contain-table\">\n" +
    "                            <table st-table=\"rowCollection\" class=\"table table-striped\">\n" +
    "	                            <thead>\n" +
    "	                                <tr>\n" +
    "		                                <th>Distributors</th>\n" +
    "		                                <th>Drugs</th>\n" +
    "                                        \n" +
    "	                                </tr>\n" +
    "	                            </thead>\n" +
    "	                                <tbody>\n" +
    "	                                    <tr ng-repeat=\"row in rowCollection\">\n" +
    "		                                    <td>{{row.Distributors}}</td>\n" +
    "                                            <td>{{row.drugs}}</td>\n" +
    "                                            \n" +
    "	                                    </tr>\n" +
    "	                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"distributors-footer\"> VIEW ALL </div>\n" +
    "                \n" +
    "            </div>\n" +
    "             \n" +
    "         </div>\n" +
    "         \n" +
    "         <div class=\"row\">\n" +
    "            \n" +
    "             <div class=\"col-md-8\">\n" +
    "              \n" +
    "               <div id=\"advert-bottom-left\" class=\"row\">\n" +
    "                  <img src=\"./assets/images/ADVERT3.png\" > \n" +
    "               </div>\n" +
    "               \n" +
    "               <div class=\"row \" >\n" +
    "                 \n" +
    "                 <div class=\"col-12 \">\n" +
    "                    \n" +
    "                    <div class=\"ui very relaxed items article-bottom sides-border \" id=\"\">\n" +
    "                          <div class=\"item\">\n" +
    "\n" +
    "                            <div class=\"content\">\n" +
    "                              <a class=\"ui header\" href=\"#link\">Article Title Goeshere</a>\n" +
    "                              <div class=\"description\">\n" +
    "                                <p>Ut imperdiet dignissim feugiat. Phasellus tristique odio eu justo dapibus, nec rutrum ipsum luctus. Ut posuere nec tortor eu ullamcorper. <a href=\"#link\">Etiam pellentesque</a> tincidunt tortor, non sagittis nibh pretium sit amet. Sed neque dolor, blandit eu ornare vel, lacinia porttitor nisi. Vestibulum sit amet diam rhoncus, consectetur enim sit amet, interdum mauris. Praesent feugiat finibus quam, porttitor varius est egestas id.</p>\n" +
    "                              </div>\n" +
    "                              <div class=\"content-footer\">\n" +
    "                                 <span>by Name Goeshere</span>\n" +
    "                                    \n" +
    "                                    <span id=\"text-grey\">|  Feb 07, 2015</span>\n" +
    "                                     \n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                  \n" +
    "                \n" +
    "                   \n" +
    "               </div>\n" +
    "                     \n" +
    "                 </div>\n" +
    "                 \n" +
    "                \n" +
    "                 \n" +
    "             </div>\n" +
    "             \n" +
    "             \n" +
    "                \n" +
    "                \n" +
    "                 \n" +
    "             </div>\n" +
    "             \n" +
    "             <div class=\"col-md-4\">\n" +
    "               \n" +
    "               <div id=\"advert-bottom-right\">\n" +
    "                 \n" +
    "                  <img src=\"./assets/images/ADVERT4.png\" >\n" +
    "                   \n" +
    "               </div>\n" +
    "             \n" +
    "         </div>\n" +
    "         \n" +
    "         \n" +
    "          \n" +
    "      </div>\n" +
    "       \n" +
    "   </div>\n" +
    "    \n" +
    "    \n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("../app/partials/global/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/header.html",
    "");
}]);

angular.module("../app/partials/global/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/home.html",
    "<section id=\"services\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-12 text-center\">\n" +
    "                    <h2 class=\"section-heading\">What We Offer</h2>\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                    <div class=\"row\">\n" +
    "                        \n" +
    "                        <div class=\"bg-icon1 center-img\">\n" +
    "                    <img src=\"assets/images/Vector-Smart-Object.png\" class=\"img-responsive \" style=\"position: relative; padding: 27px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                     \n" +
    "                    \n" +
    "                    </div>\n" +
    "                    <div style=\"\" class=\"row section-notes\">Responsive Modern Website</div>\n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                   <img src=\"assets/images/Vector-Smart-Object-copy-6.png\" class=\"img-responsive center-img\">\n" +
    "                    <span class=\"section-notes\"> Social Media Marketing</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-6 text-center border-bottom services\">\n" +
    "                    <div class=\"row\">\n" +
    "                        \n" +
    "                        <div class=\"bg-icon3 center-img\">\n" +
    "                    <img src=\"assets/images/develop.png\" class=\"img-responsive \" style=\"position: relative; padding: 27px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                     \n" +
    "                    \n" +
    "                    </div>\n" +
    "                    <div style=\"\" class=\"row section-notes\">Mobile APP Development</div>\n" +
    "                   \n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-6 text-center border-right services\">\n" +
    "                                        \n" +
    "                    <div class=\"row\">\n" +
    "                        \n" +
    "                        <div class=\"bg-icon1 center-img\">\n" +
    "                    <img src=\"assets/images/email.png\" class=\"img-responsive \" style=\"position: relative; padding: 27px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                     \n" +
    "                    \n" +
    "                    </div>\n" +
    "                    <div style=\"\" class=\"row section-notes\">Domain Hosting & Email</div>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-6 text-center border-right services\">\n" +
    "                  <div class=\"row\">\n" +
    "                        \n" +
    "                        <div class=\"bg-icon3 center-img\">\n" +
    "                    <img src=\"assets/images/brand.png\" class=\"img-responsive \" style=\"position: relative; padding: 27px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                     \n" +
    "                    \n" +
    "                    </div>\n" +
    "                    <div style=\"\" class=\"row section-notes\">Brand Identity Design</div>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-6 text-center services\">\n" +
    "                                       \n" +
    "                    <div class=\"row\">\n" +
    "                        \n" +
    "                        <div class=\"bg-icon1 center-img\">\n" +
    "                    <img src=\"assets/images/Vassistant.png\" class=\"img-responsive \" style=\"position: relative; padding: 30px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                     \n" +
    "                    \n" +
    "                    </div>\n" +
    "                    <div style=\"\" class=\"row section-notes\">Virtual Tech Assistant</div>\n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"no-padding\" id=\"howitworks\">\n" +
    "        \n" +
    "        <div class=\"howitworks\">\n" +
    "\n" +
    "    <div class=\"banner-steps\">\n" +
    "        </div>\n" +
    "            \n" +
    "            <div id=\"carousel-example\" class=\"carousel slide\" data-ride=\"carousel\" style=\"padding-top: 100px;\">\n" +
    "    <!-- Wrapper for slides -->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-offset-3 col-xs-6\">\n" +
    "            <div class=\"carousel-inner\">\n" +
    "                <div class=\"item active\">\n" +
    "                    <div class=\"carousel-content\">\n" +
    "                        <div>\n" +
    "                            <div class=\"banner2-slide-text\">How It Works</div>\n" +
    "                            <div class=\"slide-text\">3 easy steps</div>\n" +
    "                            \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                            \n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "   \n" +
    "</div>\n" +
    "            \n" +
    "    \n" +
    "    \n" +
    "            \n" +
    "    </div>\n" +
    "        \n" +
    "    </section>\n" +
    "\n" +
    "    \n" +
    "    <section id=\"fillinfor\" style=\"background-color: #f3f3f3 !important;\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-1\">\n" +
    "                <div class=\"bg-icon-small center-img\">\n" +
    "                    <img src=\"assets/images/arrow-left.png\" class=\"img-responsive \" style=\"position: relative; padding: 22px 25px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    \n" +
    "                    <div class=\"bg-icon-infor\">\n" +
    "                    <img src=\"assets/images/basic-infor.png\" class=\"img-responsive \" style=\"position: relative; padding: 27px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                 <div class=\"col-lg-5 \">\n" +
    "                    <h2 id=\"\" class=\"section-heading\" style=\"margin-top:15%;\">Fill Basic Information</h2>\n" +
    "                    \n" +
    "                    <p>Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum. Eius deterruisset ut per, eos no congue ceteros posidonium. Te eam elit contentiones, mea id ancillae volutpat dissentiunt.</p>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"col-lg-1\">\n" +
    "                <div class=\"bg-icon-small center-img\">\n" +
    "                    <img src=\"assets/images/arrow-right.png\" class=\"img-responsive \" style=\"position: relative; padding: 22px 25px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "               \n" +
    "            </div>\n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "<section id=\"pricing\" class=\"border-bottom\">\n" +
    "    <h2 id=\"text-green\" class=\"section-heading text-center\">Our Pricing</h2>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"cd-pricing-container cd-has-margins\">\n" +
    "\n" +
    "		<ul class=\"cd-pricing-list\">\n" +
    "			<li>\n" +
    "				<header class=\"cd-pricing-header\">\n" +
    "					<h2>BASIC</h2>\n" +
    "\n" +
    "					<div class=\"cd-price\">\n" +
    "						<span class=\"cd-currency\">$</span>\n" +
    "						<span class=\"cd-value\">10</span>\n" +
    "						<span class=\"cd-duration\">mo</span>\n" +
    "					</div>\n" +
    "				</header> <!-- .cd-pricing-header -->\n" +
    "\n" +
    "				<div class=\"cd-pricing-body\">\n" +
    "					<ul class=\"cd-pricing-features\">\n" +
    "						<li><em>USD 50</em> PER YEAR SAVE <em>30%</em></li>\n" +
    "						<li><em>1</em> User</li>\n" +
    "						<li><em>1</em> Website</li>\n" +
    "						<li><em>1</em> Domain</li>\n" +
    "						<li><em>Unlimited</em> Bandwidth</li>\n" +
    "						<li><em>24/7</em> Support</li>\n" +
    "					</ul>\n" +
    "				</div> <!-- .cd-pricing-body -->\n" +
    "\n" +
    "				<footer class=\"cd-pricing-footer\">\n" +
    "					<a class=\"cd-select\" href=\"http://codyhouse.co/?p=429\">Select</a>\n" +
    "				</footer> <!-- .cd-pricing-footer -->\n" +
    "			</li>\n" +
    "			<li class=\"cd-popular\">\n" +
    "				<header class=\"cd-pricing-header\">\n" +
    "					<h2>STANDARD</h2>\n" +
    "\n" +
    "					<div class=\"cd-price\">\n" +
    "						<span class=\"cd-currency\">$</span>\n" +
    "						<span class=\"cd-value\">25</span>\n" +
    "						<span class=\"cd-duration\">mo</span>\n" +
    "					</div>\n" +
    "				</header> <!-- .cd-pricing-header -->\n" +
    "\n" +
    "				<div class=\"cd-pricing-body\">\n" +
    "					<ul class=\"cd-pricing-features\">\n" +
    "						<li><em>USD 50</em> PER YEAR SAVE <em>30%</em></li>\n" +
    "						<li><em>3</em> Users</li>\n" +
    "						<li><em>5</em> Websites</li>\n" +
    "						<li><em>7</em> Domains</li>\n" +
    "						<li><em>Unlimited</em> Bandwidth</li>\n" +
    "						<li><em>24/7</em> Support</li>\n" +
    "					</ul>\n" +
    "				</div> <!-- .cd-pricing-body -->\n" +
    "\n" +
    "				<footer class=\"cd-pricing-footer\">\n" +
    "					<a class=\"cd-select\" href=\"http://codyhouse.co/?p=429\">Select</a>\n" +
    "				</footer> <!-- .cd-pricing-footer -->\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<header class=\"cd-pricing-header\">\n" +
    "					<h2>PREMIER</h2>\n" +
    "\n" +
    "					<div class=\"cd-price\">\n" +
    "						<span class=\"cd-currency\">$</span>\n" +
    "						<span class=\"cd-value\">75</span>\n" +
    "						<span class=\"cd-duration\">mo</span>\n" +
    "					</div>\n" +
    "				</header> <!-- .cd-pricing-header -->\n" +
    "\n" +
    "				<div class=\"cd-pricing-body\">\n" +
    "					<ul class=\"cd-pricing-features\">\n" +
    "						<li><em>USD 50</em> PER YEAR SAVE <em>30%</em></li>\n" +
    "						<li><em>5</em> Users</li>\n" +
    "						<li><em>10</em> Websites</li>\n" +
    "						<li><em>10</em> Domains</li>\n" +
    "						<li><em>Unlimited</em> Bandwidth</li>\n" +
    "						<li><em>24/7</em> Support</li>\n" +
    "					</ul>\n" +
    "				</div> <!-- .cd-pricing-body -->\n" +
    "                <footer class=\"cd-pricing-footer\">\n" +
    "					<a class=\"cd-select\" href=\"http://codyhouse.co/?p=429\">Select</a>\n" +
    "				</footer>  <!-- .cd-pricing-footer -->\n" +
    "			</li>\n" +
    "		</ul> <!-- .cd-pricing-list -->\n" +
    "	</div> <!-- .cd-pricing-container -->\n" +
    "\n" +
    "                \n" +
    "               \n" +
    "            </div>\n" +
    "            \n" +
    "           \n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "<section id=\"featuredwork\" class=\"border-bottom\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-6 text-center\">\n" +
    "                    <img src=\"assets/images/Layer-61.png\">\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-5\">\n" +
    "                    \n" +
    "                    <h2 id=\"text-green\" class=\"section-heading \">Featured Work</h2>\n" +
    "                    <h3 id=\"text-green\" class=\"section-heading \">Client Name</h3>\n" +
    "                    <h4 id=\"text-green\" class=\"section-heading \">Project Title</h4>\n" +
    "                    <h4 id=\"text-green\" class=\"section-heading \">Categoty</h4>\n" +
    "                    \n" +
    "                    <div>\n" +
    "                    <p>\n" +
    "                        Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum. Eius deterruisset ut per, eos no congue ceteros posidonium. Te eam elit contentiones, mea id ancillae volutpat dissentiunt</p></div>\n" +
    "                </div>\n" +
    "                \n" +
    "               \n" +
    "            </div>\n" +
    "            \n" +
    "           \n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "<section id=\"contact-us\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            \n" +
    "            <h2 id=\"text-green\" class=\"section-heading text-center\" style=\"margin:1em;\">Contact Us</h2>\n" +
    "            \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-1\">\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"col-lg-4 col-xs-12 border-right\">\n" +
    "                  <img src=\"assets/images/Layer-64-copy.png\" style=\"margin-left: 8em;\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 col-xs-12 \">\n" +
    "                    <p>\n" +
    "                    US: +1 20 2345 678\n" +
    "                    </p>\n" +
    "                    <p>KE: +1 20 2345 678</p>\n" +
    "                    <p>sales@coders4africa.com</p>\n" +
    "                    <p>info@coders4africa.com</p>\n" +
    "\n" +
    "                   <p> US: +1 20 2345 678</p>\n" +
    "                    <p>KE: +1 20 2345 678</p>\n" +
    "                   <p> sales@coders4africa.com</p>\n" +
    "                    <p>info@coders4africa.com</p>\n" +
    "\n" +
    "                   <p> Locate us on the map</p>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 col-xs-12\">\n" +
    "                    \n" +
    "                    <div class=\"ui form \">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Name\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui form margin-field\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Enter your email\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui form margin-field\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Subject\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui form margin-field\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <textarea placeholder=\"Message\"></textarea>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-1\">\n" +
    "                </div>\n" +
    "                \n" +
    "               \n" +
    "            </div>\n" +
    "            \n" +
    "           \n" +
    "        </div>\n" +
    "    </section>");
}]);

angular.module("../app/partials/global/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/list.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "       \n" +
    "        <div class=\"col-md-9\">\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div  class=\"col-md-3\">\n" +
    "           \n" +
    "           <div class=\"side-nav\" id=\"\">\n" +
    "                        \n" +
    "                        <div class=\"cat-header\"> Categories </div>\n" +
    "                        \n" +
    "                        <div class=\"ui large vertical menu\" id=\"stats\">\n" +
    "                              <a class=\"item\">\n" +
    "                                \n" +
    "                                ALL\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui teal label\">3308</div>\n" +
    "                                Drugs\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">1850</div>\n" +
    "                                Manufacturers\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">2100</div>\n" +
    "                                Brands\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">3210</div>\n" +
    "                                Diseases\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">4212</div>\n" +
    "                                Distributors\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">48</div>\n" +
    "                                Countries\n" +
    "                              </a>\n" +
    "                              \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"advert-left\">\n" +
    "                           <img src=\"./assets/images/ADVERT2.png\"> \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        \n" +
    "                        \n" +
    "                         \n" +
    "                     </div>\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("../app/partials/global/search_results.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/search_results.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "       \n" +
    "        <div class=\"col-md-9\">\n" +
    "          <div class=\"ui category search\">\n" +
    "    <div class=\"ui icon input\">\n" +
    "      <input class=\"prompt\" type=\"text\" placeholder=\"Search animals...\">\n" +
    "      <i class=\"search icon\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"results\"></div>\n" +
    "  </div>  \n" +
    "        </div>\n" +
    "        \n" +
    "        <div  class=\"col-md-3\">\n" +
    "           \n" +
    "           <div class=\"side-nav\" id=\"\">\n" +
    "                        \n" +
    "                        <div class=\"cat-header\"> Categories </div>\n" +
    "                        \n" +
    "                        <div class=\"ui large vertical menu\" id=\"stats\">\n" +
    "                              <a class=\"item\">\n" +
    "                                \n" +
    "                                ALL\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui teal label\">3308</div>\n" +
    "                                Drugs\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">1850</div>\n" +
    "                                Manufacturers\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">2100</div>\n" +
    "                                Brands\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">3210</div>\n" +
    "                                Diseases\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">4212</div>\n" +
    "                                Distributors\n" +
    "                              </a>\n" +
    "                              <a class=\"item\">\n" +
    "                                <div class=\"ui label\">48</div>\n" +
    "                                Countries\n" +
    "                              </a>\n" +
    "                              \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div id=\"advert-left\">\n" +
    "                           <img src=\"./assets/images/ADVERT2.png\"> \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        \n" +
    "                        \n" +
    "                         \n" +
    "                     </div>\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("../app/partials/home/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/about.html",
    "<div class=\"padded-sides about\">\n" +
    "  <div class=\"row white padded-bottom\" style=\"padding-top:12%\">\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"col-md-4 slighted-above centered\">\n" +
    "        <span class=\"black-text\" translate>about.first.share</span>\n" +
    "        <a style=href='#' class='symbol' title='circlefacebook'></a>\n" +
    "        <a href='#' class='symbol' title='circletwitterbird'></a>\n" +
    "        <a href='#' class='symbol' title='circlegoogleplus'></a>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-offset-8 centered col-md-4 slighted-above\">\n" +
    "        <span class='black-text' translate>about.first.featured</span>\n" +
    "        <img src=\"images/techcrunch.png\" alt=\"\">\n" +
    "        <img src=\"images/techmoran.png\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-offset-4 col-md-4\">\n" +
    "        <h3 style=\"color:black !important\" class=\"centered\" translate>about.first.title</h3>\n" +
    "        <p class=\"centered gray-text\" translate>about.first.description</p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"circled\"><i class=\"\"></i></div>\n" +
    "      <img src=\"images/physical.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "      <h5 class=\"centered black-text\" translate>about.second.col_1.title</h5>\n" +
    "      <p class='black-text' translate>about.second.col_1.description\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"circled\"><i class=\"\"></i></div>\n" +
    "      <img src=\"images/service_delivery.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "      <h5 class=\"centered black-text\" translate>about.second.col_2.title</h5>\n" +
    "      <p class='black-text' translate>about.second.col_2.description</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"circled\"><i class=\"\"></i></div>\n" +
    "      <img src=\"images/citizen_empowerment.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "      <h5 class=\"centered black-text\" translate>about.second.col_3.title</h5>\n" +
    "      <p class='black-text' translate>about.second.col_3.description</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/partials/home/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/banner.html",
    "<div class=\"banner padded-sides\">\n" +
    "    <div class=\"row description\">\n" +
    "      <div class=\"col-md-4 padded-top\"\n" +
    "      sn-skrollr\n" +
    "      data--100p-top=\"font-size:0.5em !important\"\n" +
    "      >\n" +
    "        <h3 class=\"white-text\" translate>banner.col_1.title</h3>\n" +
    "        <p class=\"white-text\" translate>banner.col_1.description</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 padded-top right\"\n" +
    "      sn-skrollr\n" +
    "      data--100p-top=\"font-size:0.5em !important\"\n" +
    "      >\n" +
    "        <h5 class=\"white-text hidden-xs hidden-sm\" style=\"margin-bottom:0.2em\" translate>banner.col_2.title</h5>\n" +
    "        <p class=\"white-text hidden-xs hidden-sm\" translate>banner.col_2.description</p>\n" +
    "        <button class=\"btn btn-default btn-large btn-blue hidden-xs hidden-sm\" translate>banner.col_2.button</button> <span class=\"white-text hidden-xs hidden-sm\" translate>banner.col_2.option</span>\n" +
    "        <img src=\"images/google.png\" class=\"img-responsive play\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 right\">\n" +
    "        <img\n" +
    "        sn-skrollr\n" +
    "        data-start=\"width:80%\"\n" +
    "        data--80-top=\"width:20%\"\n" +
    "        class=\"phone img-responsive\" src=\"images/phone_banner.jpg\" alt=\"\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "");
}]);

angular.module("../app/partials/home/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/footer.html",
    "<footer class=\"row white\">\n" +
    "  <div class=\"col-md-4 centered\">\n" +
    "    <span class=\"block gray-text\" translate>footer.col_1.description</span>\n" +
    "    <a href='#' class='symbol' title='circlefacebook'></a>\n" +
    "    <a href='#' class='symbol' title='circletwitterbird'></a>\n" +
    "    <a href='#' class='symbol' title='circlegoogleplus'></a>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 centered right\">\n" +
    "    <span class=\"gray-text\" translate>footer.col_2.description</span>\n" +
    "<img src=\"images/google.png\" class=\"img-responsive play\" alt=\"\">\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 centered right\"><span class=\"gray-text\" >Copyright &copy 2015 Anwani App</span> </div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("../app/partials/home/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/header.html",
    "<div class=\"\">\n" +
    "    <img src=\"\" class=\"banner-img\" />\n" +
    "<nav class=\"navbar navbar-default navbar-fixed-top \">\n" +
    "      <div class=\"container\" style=\"opacity: 0.5;\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <div class=\"pull-left\" id=\"logo\">\n" +
    "            <a  ng-click=\"\"  href=\"\">\n" +
    "            <img src=\"assets/images/C4A-logo.png\">\n" +
    "            </a>\n" +
    "\n" +
    "            </div>\n" +
    "          <a class=\"navbar-brand \" id=\"banner-text\" ng-click=\"\"></a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse pull-right\">\n" +
    "          <ul class=\"nav navbar-nav main-nav\">\n" +
    "              <li ><a class=\"\" ui-sref=\"#\">HOME</a></li>\n" +
    "              <li ><a class=\"\" ui-sref=\"#\">SERVICES </a></li>\n" +
    "              <li ><a class=\"\" ui-sref=\"#\">HOW IT WORKS</a></li>\n" +
    "              <li ><a class=\"\" ui-sref=\"#\">PRICING</a></li>\n" +
    "              <li ><a class=\"\" ui-sref=\"#\">ABOUT US</a></li>\n" +
    "              <li ><a class=\"\" ui-sref=\"#\">CONTACT</a></li>\n" +
    "\n" +
    "          </ul>\n" +
    "          \n" +
    "\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "              Your Customers are Online\n" +
    "\n" +
    "    </div> \n" +
    "            <div class=\"col-md-12\">\n" +
    "              Can They Find You?\n" +
    "\n" +
    "    </div> \n" +
    "            <div class=\"col-md-12\">\n" +
    "              Let CODERS4AFRICA build your website and social media in 48 hours\n" +
    "for less than $10 a month\n" +
    "\n" +
    "    </div>\n" +
    "            <div class=\"col-md-12\">\n" +
    "              \n" +
    "\n" +
    "    </div> \n" +
    "            \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "    </nav>\n" +
    "\n" +
    "\n" +
    "  \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/partials/home/services.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/services.html",
    "<div class=\"row gray padded translate features\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <h3 class=\"centered\" translate>features.top.title</h3>\n" +
    "    <h4 class=\"gray\" translate>features.top.description</h4>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 \" style=\"padding-top:30px\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.first.col_1.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/create_address.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.first.col_1.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.first.col_2.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/existing_address.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.first.col_2.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.first.col_3.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/manage_address.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.first.col_3.description</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 right\" style=\"padding-top:30px\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.second.col_1.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/reply_all.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.second.col_1.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.second.col_2.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/camera.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.second.col_2.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.second.col_3.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/map.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.second.col_3.description</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 right\">\n" +
    "  <img\n" +
    "  sn-skrollr\n" +
    "  data-start=\"width:20%\"\n" +
    "  data-40p-top=\"width:100%\"\n" +
    "  src=\"images/phone_image.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "<p class=\"gray-text centered\" translate>features.tertiary</p>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/partials/home/sub-header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/home/sub-header.html",
    "<div class=\"row\">\n" +
    "  <nav id=\"sub\" class=\"col-md-4 col-md-offset-4\">\n" +
    "    <ul class=\"nav navbar-nav row\" style=\"width:100%\">\n" +
    "      <li class=\"col-xs-4\" bs-scrollspy du-scrollspy du-smooth-scroll href=\"#home\" data-target=\"#home\"><a class=\"centered\" translate>header.links.one</a></li>\n" +
    "      <li class=\"col-xs-4\" bs-scrollspy du-scrollspy du-smooth-scroll href=\"#about\" data-target=\"#about\"><a class=\"centered\" translate>header.links.two</a></li>\n" +
    "      <li class=\"col-xs-4\" bs-scrollspy du-scrollspy du-smooth-scroll href=\"#features\" data-target=\"#features\"><a class=\"centered\" translate>header.links.three</a></li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "</div>\n" +
    "");
}]);
