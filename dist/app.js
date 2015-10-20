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


;angular.module('templates-dist', ['../app/partials/banner1.html', '../app/partials/banner2.html', '../app/partials/getstarted-1.html', '../app/partials/getstarted-2.html', '../app/partials/getstarted-3.html', '../app/partials/global/header.html', '../app/partials/global/home.html', '../app/partials/home/about.html', '../app/partials/home/header.html']);

angular.module("../app/partials/banner1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/banner1.html",
    "<div class=\"container-fluid banner\">\n" +
    "\n" +
    "    <div class=\"banner-img\" >\n" +
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
    "                            <img src=\"images/button.png\" class=\"img-responsive \" ui-sref=\"getstarted-1\">\n" +
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
    "    </div> ");
}]);

angular.module("../app/partials/banner2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/banner2.html",
    "<div class=\"banner2\">\n" +
    "\n" +
    "    <div class=\"banner-img2 \">\n" +
    "        </div>\n" +
    "            \n" +
    "            <div id=\"carousel-example2\" class=\"carousel slide\" data-ride=\"carousel\" style=\"\">\n" +
    "    <!-- Wrapper for slides -->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"carousel-inner\">\n" +
    "                <div class=\"item active\">\n" +
    "                    <div class=\"carousel-content\">\n" +
    "                        <div>\n" +
    "                            <div class=\"h1-slide-text\">Lets get your business visible</div>\n" +
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
    "    </div> ");
}]);

