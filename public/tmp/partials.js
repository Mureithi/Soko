angular.module('templates-dist', ['../public/app/partials/global/header.html', '../public/app/partials/global/home.html', '../public/app/partials/home/about.html', '../public/app/partials/home/header.html', '../public/app/partials/new.html', '../public/app/partials/page1.html']);

angular.module("../public/app/partials/global/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/global/header.html",
    "");
}]);

angular.module("../public/app/partials/global/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/global/home.html",
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
    "    \n" +
    "    <section id=\"fillinfor\" style=\"background-color: #f3f3f3 !important;\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-1 col-md-1\">\n" +
    "                <div class=\"bg-icon-small center-img\">\n" +
    "                    <img src=\"assets/images/arrow-left.png\" class=\"img-responsive \" style=\"position: relative; padding: 22px 25px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4\">\n" +
    "                    \n" +
    "                    <div class=\"bg-icon-infor\">\n" +
    "                    <img src=\"assets/images/basic-infor.png\" class=\"img-responsive \" style=\"position: relative; padding: 27px;\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                 <div class=\"col-lg-5 col-md-5 \">\n" +
    "                    <h2 id=\"\" class=\"section-heading\" style=\"margin-top:15%;\">Fill Basic Information</h2>\n" +
    "                    \n" +
    "                    <p>Lorem ipsum dolor sit amet, eu cum eius animal mandamus. Quas saepe mediocritatem mei eu, et fabellas adversarium qui, ius ex ullum aeque incorrupte. Sint decore efficiantur id vix. Ius an modo tempor interpretaris, ludus bonorum scriptorem id cum, omnium voluptatibus cu cum. Eius deterruisset ut per, eos no congue ceteros posidonium. Te eam elit contentiones, mea id ancillae volutpat dissentiunt.</p>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"col-lg-1 col-md-1\">\n" +
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
    "                <div class=\"col-lg-6 col-md-6 text-center\">\n" +
    "                    <img src=\"assets/images/Layer-61.png\" class=\"img-responsive\">\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-lg-5 col-md-5\">\n" +
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
    "                <div class=\"col-lg-1 col-md-1\">\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"col-lg-4 col-md-4 col-xs-12 border-right\">\n" +
    "                  <img src=\"assets/images/Layer-64-copy.png\" class=\"img-responsive\" style=\"\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 col-md-3 col-xs-12 \">\n" +
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

angular.module("../public/app/partials/home/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/about.html",
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

angular.module("../public/app/partials/home/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/header.html",
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

angular.module("../public/app/partials/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/new.html",
    "<div class=\"container\">\n" +
    "\n" +
    "      <!-- Main component for a primary marketing message or call to action -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Page 2 Data From API</h1>\n" +
    "        <h2>{{pools.title}}</h2>\n" +
    "        <p>{{pools.Description}}</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-lg btn-primary\" href=\"#/view\" role=\"button\">View prev page »</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>");
}]);

angular.module("../public/app/partials/page1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/page1.html",
    "<div class=\"container\">\n" +
    "\n" +
    "      <!-- Main component for a primary marketing message or call to action -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Data From API</h1>\n" +
    "        <h2>{{pools.title}}</h2>\n" +
    "        <p>{{pools.Description}}</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-lg btn-primary\" href=\"#/new\" role=\"button\">View next page »</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>");
}]);
