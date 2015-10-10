<!DOCTYPE html>
<html ng-app="soko" lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>{{title}}</title>

    <link rel="stylesheet" href="bower_components/webfont-opensans/css/stylesheet.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="assets/stylesheets/styles.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="bower_components/semantic-ui/dist/semantic.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css" media="screen" title="no title" charset="utf-">
    <link rel="stylesheet" href="bower_components/textAngular/src/textAngular.css" media="screen" title="no title" charset="utf-8">
    <!-- <link rel="stylesheet" href="assets/css/animate.min.css" media="screen" title="no title" charset="utf-8">-->


</head>

<body id="page-top">

<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="pull-left" id="logo">
                <a  ng-click=""  href="">
                    <img src="assets/images/C4A-logo.png">
                </a>

            </div>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a class="page-scroll active" ui-sref="home">HOME</a>
                </li>
                <li>
                    <a class="page-scroll" href="#">SERVICES</a>
                </li>
                <li>
                    <a class="page-scroll" href="#">HOWITWORKS</a>
                </li>
                <li>
                    <a class="page-scroll" ui-sref="dashboard">PRICING</a>
                </li>
                <li>
                    <a class="page-scroll" href="#"> ABOUT US</a>
                </li>

                <li>
                    <a class="page-scroll" href="#"> CONTACT</a>
                </li>

            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->

</nav>
<div class="banner">

    <div class="banner-img">
    </div>

    <div id="carousel-example" class="carousel slide" data-ride="carousel" style="padding-top: 200px;">
        <!-- Wrapper for slides -->
        <div class="row">
            <div class="col-xs-offset-3 col-xs-6">
                <div class="carousel-inner">
                    <div class="item active">
                        <div class="carousel-content">
                            <div>
                                <div class="h1-slide-text">Your Customers are Online</div>
                                <div class="h2-slide-text">Can They Find You?</div>
                                <div class="slide-text">Let CODERS4AFRICA build your website and social media in 48 hours for less than $10 a month.</div>
                                <div class="get-started">
                                    <img src="images/button.png">
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <!-- Controls  <a class="left carousel-control" href="#carousel-example" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
     <a class="right carousel-control" href="#carousel-example" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>-->

    </div>




</div>


<div class="content" ui-view>


</div>


<div class="container-fluid">
    <div class="row">
        <div class="item">
            &#0169; 2015 <c4a>C4A</c4a> . All Rights Reserved
        </div>
    </div>
    <div class="row">
        <div class="ui horizontal bulleted link list social">

            <div class="ui circular linkedin icon button margin-social">
                <i class="linkedin icon"></i>
            </div>

            <div class="ui circular facebook icon button margin-social">
                <i class="facebook icon"></i>
            </div>

            <div class="ui circular twitter icon button margin-social">
                <i class="twitter icon"></i>
            </div>

            <!--

             <div class="ui circular google plus icon button">
                   <i class="google plus icon"></i>
             </div>-->

        </div>

    </div>


</div>
<footer class="footer hem">
</footer>

<!-- jQuery -->
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
<script src="bower_components/angular-ui-router.stateHelper/statehelper.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/lodash/dist/lodash.js"></script>
<script src="bower_components/restangular/dist/restangular.js"></script>
<script src="bower_components/angular-scroll/angular-scroll.js"></script>
<script src="bower_components/skrollr/src/skrollr.js"></script>
<script src="bower_components/angular-smart-table/dist/smart-table.min.js"></script>
<script src='bower_components/textAngular/dist/textAngular-rangy.min.js'></script>
<script src='bower_components/textAngular/dist/textAngular-sanitize.min.js'></script>
<script src='bower_components/textAngular/dist/textAngular.min.js'></script>
<script src='bower_components/moment/moment.js'></script>
<script src='bower_components/angular-moment/angular-moment.js'></script>
<script src="bower_components/angular-bootstrap/ui-bootstrap.js"></script>
<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="bower_components/angular-md5/angular-md5.js"></script>
<script src='bower_components/semantic-ui/dist/semantic.min.js'></script>
<script src='bower_components/textAngular/dist/textAngular-rangy.min.js'></script>
<script src='bower_components/angular-semantic-ui/dist/angular-semantic-ui.min.js'></script>
<script src='bower_components/bootstrap/dist/js/bootstrap.min.js'></script>



<script type="text/javascript" src="dist/app.js"></script>
<script src="//localhost:35729/livereload.js"></script>
<script>



</script>

</body>

</html>
