"use strict";angular.module("angularBowerGruntShareApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","720kb.socialshare"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("angularBowerGruntShareApp").controller("MainCtrl",["$scope",function(a){}]),angular.module("angularBowerGruntShareApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularBowerGruntShareApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <!-- Start SocialShare Buttons ////////////////////////////////--> <!-- Start SocialShare Buttons ////////////////////////////////--> <div class="btn-group"> Share this website! <p></p> <!-- Start Facebook Share ////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="facebook" socialshare-type="share" socialshare-via="145634995501895" socialshare-media="http://imgur.com/a/HKHL3" socialshare-quote="It only takes a few minutes." socialshare-hashtags="#MJG, #ourgovs.com" socialshare-title="This is Our Government" socialshare-mobileiframe="true" socialshare-caption="Calling our Legislators is ann easy way to help keep our country on track" socialshare-url="http://ourgovs.com" socialshare-popup-height="300" socialshare-popup-width="400" socialshare-trigger="click"><img ng-src="images/Facebook.a2b2deba.png"> </button> <!-- Start Facebook Share ////////////////////////////////--> <!-- Start Twitter Share ////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="twitter" socialshare-hashtags="ourgovs.com, reps, congress" socialshare-via="twitter" socialshare-text="{{test.testValue}}" socialshare-url="http://ourgovs.com" socialshare-popup-height="300" socialshare-popup-width="400" socialshare-trigger="click"><img ng-src="images/Twitter.e097ff69.png"> </button> <!-- End Twitter Share ////////////////////////////////--> <!-- Start LinkedIn Share ////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="linkedin" socialshare-text="{{test.testValue}}" socialshare-url="http://imgur.com/a/HKHL3" socialshare-description="OurGovs.com will tell you who your repesenatives are" socialshare-source="OurGovs.com" socialshare-popup-height="300" socialshare-popup-width="400" socialshare-trigger="click"> <img ng-src="images/LinkedIn.841ea485.png"> </button> <button class="socialbutton" socialshare socialshare-provider="email" socialshare-body="Hello! http://ourgovs.com" socialshare-to="test@test.ing" socialshare-cc="test@test.ing" socialshare-media="https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" socialshare-subject="Very important email" socialshare-popup-height="300" socialshare-popup-width="400"> <img ng-src="images/Email.3012d212.png"> </button> </div> <!-- End LinkedIn Share ////////////////////////////////--> <!-- End SocialShare Buttons ////////////////////////////////--> <!-- End SocialShare Buttons ////////////////////////////////--> </div>')}]);