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




;// I control the main demo.
app.controller("homeCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope
    ) {
    
  }
]);
;app.directive("ng-head", function () {
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
   
   

});;angular.module('templates-dist', ['../app/partials/global/header.html', '../app/partials/global/home.html', '../app/partials/home/about.html', '../app/partials/home/header.html']);

angular.module("../app/partials/global/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/header.html",
    "");
}]);

angular.module("../app/partials/global/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/global/home.html",
    "<div class=\"banner\">\n" +
    "\n" +
    "    <div class=\"banner-img\">\n" +
    "        </div>\n" +
    "            \n" +
    "            <div id=\"carousel-example\" class=\"carousel slide\" data-ride=\"carousel\" style=\"\">\n" +
    "    <!-- Wrapper for slides -->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"carousel-inner\">\n" +
    "                <div class=\"item active\">\n" +
    "                    <div class=\"carousel-content\">\n" +
    "                        <div>\n" +
    "                            <div class=\"h1-slide-text\">Your Customers are Online</div>\n" +
    "                            <div class=\"h2-slide-text\">Can They Find You?</div>\n" +
    "                            <div class=\"slide-text\">Let CODERS4AFRICA build your website and social media in 48 hours for less than $10 a month.</div>\n" +
    "                            <div class=\"get-started\"> \n" +
    "                            <img src=\"images/button.png\" class=\"img-responsive \">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                            \n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- Controls  <a class=\"left carousel-control\" href=\"#carousel-example\" data-slide=\"prev\">\n" +
    "    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "  </a>\n" +
    " <a class=\"right carousel-control\" href=\"#carousel-example\" data-slide=\"next\">\n" +
    "    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "  </a>-->\n" +
    "\n" +
    "</div>\n" +
    "            \n" +
    "    \n" +
    "    \n" +
    "            \n" +
    "    </div> \n" +
    "<section id=\"services\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-12 col-md-12 text-center\">\n" +
    "                    <h2 class=\"section-heading\">What We Offer</h2>\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"\">\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                    <div class=\"\">\n" +
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
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                   <img src=\"assets/images/Vector-Smart-Object-copy-6.png\" class=\"img-responsive center-img\">\n" +
    "                    <span class=\"section-notes\"> Social Media Marketing</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                    <div class=\"\">\n" +
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
    "            <div class=\"\">\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                                        \n" +
    "                    <div class=\"\">\n" +
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
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                  <div class=\"\">\n" +
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
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services\">\n" +
    "                                       \n" +
    "                    <div class=\"\">\n" +
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
    "    <section id=\"fillinfor\" style=\"background-color: #f3f3f3 !important;\">\n" +
    "     <div class=\"container\" style=\"padding: 2em;\">\n" +
    "           <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\" style=\"position: relative !important;\">\n" +
    "  <!-- Indicators -->\n" +
    "  <ol class=\"carousel-indicators\">\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "  </ol>\n" +
    "\n" +
    "  <!-- Wrapper for slides -->\n" +
    "  <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "    <div class=\"active\">\n" +
    "        \n" +
    "        <div class=\"col-md-4 col-sm-4 col-xs-6\"><img src=\"assets/images/basic-infor.png\" alt=\"...\" class=\"img-responsive \"></div>\n" +
    "        <div class=\"col-md-8 col-sm-8 col-xs-6\">\n" +
    "        <div class=\"\">\n" +
    "        <div class=\"\">\n" +
    "                    <h2 id=\"\" class=\"section-heading\" style=\"margin-top:5%;\">Fill Basic Information</h2>\n" +
    "                    \n" +
    "                    <p style=\"margin-top:5%;\">Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum.</p>\n" +
    "                </div>\n" +
    "      </div>\n" +
    "        </div>\n" +
    "      \n" +
    "      \n" +
    "    </div>\n" +
    "   <!-- <div class=\"\">\n" +
    "      <div class=\"col-md-4 col-sm-4 col-xs-6\"><img src=\"assets/images/basic-infor.png\" alt=\"...\" class=\"img-responsive \"></div>\n" +
    "        <div class=\"col-md-8 col-sm-8 col-xs-6\">\n" +
    "        <div class=\"\">\n" +
    "        <div class=\"\">\n" +
    "                    <h2 id=\"\" class=\"section-heading\" style=\"margin-top:5%;\">Fill Basic Information</h2>\n" +
    "                    \n" +
    "                    <p style=\"margin-top:5%;\">Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum.</p>\n" +
    "                </div>\n" +
    "      </div>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Controls -->\n" +
    "  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n" +
    "    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
    "    <span class=\"sr-only\">Previous</span>\n" +
    "  </a>\n" +
    "  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n" +
    "    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
    "    <span class=\"sr-only\">Next</span>\n" +
    "  </a>\n" +
    "</div> \n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"pricing\" class=\"border-bottom\">\n" +
    "    \n" +
    "    \n" +
    "    <div class=\"container\" style=\"margin-bottom:2em;\">\n" +
    "        <h2 id=\"text-green\" class=\"section-heading text-center\">Our Pricing</h2>\n" +
    "    <div class=\"row\">\n" +
    "        \n" +
    "        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n" +
    "            <div class=\"pr-basic text-center\">\n" +
    "            \n" +
    "            \n" +
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
    "						<li><em>50</em> Personal Themes</li>\n" +
    "						<li><em>Free Domain  </em> with annual plan</li>\n" +
    "						<li><em>20 GB </em>  Disk Space</li>\n" +
    "						<li><em>Unlimited</em> Bandwidth</li>\n" +
    "						<li><em>24/7</em> Support</li>\n" +
    "					</ul>\n" +
    "				</div> <!-- .cd-pricing-body -->\n" +
    "\n" +
    "				<footer class=\"cd-pricing-footer\">\n" +
    "					<button class=\"text-c4a massive ui button\"> BUY NOW </button>\n" +
    "				</footer> <!-- .cd-pricing-footer -->\n" +
    "        </div>          \n" +
    "        </div> <!-- end .pr-basic -->\n" +
    "        \n" +
    "        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n" +
    "            <div class=\"pr-standard cd-popular text-center\">\n" +
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
    "						<li><em>100</em> Personal Themes</li>\n" +
    "						<li><em>Free Domain  </em> with annual plan</li>\n" +
    "						<li><em>50 GB </em>  Disk Space</li>\n" +
    "						<li><em>Unlimited</em> Bandwidth</li>\n" +
    "						<li><em>24/7</em> Support</li>\n" +
    "					</ul>\n" +
    "				</div> <!-- .cd-pricing-body -->\n" +
    "\n" +
    "				<footer class=\"cd-pricing-footer\">\n" +
    "					<button class=\" text-c4a massive ui button\"> BUY NOW </button>\n" +
    "				</footer> <!-- .cd-pricing-footer -->\n" +
    "			</div>\n" +
    "        </div> <!-- end .pr-standard -->\n" +
    "        \n" +
    "        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n" +
    "            \n" +
    "            <div class=\"pr-premium text-center\">\n" +
    "				<header class=\"cd-pricing-header\">\n" +
    "					<h2>PREMIUM</h2>\n" +
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
    "						<li><em>300</em> Personal Themes</li>\n" +
    "						<li><em>Free Domain  </em> with annual plan</li>\n" +
    "						<li><em>100 GB </em>  Disk Space</li>\n" +
    "						<li><em>Unlimited</em> Bandwidth</li>\n" +
    "						<li><em>24/7</em> Support</li>\n" +
    "					</ul>\n" +
    "				</div> <!-- .cd-pricing-body -->\n" +
    "                <footer class=\"cd-pricing-footer\">\n" +
    "					<button class=\"text-c4a massive ui button\"> BUY NOW </button>\n" +
    "                    <div><img src=\"assets/images/afri-hem.png\" class=\"img-responsive\" style=\"position: relative; padding: 30px;\"></div>\n" +
    "				</footer>  <!-- .cd-pricing-footer -->\n" +
    "			</div>\n" +
    "            \n" +
    "        </div> <!-- end .pr-premium -->\n" +
    "        \n" +
    "        </div>\n" +
    "    </div>\n" +
    "        \n" +
    "        \n" +
    "    </section>\n" +
    "\n" +
    "<section id=\"featuredwork\" class=\"border-bottom container-fluid\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-6 col-md-5 col-xs-12\">\n" +
    "                    <img src=\"assets/images/Layer-61.png\" class=\"img-responsive\">\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-5 col-md-6 col-xs-12\" style=\"padding:12px;\">\n" +
    "                    \n" +
    "                    <h2 id=\"\" class=\"section-heading \">Featured Work</h2>\n" +
    "                    <h3 id=\"\" class=\"text-c4a section-heading \">Client Name</h3>\n" +
    "                    <h4 id=\"\" class=\"text-c4a section-heading \">Project Title</h4>\n" +
    "                    <h4 id=\"\" class=\"text-c4a section-heading \">Categoty</h4>\n" +
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
    "<section id=\"contact-us\" class=\"contact-us\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            \n" +
    "            <h2 id=\"text-green\" class=\"section-heading text-center\" style=\"margin:1em;\">Contact Us</h2>\n" +
    "            \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-1 col-md-1\">\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-12 border-right contact-img\" style=\"margin-bottom:2em;\">\n" +
    "                  <img src=\"assets/images/Layer-64-copy.png\" class=\"img-responsive\" style=\"\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 col-md-3 col-xs-12 contact-details \" >\n" +
    "                    <p style=\"\">\n" +
    "                    US: +1 20 2345 678 <br>\n" +
    "                    \n" +
    "                    KE: +1 20 2345 678<br>\n" +
    "                   sales@coders4africa.com<br>\n" +
    "                   info@coders4africa.com<br>\n" +
    "\n" +
    "                   US: +1 20 2345 678<br>\n" +
    "                   KE: +1 20 2345 678<br>\n" +
    "                   sales@coders4africa.com<br>\n" +
    "                   info@coders4africa.com<br>\n" +
    "\n" +
    "                   Locate us on the map</p>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 col-md-3 col-xs-12\">\n" +
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
    "                <div class=\"col-lg-1 col-md-1\">\n" +
    "                </div>\n" +
    "                \n" +
    "               \n" +
    "            </div>\n" +
    "            \n" +
    "           \n" +
    "        </div>\n" +
    "    </section>");
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