angular.module("../app/partials/getstarted-1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/getstarted-1.html",
    "<div class=\"container\">\n" +
    "   \n" +
    "   <div class=\"row\">\n" +
    "      \n" +
    "      <div class=\"progress1\">\n" +
    "         \n" +
    "          <img src=\"assets/images/progress-1.png\" class=\"img-responsive col-md-7 col-xs-12 \">\n" +
    "      </div>\n" +
    "       \n" +
    "   </div>\n" +
    "   \n" +
    "   <div class=\"row steps-padding\">\n" +
    "      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "         <div class=\"ui form \">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Business Name\">\n" +
    "                        </div>\n" +
    "                    </div> \n" +
    "          \n" +
    "      </div>\n" +
    "       <div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "          <div class=\"ui fluid search selection dropdown\">\n" +
    "  <input type=\"hidden\" name=\"country\">\n" +
    "  <i class=\"dropdown icon\"></i>\n" +
    "  <div class=\"default text\">Select Country</div>\n" +
    "  <div class=\"menu\">\n" +
    "  <div class=\"item\" data-value=\"af\"><i class=\"af flag\"></i>Afghanistan</div>\n" +
    "  <div class=\"item\" data-value=\"ax\"><i class=\"ax flag\"></i>Aland Islands</div>\n" +
    "  <div class=\"item\" data-value=\"al\"><i class=\"al flag\"></i>Albania</div>\n" +
    "  <div class=\"item\" data-value=\"dz\"><i class=\"dz flag\"></i>Algeria</div>\n" +
    "  <div class=\"item\" data-value=\"as\"><i class=\"as flag\"></i>American Samoa</div>\n" +
    "  <div class=\"item\" data-value=\"ad\"><i class=\"ad flag\"></i>Andorra</div>\n" +
    "  <div class=\"item\" data-value=\"ao\"><i class=\"ao flag\"></i>Angola</div>\n" +
    "  <div class=\"item\" data-value=\"ai\"><i class=\"ai flag\"></i>Anguilla</div>\n" +
    "  <div class=\"item\" data-value=\"ag\"><i class=\"ag flag\"></i>Antigua</div>\n" +
    "  <div class=\"item\" data-value=\"ar\"><i class=\"ar flag\"></i>Argentina</div>\n" +
    "  <div class=\"item\" data-value=\"am\"><i class=\"am flag\"></i>Armenia</div>\n" +
    "  <div class=\"item\" data-value=\"aw\"><i class=\"aw flag\"></i>Aruba</div>\n" +
    "  <div class=\"item\" data-value=\"au\"><i class=\"au flag\"></i>Australia</div>\n" +
    "  <div class=\"item\" data-value=\"at\"><i class=\"at flag\"></i>Austria</div>\n" +
    "  <div class=\"item\" data-value=\"az\"><i class=\"az flag\"></i>Azerbaijan</div>\n" +
    "  <div class=\"item\" data-value=\"bs\"><i class=\"bs flag\"></i>Bahamas</div>\n" +
    "  <div class=\"item\" data-value=\"bh\"><i class=\"bh flag\"></i>Bahrain</div>\n" +
    "  <div class=\"item\" data-value=\"bd\"><i class=\"bd flag\"></i>Bangladesh</div>\n" +
    "  <div class=\"item\" data-value=\"bb\"><i class=\"bb flag\"></i>Barbados</div>\n" +
    "  <div class=\"item\" data-value=\"by\"><i class=\"by flag\"></i>Belarus</div>\n" +
    "  <div class=\"item\" data-value=\"be\"><i class=\"be flag\"></i>Belgium</div>\n" +
    "  <div class=\"item\" data-value=\"bz\"><i class=\"bz flag\"></i>Belize</div>\n" +
    "  <div class=\"item\" data-value=\"bj\"><i class=\"bj flag\"></i>Benin</div>\n" +
    "  <div class=\"item\" data-value=\"bm\"><i class=\"bm flag\"></i>Bermuda</div>\n" +
    "  <div class=\"item\" data-value=\"bt\"><i class=\"bt flag\"></i>Bhutan</div>\n" +
    "  <div class=\"item\" data-value=\"bo\"><i class=\"bo flag\"></i>Bolivia</div>\n" +
    "  <div class=\"item\" data-value=\"ba\"><i class=\"ba flag\"></i>Bosnia</div>\n" +
    "  <div class=\"item\" data-value=\"bw\"><i class=\"bw flag\"></i>Botswana</div>\n" +
    "  <div class=\"item\" data-value=\"bv\"><i class=\"bv flag\"></i>Bouvet Island</div>\n" +
    "  <div class=\"item\" data-value=\"br\"><i class=\"br flag\"></i>Brazil</div>\n" +
    "  <div class=\"item\" data-value=\"vg\"><i class=\"vg flag\"></i>British Virgin Islands</div>\n" +
    "  <div class=\"item\" data-value=\"bn\"><i class=\"bn flag\"></i>Brunei</div>\n" +
    "  <div class=\"item\" data-value=\"bg\"><i class=\"bg flag\"></i>Bulgaria</div>\n" +
    "  <div class=\"item\" data-value=\"bf\"><i class=\"bf flag\"></i>Burkina Faso</div>\n" +
    "  <div class=\"item\" data-value=\"ar\"><i class=\"ar flag\"></i>Burma</div>\n" +
    "  <div class=\"item\" data-value=\"bi\"><i class=\"bi flag\"></i>Burundi</div>\n" +
    "  <div class=\"item\" data-value=\"tc\"><i class=\"tc flag\"></i>Caicos Islands</div>\n" +
    "  <div class=\"item\" data-value=\"kh\"><i class=\"kh flag\"></i>Cambodia</div>\n" +
    "  <div class=\"item\" data-value=\"cm\"><i class=\"cm flag\"></i>Cameroon</div>\n" +
    "  <div class=\"item\" data-value=\"ca\"><i class=\"ca flag\"></i>Canada</div>\n" +
    "  <div class=\"item\" data-value=\"cv\"><i class=\"cv flag\"></i>Cape Verde</div>\n" +
    "  <div class=\"item\" data-value=\"ky\"><i class=\"ky flag\"></i>Cayman Islands</div>\n" +
    "  <div class=\"item\" data-value=\"cf\"><i class=\"cf flag\"></i>Central African Republic</div>\n" +
    "  <div class=\"item\" data-value=\"td\"><i class=\"td flag\"></i>Chad</div>\n" +
    "  <div class=\"item\" data-value=\"cl\"><i class=\"cl flag\"></i>Chile</div>\n" +
    "  <div class=\"item\" data-value=\"cn\"><i class=\"cn flag\"></i>China</div>\n" +
    "  <div class=\"item\" data-value=\"cx\"><i class=\"cx flag\"></i>Christmas Island</div>\n" +
    "  <div class=\"item\" data-value=\"cc\"><i class=\"cc flag\"></i>Cocos Islands</div>\n" +
    "  <div class=\"item\" data-value=\"co\"><i class=\"co flag\"></i>Colombia</div>\n" +
    "  <div class=\"item\" data-value=\"km\"><i class=\"km flag\"></i>Comoros</div>\n" +
    "  <div class=\"item\" data-value=\"cg\"><i class=\"cg flag\"></i>Congo Brazzaville</div>\n" +
    "  <div class=\"item\" data-value=\"cd\"><i class=\"cd flag\"></i>Congo</div>\n" +
    "  <div class=\"item\" data-value=\"ck\"><i class=\"ck flag\"></i>Cook Islands</div>\n" +
    "  <div class=\"item\" data-value=\"cr\"><i class=\"cr flag\"></i>Costa Rica</div>\n" +
    "  <div class=\"item\" data-value=\"ci\"><i class=\"ci flag\"></i>Cote Divoire</div>\n" +
    "  <div class=\"item\" data-value=\"hr\"><i class=\"hr flag\"></i>Croatia</div>\n" +
    "  <div class=\"item\" data-value=\"cu\"><i class=\"cu flag\"></i>Cuba</div>\n" +
    "  <div class=\"item\" data-value=\"cy\"><i class=\"cy flag\"></i>Cyprus</div>\n" +
    "  <div class=\"item\" data-value=\"cz\"><i class=\"cz flag\"></i>Czech Republic</div>\n" +
    "  <div class=\"item\" data-value=\"dk\"><i class=\"dk flag\"></i>Denmark</div>\n" +
    "  <div class=\"item\" data-value=\"dj\"><i class=\"dj flag\"></i>Djibouti</div>\n" +
    "  <div class=\"item\" data-value=\"dm\"><i class=\"dm flag\"></i>Dominica</div>\n" +
    "  <div class=\"item\" data-value=\"do\"><i class=\"do flag\"></i>Dominican Republic</div>\n" +
    "  <div class=\"item\" data-value=\"ec\"><i class=\"ec flag\"></i>Ecuador</div>\n" +
    "  <div class=\"item\" data-value=\"eg\"><i class=\"eg flag\"></i>Egypt</div>\n" +
    "  <div class=\"item\" data-value=\"sv\"><i class=\"sv flag\"></i>El Salvador</div>\n" +
    "  <div class=\"item\" data-value=\"gb\"><i class=\"gb flag\"></i>England</div>\n" +
    "  <div class=\"item\" data-value=\"gq\"><i class=\"gq flag\"></i>Equatorial Guinea</div>\n" +
    "  <div class=\"item\" data-value=\"er\"><i class=\"er flag\"></i>Eritrea</div>\n" +
    "  <div class=\"item\" data-value=\"ee\"><i class=\"ee flag\"></i>Estonia</div>\n" +
    "  <div class=\"item\" data-value=\"et\"><i class=\"et flag\"></i>Ethiopia</div>\n" +
    "  <div class=\"item\" data-value=\"eu\"><i class=\"eu flag\"></i>European Union</div>\n" +
    "  <div class=\"item\" data-value=\"fk\"><i class=\"fk flag\"></i>Falkland Islands</div>\n" +
    "  <div class=\"item\" data-value=\"fo\"><i class=\"fo flag\"></i>Faroe Islands</div>\n" +
    "  <div class=\"item\" data-value=\"fj\"><i class=\"fj flag\"></i>Fiji</div>\n" +
    "  <div class=\"item\" data-value=\"fi\"><i class=\"fi flag\"></i>Finland</div>\n" +
    "  <div class=\"item\" data-value=\"fr\"><i class=\"fr flag\"></i>France</div>\n" +
    "  <div class=\"item\" data-value=\"gf\"><i class=\"gf flag\"></i>French Guiana</div>\n" +
    "  <div class=\"item\" data-value=\"pf\"><i class=\"pf flag\"></i>French Polynesia</div>\n" +
    "  <div class=\"item\" data-value=\"tf\"><i class=\"tf flag\"></i>French Territories</div>\n" +
    "  <div class=\"item\" data-value=\"ga\"><i class=\"ga flag\"></i>Gabon</div>\n" +
    "  <div class=\"item\" data-value=\"gm\"><i class=\"gm flag\"></i>Gambia</div>\n" +
    "  <div class=\"item\" data-value=\"ge\"><i class=\"ge flag\"></i>Georgia</div>\n" +
    "  <div class=\"item\" data-value=\"de\"><i class=\"de flag\"></i>Germany</div>\n" +
    "  <div class=\"item\" data-value=\"gh\"><i class=\"gh flag\"></i>Ghana</div>\n" +
    "  <div class=\"item\" data-value=\"gi\"><i class=\"gi flag\"></i>Gibraltar</div>\n" +
    "  <div class=\"item\" data-value=\"gr\"><i class=\"gr flag\"></i>Greece</div>\n" +
    "  <div class=\"item\" data-value=\"gl\"><i class=\"gl flag\"></i>Greenland</div>\n" +
    "  <div class=\"item\" data-value=\"gd\"><i class=\"gd flag\"></i>Grenada</div>\n" +
    "  <div class=\"item\" data-value=\"gp\"><i class=\"gp flag\"></i>Guadeloupe</div>\n" +
    "  <div class=\"item\" data-value=\"gu\"><i class=\"gu flag\"></i>Guam</div>\n" +
    "  <div class=\"item\" data-value=\"gt\"><i class=\"gt flag\"></i>Guatemala</div>\n" +
    "  <div class=\"item\" data-value=\"gw\"><i class=\"gw flag\"></i>Guinea-Bissau</div>\n" +
    "  <div class=\"item\" data-value=\"gn\"><i class=\"gn flag\"></i>Guinea</div>\n" +
    "  <div class=\"item\" data-value=\"gy\"><i class=\"gy flag\"></i>Guyana</div>\n" +
    "  <div class=\"item\" data-value=\"ht\"><i class=\"ht flag\"></i>Haiti</div>\n" +
    "  <div class=\"item\" data-value=\"hm\"><i class=\"hm flag\"></i>Heard Island</div>\n" +
    "  <div class=\"item\" data-value=\"hn\"><i class=\"hn flag\"></i>Honduras</div>\n" +
    "  <div class=\"item\" data-value=\"hk\"><i class=\"hk flag\"></i>Hong Kong</div>\n" +
    "  <div class=\"item\" data-value=\"hu\"><i class=\"hu flag\"></i>Hungary</div>\n" +
    "  <div class=\"item\" data-value=\"is\"><i class=\"is flag\"></i>Iceland</div>\n" +
    "  <div class=\"item\" data-value=\"in\"><i class=\"in flag\"></i>India</div>\n" +
    "  <div class=\"item\" data-value=\"io\"><i class=\"io flag\"></i>Indian Ocean Territory</div>\n" +
    "  <div class=\"item\" data-value=\"id\"><i class=\"id flag\"></i>Indonesia</div>\n" +
    "  <div class=\"item\" data-value=\"ir\"><i class=\"ir flag\"></i>Iran</div>\n" +
    "  <div class=\"item\" data-value=\"iq\"><i class=\"iq flag\"></i>Iraq</div>\n" +
    "  <div class=\"item\" data-value=\"ie\"><i class=\"ie flag\"></i>Ireland</div>\n" +
    "  <div class=\"item\" data-value=\"il\"><i class=\"il flag\"></i>Israel</div>\n" +
    "  <div class=\"item\" data-value=\"it\"><i class=\"it flag\"></i>Italy</div>\n" +
    "  <div class=\"item\" data-value=\"jm\"><i class=\"jm flag\"></i>Jamaica</div>\n" +
    "  <div class=\"item\" data-value=\"jp\"><i class=\"jp flag\"></i>Japan</div>\n" +
    "  <div class=\"item\" data-value=\"jo\"><i class=\"jo flag\"></i>Jordan</div>\n" +
    "  <div class=\"item\" data-value=\"kz\"><i class=\"kz flag\"></i>Kazakhstan</div>\n" +
    "  <div class=\"item\" data-value=\"ke\"><i class=\"ke flag\"></i>Kenya</div>\n" +
    "  <div class=\"item\" data-value=\"ki\"><i class=\"ki flag\"></i>Kiribati</div>\n" +
    "  <div class=\"item\" data-value=\"kw\"><i class=\"kw flag\"></i>Kuwait</div>\n" +
    "  <div class=\"item\" data-value=\"kg\"><i class=\"kg flag\"></i>Kyrgyzstan</div>\n" +
    "  <div class=\"item\" data-value=\"la\"><i class=\"la flag\"></i>Laos</div>\n" +
    "  <div class=\"item\" data-value=\"lv\"><i class=\"lv flag\"></i>Latvia</div>\n" +
    "  <div class=\"item\" data-value=\"lb\"><i class=\"lb flag\"></i>Lebanon</div>\n" +
    "  <div class=\"item\" data-value=\"ls\"><i class=\"ls flag\"></i>Lesotho</div>\n" +
    "  <div class=\"item\" data-value=\"lr\"><i class=\"lr flag\"></i>Liberia</div>\n" +
    "  <div class=\"item\" data-value=\"ly\"><i class=\"ly flag\"></i>Libya</div>\n" +
    "  <div class=\"item\" data-value=\"li\"><i class=\"li flag\"></i>Liechtenstein</div>\n" +
    "  <div class=\"item\" data-value=\"lt\"><i class=\"lt flag\"></i>Lithuania</div>\n" +
    "  <div class=\"item\" data-value=\"lu\"><i class=\"lu flag\"></i>Luxembourg</div>\n" +
    "  <div class=\"item\" data-value=\"mo\"><i class=\"mo flag\"></i>Macau</div>\n" +
    "  <div class=\"item\" data-value=\"mk\"><i class=\"mk flag\"></i>Macedonia</div>\n" +
    "  <div class=\"item\" data-value=\"mg\"><i class=\"mg flag\"></i>Madagascar</div>\n" +
    "  <div class=\"item\" data-value=\"mw\"><i class=\"mw flag\"></i>Malawi</div>\n" +
    "  <div class=\"item\" data-value=\"my\"><i class=\"my flag\"></i>Malaysia</div>\n" +
    "  <div class=\"item\" data-value=\"mv\"><i class=\"mv flag\"></i>Maldives</div>\n" +
    "  <div class=\"item\" data-value=\"ml\"><i class=\"ml flag\"></i>Mali</div>\n" +
    "  <div class=\"item\" data-value=\"mt\"><i class=\"mt flag\"></i>Malta</div>\n" +
    "  <div class=\"item\" data-value=\"mh\"><i class=\"mh flag\"></i>Marshall Islands</div>\n" +
    "  <div class=\"item\" data-value=\"mq\"><i class=\"mq flag\"></i>Martinique</div>\n" +
    "  <div class=\"item\" data-value=\"mr\"><i class=\"mr flag\"></i>Mauritania</div>\n" +
    "  <div class=\"item\" data-value=\"mu\"><i class=\"mu flag\"></i>Mauritius</div>\n" +
    "  <div class=\"item\" data-value=\"yt\"><i class=\"yt flag\"></i>Mayotte</div>\n" +
    "  <div class=\"item\" data-value=\"mx\"><i class=\"mx flag\"></i>Mexico</div>\n" +
    "  <div class=\"item\" data-value=\"fm\"><i class=\"fm flag\"></i>Micronesia</div>\n" +
    "  <div class=\"item\" data-value=\"md\"><i class=\"md flag\"></i>Moldova</div>\n" +
    "  <div class=\"item\" data-value=\"mc\"><i class=\"mc flag\"></i>Monaco</div>\n" +
    "  <div class=\"item\" data-value=\"mn\"><i class=\"mn flag\"></i>Mongolia</div>\n" +
    "  <div class=\"item\" data-value=\"me\"><i class=\"me flag\"></i>Montenegro</div>\n" +
    "  <div class=\"item\" data-value=\"ms\"><i class=\"ms flag\"></i>Montserrat</div>\n" +
    "  <div class=\"item\" data-value=\"ma\"><i class=\"ma flag\"></i>Morocco</div>\n" +
    "  <div class=\"item\" data-value=\"mz\"><i class=\"mz flag\"></i>Mozambique</div>\n" +
    "  <div class=\"item\" data-value=\"na\"><i class=\"na flag\"></i>Namibia</div>\n" +
    "  <div class=\"item\" data-value=\"nr\"><i class=\"nr flag\"></i>Nauru</div>\n" +
    "  <div class=\"item\" data-value=\"np\"><i class=\"np flag\"></i>Nepal</div>\n" +
    "  <div class=\"item\" data-value=\"an\"><i class=\"an flag\"></i>Netherlands Antilles</div>\n" +
    "  <div class=\"item\" data-value=\"nl\"><i class=\"nl flag\"></i>Netherlands</div>\n" +
    "  <div class=\"item\" data-value=\"nc\"><i class=\"nc flag\"></i>New Caledonia</div>\n" +
    "  <div class=\"item\" data-value=\"pg\"><i class=\"pg flag\"></i>New Guinea</div>\n" +
    "  <div class=\"item\" data-value=\"nz\"><i class=\"nz flag\"></i>New Zealand</div>\n" +
    "  <div class=\"item\" data-value=\"ni\"><i class=\"ni flag\"></i>Nicaragua</div>\n" +
    "  <div class=\"item\" data-value=\"ne\"><i class=\"ne flag\"></i>Niger</div>\n" +
    "  <div class=\"item\" data-value=\"ng\"><i class=\"ng flag\"></i>Nigeria</div>\n" +
    "  <div class=\"item\" data-value=\"nu\"><i class=\"nu flag\"></i>Niue</div>\n" +
    "  <div class=\"item\" data-value=\"nf\"><i class=\"nf flag\"></i>Norfolk Island</div>\n" +
    "  <div class=\"item\" data-value=\"kp\"><i class=\"kp flag\"></i>North Korea</div>\n" +
    "  <div class=\"item\" data-value=\"mp\"><i class=\"mp flag\"></i>Northern Mariana Islands</div>\n" +
    "  <div class=\"item\" data-value=\"no\"><i class=\"no flag\"></i>Norway</div>\n" +
    "  <div class=\"item\" data-value=\"om\"><i class=\"om flag\"></i>Oman</div>\n" +
    "  <div class=\"item\" data-value=\"pk\"><i class=\"pk flag\"></i>Pakistan</div>\n" +
    "  <div class=\"item\" data-value=\"pw\"><i class=\"pw flag\"></i>Palau</div>\n" +
    "  <div class=\"item\" data-value=\"ps\"><i class=\"ps flag\"></i>Palestine</div>\n" +
    "  <div class=\"item\" data-value=\"pa\"><i class=\"pa flag\"></i>Panama</div>\n" +
    "  <div class=\"item\" data-value=\"py\"><i class=\"py flag\"></i>Paraguay</div>\n" +
    "  <div class=\"item\" data-value=\"pe\"><i class=\"pe flag\"></i>Peru</div>\n" +
    "  <div class=\"item\" data-value=\"ph\"><i class=\"ph flag\"></i>Philippines</div>\n" +
    "  <div class=\"item\" data-value=\"pn\"><i class=\"pn flag\"></i>Pitcairn Islands</div>\n" +
    "  <div class=\"item\" data-value=\"pl\"><i class=\"pl flag\"></i>Poland</div>\n" +
    "  <div class=\"item\" data-value=\"pt\"><i class=\"pt flag\"></i>Portugal</div>\n" +
    "  <div class=\"item\" data-value=\"pr\"><i class=\"pr flag\"></i>Puerto Rico</div>\n" +
    "  <div class=\"item\" data-value=\"qa\"><i class=\"qa flag\"></i>Qatar</div>\n" +
    "  <div class=\"item\" data-value=\"re\"><i class=\"re flag\"></i>Reunion</div>\n" +
    "  <div class=\"item\" data-value=\"ro\"><i class=\"ro flag\"></i>Romania</div>\n" +
    "  <div class=\"item\" data-value=\"ru\"><i class=\"ru flag\"></i>Russia</div>\n" +
    "  <div class=\"item\" data-value=\"rw\"><i class=\"rw flag\"></i>Rwanda</div>\n" +
    "  <div class=\"item\" data-value=\"sh\"><i class=\"sh flag\"></i>Saint Helena</div>\n" +
    "  <div class=\"item\" data-value=\"kn\"><i class=\"kn flag\"></i>Saint Kitts and Nevis</div>\n" +
    "  <div class=\"item\" data-value=\"lc\"><i class=\"lc flag\"></i>Saint Lucia</div>\n" +
    "  <div class=\"item\" data-value=\"pm\"><i class=\"pm flag\"></i>Saint Pierre</div>\n" +
    "  <div class=\"item\" data-value=\"vc\"><i class=\"vc flag\"></i>Saint Vincent</div>\n" +
    "  <div class=\"item\" data-value=\"ws\"><i class=\"ws flag\"></i>Samoa</div>\n" +
    "  <div class=\"item\" data-value=\"sm\"><i class=\"sm flag\"></i>San Marino</div>\n" +
    "  <div class=\"item\" data-value=\"gs\"><i class=\"gs flag\"></i>Sandwich Islands</div>\n" +
    "  <div class=\"item\" data-value=\"st\"><i class=\"st flag\"></i>Sao Tome</div>\n" +
    "  <div class=\"item\" data-value=\"sa\"><i class=\"sa flag\"></i>Saudi Arabia</div>\n" +
    "  <div class=\"item\" data-value=\"sn\"><i class=\"sn flag\"></i>Senegal</div>\n" +
    "  <div class=\"item\" data-value=\"cs\"><i class=\"cs flag\"></i>Serbia</div>\n" +
    "  <div class=\"item\" data-value=\"rs\"><i class=\"rs flag\"></i>Serbia</div>\n" +
    "  <div class=\"item\" data-value=\"sc\"><i class=\"sc flag\"></i>Seychelles</div>\n" +
    "  <div class=\"item\" data-value=\"sl\"><i class=\"sl flag\"></i>Sierra Leone</div>\n" +
    "  <div class=\"item\" data-value=\"sg\"><i class=\"sg flag\"></i>Singapore</div>\n" +
    "  <div class=\"item\" data-value=\"sk\"><i class=\"sk flag\"></i>Slovakia</div>\n" +
    "  <div class=\"item\" data-value=\"si\"><i class=\"si flag\"></i>Slovenia</div>\n" +
    "  <div class=\"item\" data-value=\"sb\"><i class=\"sb flag\"></i>Solomon Islands</div>\n" +
    "  <div class=\"item\" data-value=\"so\"><i class=\"so flag\"></i>Somalia</div>\n" +
    "  <div class=\"item\" data-value=\"za\"><i class=\"za flag\"></i>South Africa</div>\n" +
    "  <div class=\"item\" data-value=\"kr\"><i class=\"kr flag\"></i>South Korea</div>\n" +
    "  <div class=\"item\" data-value=\"es\"><i class=\"es flag\"></i>Spain</div>\n" +
    "  <div class=\"item\" data-value=\"lk\"><i class=\"lk flag\"></i>Sri Lanka</div>\n" +
    "  <div class=\"item\" data-value=\"sd\"><i class=\"sd flag\"></i>Sudan</div>\n" +
    "  <div class=\"item\" data-value=\"sr\"><i class=\"sr flag\"></i>Suriname</div>\n" +
    "  <div class=\"item\" data-value=\"sj\"><i class=\"sj flag\"></i>Svalbard</div>\n" +
    "  <div class=\"item\" data-value=\"sz\"><i class=\"sz flag\"></i>Swaziland</div>\n" +
    "  <div class=\"item\" data-value=\"se\"><i class=\"se flag\"></i>Sweden</div>\n" +
    "  <div class=\"item\" data-value=\"ch\"><i class=\"ch flag\"></i>Switzerland</div>\n" +
    "  <div class=\"item\" data-value=\"sy\"><i class=\"sy flag\"></i>Syria</div>\n" +
    "  <div class=\"item\" data-value=\"tw\"><i class=\"tw flag\"></i>Taiwan</div>\n" +
    "  <div class=\"item\" data-value=\"tj\"><i class=\"tj flag\"></i>Tajikistan</div>\n" +
    "  <div class=\"item\" data-value=\"tz\"><i class=\"tz flag\"></i>Tanzania</div>\n" +
    "  <div class=\"item\" data-value=\"th\"><i class=\"th flag\"></i>Thailand</div>\n" +
    "  <div class=\"item\" data-value=\"tl\"><i class=\"tl flag\"></i>Timorleste</div>\n" +
    "  <div class=\"item\" data-value=\"tg\"><i class=\"tg flag\"></i>Togo</div>\n" +
    "  <div class=\"item\" data-value=\"tk\"><i class=\"tk flag\"></i>Tokelau</div>\n" +
    "  <div class=\"item\" data-value=\"to\"><i class=\"to flag\"></i>Tonga</div>\n" +
    "  <div class=\"item\" data-value=\"tt\"><i class=\"tt flag\"></i>Trinidad</div>\n" +
    "  <div class=\"item\" data-value=\"tn\"><i class=\"tn flag\"></i>Tunisia</div>\n" +
    "  <div class=\"item\" data-value=\"tr\"><i class=\"tr flag\"></i>Turkey</div>\n" +
    "  <div class=\"item\" data-value=\"tm\"><i class=\"tm flag\"></i>Turkmenistan</div>\n" +
    "  <div class=\"item\" data-value=\"tv\"><i class=\"tv flag\"></i>Tuvalu</div>\n" +
    "  <div class=\"item\" data-value=\"ug\"><i class=\"ug flag\"></i>Uganda</div>\n" +
    "  <div class=\"item\" data-value=\"ua\"><i class=\"ua flag\"></i>Ukraine</div>\n" +
    "  <div class=\"item\" data-value=\"ae\"><i class=\"ae flag\"></i>United Arab Emirates</div>\n" +
    "  <div class=\"item\" data-value=\"us\"><i class=\"us flag\"></i>United States</div>\n" +
    "  <div class=\"item\" data-value=\"uy\"><i class=\"uy flag\"></i>Uruguay</div>\n" +
    "  <div class=\"item\" data-value=\"um\"><i class=\"um flag\"></i>Us Minor Islands</div>\n" +
    "  <div class=\"item\" data-value=\"vi\"><i class=\"vi flag\"></i>Us Virgin Islands</div>\n" +
    "  <div class=\"item\" data-value=\"uz\"><i class=\"uz flag\"></i>Uzbekistan</div>\n" +
    "  <div class=\"item\" data-value=\"vu\"><i class=\"vu flag\"></i>Vanuatu</div>\n" +
    "  <div class=\"item\" data-value=\"va\"><i class=\"va flag\"></i>Vatican City</div>\n" +
    "  <div class=\"item\" data-value=\"ve\"><i class=\"ve flag\"></i>Venezuela</div>\n" +
    "  <div class=\"item\" data-value=\"vn\"><i class=\"vn flag\"></i>Vietnam</div>\n" +
    "  <div class=\"item\" data-value=\"wf\"><i class=\"wf flag\"></i>Wallis and Futuna</div>\n" +
    "  <div class=\"item\" data-value=\"eh\"><i class=\"eh flag\"></i>Western Sahara</div>\n" +
    "  <div class=\"item\" data-value=\"ye\"><i class=\"ye flag\"></i>Yemen</div>\n" +
    "  <div class=\"item\" data-value=\"zm\"><i class=\"zm flag\"></i>Zambia</div>\n" +
    "  <div class=\"item\" data-value=\"zw\"><i class=\"zw flag\"></i>Zimbabwe</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "           \n" +
    "       </div>\n" +
    "       \n" +
    "   </div>\n" +
    "   <div class=\"row steps-padding\">\n" +
    "      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "              \n" +
    "     <div class=\"ui fluid search selection dropdown\">\n" +
    "  <input type=\"hidden\" name=\"Category\">\n" +
    "  <i class=\"dropdown icon\"></i>\n" +
    "  <div class=\"default text\">Category of Business</div>\n" +
    "  <div class=\"menu\">\n" +
    "    <div class=\"item\" data-value=\"1\">Medical</div>\n" +
    "    <div class=\"item\" data-value=\"0\">Business & Corporate</div>\n" +
    "    <div class=\"item\" data-value=\"2\">Events</div>\n" +
    "    <div class=\"item\" data-value=\"3\">Ecommerce</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "      </div>\n" +
    "       <div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "           <div class=\"ui form \">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Owner or Representative Name\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "           \n" +
    "       </div>\n" +
    "       \n" +
    "   </div>\n" +
    "   <div class=\"row steps-padding\">\n" +
    "      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "          \n" +
    "          <div class=\"ui form \">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Email\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "      </div>\n" +
    "       <div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "           <div class=\"ui form \">\n" +
    "                        <div class=\"field\">\n" +
    "                            <input type=\"text\" placeholder=\"Phone\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "           \n" +
    "       </div>\n" +
    "       \n" +
    "   </div>\n" +
    "   \n" +
    "   <div class=\"row steps-padding\">\n" +
    "     \n" +
    "      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "       \n" +
    "       <div class=\"actions\">\n" +
    "           <button class=\"ui black massive button\" >Previous</button>\n" +
    "         <button class=\"ui orange massive button\" ui-sref=\"getstarted-2\">Next</button>\n" +
    "           \n" +
    "       </div>\n" +
    "        \n" +
    "          \n" +
    "          \n" +
    "      </div>\n" +
    "      \n" +
    "   </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("../app/partials/getstarted-2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/getstarted-2.html",
    "<div class=\"container\">\n" +
    "   \n" +
    "   <div class=\"row\">\n" +
    "      \n" +
    "      <section class=\"progress2\">\n" +
    "         <img src=\"assets/images/progress-2.png\" class=\"img-responsive col-md-7 col-xs-12 \">\n" +
    "          \n" +
    "      </section>\n" +
    "       \n" +
    "   </div>\n" +
    "   \n" +
    "   \n" +
    "   <div class=\"row steps-padding\">\n" +
    "      <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "  <!-- Indicators -->\n" +
    "  <ol class=\"carousel-indicators\">\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "  </ol>\n" +
    "\n" +
    "  <!-- Wrapper for slides -->\n" +
    "  <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "    <div class=\"item active\">\n" +
    "      <img src=\"\" alt=\"\">\n" +
    "      <div class=\"carousel-caption\">\n" +
    "        \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"item\">\n" +
    "      <img src=\"\" alt=\"\">\n" +
    "      <div class=\"carousel-caption\">\n" +
    "        \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
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
    "</div>\n" +
    "   </div>\n" +
    "   \n" +
    "   \n" +
    "   <div class=\"row steps-padding\">\n" +
    "     \n" +
    "      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "       \n" +
    "       <div class=\"actions\">\n" +
    "           <button class=\"ui black massive button\" ui-sref=\"getstarted-1\" >Previous</button>\n" +
    "         <button class=\"ui orange massive button\" ui-sref=\"getstarted-3\">Next</button>\n" +
    "           \n" +
    "       </div>\n" +
    "        \n" +
    "          \n" +
    "          \n" +
    "      </div>\n" +
    "      \n" +
    "   </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("../app/partials/getstarted-3.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/getstarted-3.html",
    "<div class=\"container\">\n" +
    "   \n" +
    "   <div class=\"row\">\n" +
    "      \n" +
    "      <section class=\"progress3\">\n" +
    "         <img src=\"assets/images/progress-3.png\" class=\"img-responsive col-md-7 col-xs-12\">\n" +
    "          \n" +
    "      </section>\n" +
    "       \n" +
    "   </div>\n" +
    "   \n" +
    "   \n" +
    "   \n" +
    "   <div class=\"row steps-padding\">\n" +
    "    \n" +
    "    <div class=\"col-md-4 col-sm-6 col-xs-12\" >\n" +
    "       \n" +
    "       <div class=\"selected-template \">\n" +
    "           \n" +
    "           \n" +
    "       </div>\n" +
    "        \n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 col-sm-6 col-xs-12\" >\n" +
    "       \n" +
    "        <div class=\"selected-summary\">\n" +
    "            \n" +
    "                    <h3 id=\"\" class=\"text-c4a section-heading \">Business Name Here</h3>\n" +
    "                    <h4 id=\"\" class=\"text-c4a section-heading \">Category: Technology</h4>\n" +
    "                    <h4 id=\"\" class=\"text-c4a section-heading \">Pricing Package:Basic</h4>\n" +
    "                    \n" +
    "                    <div>\n" +
    "                    <p>\n" +
    "                        Confirmation receipt.This is dummy text, please don’t read any further. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.</p></div>\n" +
    "        </div>\n" +
    "        <div class=\"actions\">\n" +
    "           <button class=\"ui black massive button\" ui-sref=\"getstarted-1\" >Previous</button>\n" +
    "         <button class=\"ui orange massive button\" ui-sref=\"getstarted-3\">Next</button>\n" +
    "           \n" +
    "       </div>\n" +
    "        \n" +
    "    </div>\n" +
    "     \n" +
    "       \n" +
    "   </div>\n" +
    "   \n" +
    "   \n" +
    "    \n" +
    "</div>");
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
    "                    <div style=\"\" class=\"col-md-10 section-notes\">Responsive Modern Website</div>\n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services place-right\">\n" +
    "                   <img src=\"assets/images/Vector-Smart-Object-copy-6.png\" class=\"img-responsive center-img\">\n" +
    "                    <span class=\"section-notes\"> Social Media Marketing</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-bottom services\">\n" +
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
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-right border-bottom services place-right\">\n" +
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
    "                    <div style=\"\" class=\"col-md-10 section-notes\">Domain Hosting & Email</div>\n" +
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
    "                    <div style=\"\" class=\"col-md-10 section-notes\">Brand Identity Design</div>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center border-bottom services place-right\">\n" +
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
    "                    <div style=\"\" class=\"col-md-10 section-notes\">Virtual Tech Assistant</div>\n" +
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
    "    <div class=\"item active\">\n" +
    "        \n" +
    "        <div class=\"col-md-4 col-sm-4 col-xs-12\"><img src=\"assets/images/basic-infor.png\" alt=\"...\" class=\"img-responsive \"></div>\n" +
    "        <div class=\"col-md-8 col-sm-8 col-xs-12\">\n" +
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
    "   <div class=\"item\">\n" +
    "      <div class=\"col-md-4 col-sm-4 col-xs-12\"><img src=\"assets/images/basic-infor.png\" alt=\"...\" class=\"img-responsive \"></div>\n" +
    "        <div class=\"col-md-8 col-sm-8 col-xs-12\">\n" +
    "        <div class=\"\">\n" +
    "        <div class=\"\">\n" +
    "                    <h2 id=\"\" class=\"section-heading\" style=\"margin-top:5%;\">Fill Basic Information</h2>\n" +
    "                    \n" +
    "                    <p style=\"margin-top:5%;\">Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum.</p>\n" +
    "                </div>\n" +
    "      </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "      \n" +
    "      <div class=\"item\">\n" +
    "      <div class=\"col-md-4 col-sm-4 col-xs-12\"><img src=\"assets/images/basic-infor.png\" alt=\"...\" class=\"img-responsive \"></div>\n" +
    "        <div class=\"col-md-8 col-sm-8 col-xs-12\">\n" +
    "        <div class=\"\">\n" +
    "        <div class=\"\">\n" +
    "                    <h2 id=\"\" class=\"section-heading\" style=\"margin-top:5%;\">Fill Basic Information</h2>\n" +
    "                    \n" +
    "                    <p style=\"margin-top:5%;\">Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum.</p>\n" +
    "                </div>\n" +
    "      </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
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
    "						<span class=\"cd-duration\">month</span>\n" +
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
    "                <div style=\"margin-bottom:2%;\"><img src=\"assets/images/afri-hem.png\" class=\"img-responsive\" style=\"width:100%\"></div>\n" +
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
    "						<span class=\"cd-duration\">month</span>\n" +
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
    "                <div style=\"margin-bottom:2%;\"><img src=\"assets/images/afri-hem.png\" class=\"img-responsive\" style=\"width:100%\"></div>\n" +
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
    "						<span class=\"cd-duration\">month</span>\n" +
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
    "                    \n" +
    "				</footer>  <!-- .cd-pricing-footer -->\n" +
    "                <div style=\"margin-bottom:1%;\"><img src=\"assets/images/afri-hem.png\" class=\"img-responsive\" style=\"width:100%\"></div>\n" +
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
    "                  <img src=\"assets/images/Layer-64-copy.jpg\" class=\"img-responsive\" style=\"\">\n" +
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
