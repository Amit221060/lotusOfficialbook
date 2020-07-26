(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sitelogo{\r\n  text-align:center;\r\n  padding:5% 0% 0% 5%;\r\n}\r\n@media screen and (max-width: 767px){\r\n .sitelogo img {\r\n    height:110px;\r\n    width:200px ;\r\n    padding:0% 0% 0% 0%;\r\n    margin:5% 0% 0% 0%;\r\n    border-radius:50%;\r\n }\r\n}\r\n.sitename{\r\n  font-family:'fantasy';\r\n  font-size:8em;\r\n  font-weight: 700;\r\n  color:#d401b8;\r\n  text-align:center;\r\n  padding:2% 0% 0% 5%;\r\n}\r\n@media screen and (max-width: 767px){\r\n  .sitename{\r\n    font-family:'fantasy';\r\n    font-size:3.5em;\r\n    color:#d401b8;\r\n    text-align:center;\r\n    padding:0%;\r\n    margin-bottom:-50px;\r\n    display:none;\r\n  }\r\n\r\n}\r\n.sitenavi a{\r\n  text-decoration: none;\r\n  color:white;\r\n}\r\n.sitenavi{\r\n    color:white;\r\n    font-size:2.5em;\r\n    padding:0% 0% 0% 0%;\r\n    margin:0% 0% 0% 0%;\r\n    font-family:'poppins';\r\n    font-weight: 900;\r\n\r\n}\r\n@media screen and (max-width: 767px){\r\n  .sitenavi{\r\n    /* color:black;\r\n    font-size:2em;\r\n    padding:0% 0% 0% 0%;\r\n    margin:0% 0% 0% 0%;\r\n    font-family:'poppins';\r\n    background-color: honeydew; */\r\n    display: none;\r\n}\r\n\r\n}\r\n.siteslogan{\r\n  text-align:center;\r\n  font-family: 'poppins';\r\n  margin:5% 2% 2% 2%;\r\n}\r\n.siteslogan h1 {\r\n  font-family: 'poppins';\r\n  font-size:100px;\r\n  line-height: 98px;\r\n  color: #d401b8;\r\n  padding:0% 0% 0% 0%;\r\n  margin:2% 10% 0% 10%;\r\n  font-weight: 700;\r\n\r\n}\r\n@media screen and (max-width: 767px){\r\n.siteslogan h1 {\r\n    font-size: 42px !important;\r\n    line-height: 48px !important;\r\n    text-align: justify;\r\n    font-weight:900;\r\n    margin:2% 25% 0% 10%;\r\n}\r\n}\r\n@media (max-width: 1024px) and (min-width: 768px){\r\n.siteslogan h1 {\r\n    font-size: 64px;\r\n    line-height: 68px;\r\n    font-family: 'poppins';\r\n}\r\n}\r\n.mbwhats{\r\n  display: none;\r\n}\r\n@media(max-width:760px){\r\n  .mbwhats{\r\n    display:inline-block;\r\n    text-align:center;\r\n    margin:2px 0px 2px 40px;\r\n  }\r\n}\r\n.about {\r\n  display: block;\r\n  font-family:'suisse';\r\n  font-weight:500;\r\n  font-size:22px;\r\n  line-height:26px;\r\n  color:#d401b8;\r\n  padding:3% 5% 2% 5%;\r\n  text-align: center;\r\n}\r\n@media screen and (max-width: 767px){\r\n  .about{\r\n    font-size:18px !important;\r\n    line-height:24px !important;\r\n    text-align:justify;\r\n    padding:5% 10%;\r\n  }\r\n\r\n}\r\n.site-phone-contact {\r\n  top: calc(50vh - 90px);\r\n  float: right;\r\n  position: fixed;\r\n  z-index: 4;\r\n  right: 0;\r\n}\r\n.phone-contact-2 {\r\n  background-color: green;\r\n  -ms-grid-row-align: end;\r\n      align-self: end;\r\n  padding: 12px 11px;\r\n  height: 185px;\r\n  width: 60px;\r\n  position: relative;\r\n  color: #fff;\r\n  font-family: 'poppins';\r\n}\r\n.phone-contact-2 .icon {\r\n  font-size:35px;\r\n  line-height: 18px;\r\n  color:#fff;\r\n  text-align: center;\r\n  display: block;\r\n}\r\n.phone-contact-2 .wdata{\r\n    font-size:16px;\r\n    height: 100%;\r\n    width: 120px;\r\n    position: absolute;\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n    top:20px;\r\n    left:40px;\r\n    font-weight:bolder;\r\n    padding:0px ;\r\n}\r\n.exchange{\r\n  padding:0% 3% 0% 3%;\r\n  margin:2% 0% 2% 0%;\r\n }\r\n.exchange .cardwrapper .card{\r\n    background-color:rgb(36, 33, 33);\r\n    padding:2% 1% 2% 1%;\r\n    margin:4% 1% 4% 1% ;\r\n    border:2px solid rgb(244, 245, 243),;\r\n    box-shadow:\r\n    2px 2px 4px rgb(244, 245, 243),\r\n    -2px -2px 4px  rgb(244, 247, 240);\r\n    text-align:center;\r\n    height: 450px;\r\n}\r\n@media(max-width:768px){\r\n  .exchange .cardwrapper .card{\r\n    height:auto;\r\n\r\n  }\r\n}\r\n.card .msite{\r\n  padding:2% 0% 0% 0%;\r\n  display:-ms-inline-grid;\r\n  display:inline-grid;\r\n\r\n}\r\n.card .wlabel .wsites{\r\n  padding:1% 0% 1% 30%;\r\n  text-align:justify;\r\n}\r\n@media(max-width:768px){\r\n\r\n  .card .wlabel .wsites{\r\n    padding:1% 0% 1% 15%;\r\n    text-align:justify;\r\n  }\r\n\r\n}\r\n.card .wlabel .wsites img {\r\n  border-radius: 50%;\r\n  width:40px;\r\n  height:40px;\r\n}\r\n.lastcard{\r\n  background-color:rgb(36, 33, 33);\r\n  padding:2% 1% 2% 1%;\r\n  margin:4% 1% 4% 1% ;\r\n  border:2px solid rgb(244, 245, 243),;\r\n  box-shadow:\r\n  2px 2px 4px rgb(244, 245, 243),\r\n  -2px -2px 4px  rgb(244, 247, 240);\r\n  text-align:center;\r\n  color:#d401b8;\r\n  font-weight:800;\r\n  width:97.5%;\r\n}\r\n.lastcard .wsites img{\r\n  border-radius: 50%;\r\n  width:40px;\r\n  height:40px;\r\n  margin:2px ;\r\n}\r\n.lastcard .wsites{\r\n  text-align: justify;\r\n  display: inline;\r\n  margin:2%;\r\n}\r\n@media(max-width:768px) {\r\n  .lastcard .wsites{\r\n    text-align: justify;\r\n    display: inherit;\r\n    padding-left:35px;\r\n  }\r\n}\r\n.check{\r\n  transition: ease-in-out;\r\n}\r\n.Payment {\r\n  text-align:center;\r\n  margin:5% 2% 0% 2%;\r\n}\r\n.content-block .content{\r\n margin: 5% 0% 5% 0%;\r\n border-left: 1px solid #bebaba;\r\n border-right: 1px solid #bebaba;\r\n border-top: 1px solid #bebaba;\r\n border-bottom: 1px solid #bebaba;\r\n}\r\n@media screen and (max-width: 767px){\r\n  .content-block .content{\r\n  margin:0 ;\r\n  border-left: 0px ;\r\n  border-right: 0px;\r\n  border-top: 1px solid #bebaba;\r\n  border-bottom: 1px solid #bebaba;\r\n\r\n }\r\n}\r\n.content-block .content img{\r\n  height:95px;\r\n  width:170px;\r\n}\r\n.terms{\r\n  display: block;\r\n  font-family:'suisse';\r\n  font-weight:500;\r\n  font-size:22px;\r\n  line-height:26px;\r\n  color:#d401b8;\r\n  padding:2% 5% 3% 5%;\r\n  text-align: center;\r\n}\r\n@media(max-width:768px){\r\n  .terms{\r\n      font-size: 18px !important;\r\n      line-height: 24px !important;\r\n      text-align:justify;\r\n      padding: 5% 10%;\r\n  }\r\n}\r\n.mterms ul li{\r\n  background-color:rgb(36, 33, 33);\r\n  padding:2% 1% 2% 1%;\r\n  margin:5% 1% 0% 1% ;\r\n  border:2px solid rgb(244, 245, 243),;\r\n  box-shadow:\r\n  2px 2px 4px rgb(244, 245, 243),\r\n  -2px -2px 4px  rgb(244, 247, 240);\r\n }\r\n.footer{\r\n  margin:5% 0% 5% 0%;\r\n}\r\n.middle{\r\n  margin:-13% 0% 0% 0%;\r\n  padding:0% 0% 0% 0%;\r\n}\r\n.middle span:after,\r\n.middle span:before{\r\n  content:\r\n  \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\r\n    text-decoration:line-through;\r\n    color:#d401b8;\r\n}\r\na\r\n{\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row navbar\">\n      <div class=\"sitelogo col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n        <img src=\"../assets/logo1.jpeg\" width=250px height=250px alt=\"sitelogo\">\n      </div>\n      <div class=\"sitename col-lg-10 col-md-12 col-sm-12 col-xs-12\">\n        <p><i>\n            <span style=\"color: white;\">Lotus</span><span style=\"margin-left:2px;\">Official</span>\n          </i> </p>\n        <div class=\"middle\">\n          <span style=\"color: white; font-size:18px;\"> Owner-Raj</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row navi\" style=\"text-align:center;\">\n      <div class=\"sitenavi col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n        <a href=\"#about\">About</a>\n      </div>\n      <div class=\"sitenavi col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n        <a href=\"https://api.whatsapp.com/send?phone=+918090599277&amp;text=&amp;source=&amp;data=\">Bet Here</a>\n      </div>\n      <div class=\"sitenavi col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n        <a href=\"#terms\">Terms</a>\n      </div>\n    </div>\n\n    <div class=\"row siteslogan\">\n      <!-- <hr style=\"border:2px solid yellow;\"> -->\n      <h1>Biggest Book Maker Provider!</h1>\n      <!-- <hr style=\"border:2px solid yellow;\"> -->\n    </div>\n\n    <div class=\"mbwhats btn\" style=\"background: #d401b8;\">\n      <a style=\"color: black; font-weight: 600;\"\n        href=\"https://api.whatsapp.com/send?phone=+443308087622&amp;text=&amp;source=&amp;data=\">BET HERE</a>\n    </div>\n\n    <div class=\"about row\" id=\"about\">\n      <div class=\"h1 col-lg-4\" style=\"color:#d401b8;  font-family:cursive; text-align:center; margin-top:5%;\">About US\n      </div>\n      <div class=\"section-content col-lg-8\" style=\"padding:20px 0px 10px 0px; text-align:justify;\">\n        Welcome to sports betting and casino online at Vinternational ! If you are looking to enjoy sports betting and\n        casino online,then you've come to the right place. We are specialised in providing premium quality sites for the\n        purpose of Gambling on all sports and various casino and including shares commodity.We provide all the range of\n        services which include User id, Cutting id, All sorts of pannel ranging from basic dealer to the High End Admin\n        Pannel.\n        Give us a chance to Experience the best service.\n      </div>\n    </div>\n\n\n    <div class=\"site-phone-contact Whatsapp\">\n      <a href=\"https://api.whatsapp.com/send?phone=+918090599277&amp;text=&amp;source=&amp;data=\">\n        <div class=\"phone-contact-2\">\n          <div class=\"icon\">\n            <i class=\"fa fa-whatsapp\"></i>\n          </div>\n          <div class=\"wdata\">\n            <span class=\"online-chat-text\">WhatsApp Chat</span>\n            <br>\n            <span>+918090599277</span>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"row exchange\">\n      <div class=\"h1\" style=\"color:#d401b8; margin:2%; text-align:center; font-family: fantasy;\">\n        <h1 class=\".text-light .text-white\">BookMaker's Available</h1>\n      </div>\n      <div class=\"cardwrapper col-lg-4 col-md-6 col-sm-12 col-xs-12\" *ngFor=\"let item of data; index as i\">\n        <div class=\"card\">\n          <div class=\"msite\">\n            <img style=\"margin: auto; height: 90px;\" src={{item.murl}} alt=\"ola\">\n            <a style=\"margin:3% ;font-weight:800; color:white\" href=\"{{item.madd}}\" target=\"_blank\">{{item.mname}}</a>\n          </div>\n          <h3 style=\"color:#d401b8;\">White Labels Available </h3>\n          <div class=\"wlabel\" *ngFor=\"let item of data[i].wdata\">\n            <div class=\"wsites\">\n              <img src={{item.url}} alt=\"wimages\">\n              <a style=\"margin:2%; font-weight:600; color:white\" href=\"{{item.add}}\" target=\"_blank\">{{item.name}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"lastcard col-lg-12 col-xs-12 col-md-12 col-sm-12\">\n        <h2>\n          <p>Other Sites Available</p>\n        </h2>\n        <div class=\"wsites\">\n          <img src=\"../assets/lordsexch.jpg\" alt=\"lordExchange\">\n          <a href=\"Lordsexchange.com\">Lordsexchange.com</a>\n        </div>\n        <div class=\"wsites\">\n          <img src=\"../assets/telegramexch.png\" alt=\"telegram\">\n          <a href=\"https://Telegramexch.com\">Telegramexch.com</a>\n        </div>\n        <div class=\"wsites\">\n          <img src=\"../assets/tenexch.jpg\" alt=\"ten\">\n          <a href=\"https://Tenexch.com\">Tenexch.com</a>\n        </div>\n        <div class=\"wsites\">\n          <img src=\"../assets/Sexch.png\" alt=\"Sexch.png\">\n          <a href=\"https://Satsport.com\">Satsport.com</a>\n        </div>\n        <div class=\"wsites\">\n          <img src=\"../assets/khaiexchcom.png\" alt=\"khaiexchcom.png\">\n          <a href=\"https://Khaiexch.com\">khaiexch.com</a>\n        </div>\n\n\n\n\n\n\n      </div>\n    </div>\n\n    <div class=\"Payment row\">\n      <div class=\"h1\" style=\"color:#d401b8; text-align:center; font-family: fantasy;\">\n        <h1>Payment We Accept</h1>\n      </div>\n\n      <div class=\"content-block col-lg-12\">\n        <div class=\"content col-xs-12 col-sm-12 col-lg-2\">\n          <img src=\"../assets/gplay.png\" alt=\"Google Payment\">\n        </div>\n        <div class=\"content col-xs-12 col-sm-12 col-lg-2\">\n          <img src=\"../assets/IMPS.png\" alt=\"imps Payment\">\n        </div>\n        <div class=\"content col-xs-12 col-sm-12 col-lg-2\">\n          <img src=\"../assets/paytm.png\" alt=\"paytm Payment\">\n        </div>\n        <div class=\"content col-xs-12 col-sm-12 col-lg-2\">\n          <img src=\"../assets/phonepe.png\" alt=\"phonepe Payment\">\n        </div>\n        <div class=\"content col-xs-12 col-sm-12 col-lg-2\">\n          <img src=\"../assets/neteller.png\" alt=\" netellar Payment\">\n        </div>\n        <div class=\"content col-xs-12 col-sm-12 col-lg-2\">\n          <img src=\"../assets/skrill.jpg\" alt=\"skrill Payment\" style=\"padding:20px;\">\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row terms\" id=\"terms\">\n      <div class=\"h1\" style=\"color:#d401b8;; font-family:fantasy; text-align:center; margin-top:5%;\">Our Terms</div>\n      <div class=\"section-content\" style=\"padding:20px 0px 10px 0px; text-align:justify;\">\n        We provide various betting exchanges with more than 30 platforms to play on different types of\n        sports , games , casino and binary markets\n        We provide all the levels of Agency and client IDs\n        Admin , Senior super ,Super Master\n        Master , Player ID . We provide white label of all websites , Make your own website.\n        We provide 24*7 Withdrawal and maximum process time is 15 Mins.\n        <div class=\"mterms\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              We don't deal on Telegram\n              <span style=\"color: rgb(223, 29, 29); float:right;\">&#10006;</span>\n            </li>\n            <li class=\"list-group-item \">\n              We deal on 1 WhatsApp\n\n              <span style=\"color: turquoise; float:right;\">&#10004;</span>\n            </li>\n            <li class=\"list-group-item\">\n              We are a company, Not a dealer\n              <span style=\"color: turquoise; float:right;\">&#10004;</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"contact\">\n      <section class=\"contact-section\" style=\"margin-top:20px;\" id=\"contact-section\">\n        <h1 style=\"color:#d401b8; text-align: center;font-family: fantasy;\">Contact Us</h1>\n        <hr class=\"main-two-hr\" width=\"25%\">\n\n        <div class=\"buttons\">\n          <h4 style=\"font-size: 16px;margin-left:25%!important;color: #fff;\" class=\"address aos-init aos-animate\"\n            data-aos=\"zoom-in\"><span style=\"color: #d401b8;\">Address : </span>1768 Glan Rd Mountcaster\n            ,Canada </h4>\n          <h4 style=\"font-size: 16px;margin-left:25%!important;color: #fff;\" class=\"address aos-init aos-animate\"\n            data-aos=\"zoom-in\"><span style=\"color: #d401b8;\">Email : </span>Rajlotus1010@gmail.com</h4>\n\n          <a href=\"https://t.me/Vofficial12\"\n            style=\"display: block;background: #0088cc;width: 200px;margin: 0 auto;text-align: center;padding: 10px;margin-top: 20px; color: white;\"\n            data-aos=\"zoom-in\" class=\"aos-init aos-animate\">\n            <i class=\"fab fa-telegram\" style=\"font:normal normal normal 14px/1 FontAwesome;\"></i> Telegram Channel</a>\n\n          <a href=\"https://api.whatsapp.com/send?phone=+918090599277&amp;text=&amp;source=&amp;data=\"\n            style=\"display: block;background: #25D366;width: 200px;margin: 0 auto;text-align: center;padding: 10px;margin-top: 20px; color: white;\"\n            data-aos=\"zoom-in\" class=\"aos-init aos-animate\">\n            <i class=\"fab fa-whatsapp\" style=\"font:normal normal normal 14px/1 FontAwesome;\"></i> Contact Owner</a>\n\n        </div>\n      </section>\n    </div>\n\n    <div class=\" row footer c0l-lg-12 col-xs-12 col-sm-12 col-md-12\">\n      <p style=\"color: floralwhite;text-align: center;\">\n        &copy;Copyright 2020, All right reserved.\n      </p>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.data = [
            {
                murl: "../assets/lotusbook99.jpg",
                mname: "Lotusbook247.io",
                madd: "https://Lotusbook247.io",
                wdata: [
                    { url: "../assets/vexch.jpeg", name: "Vexch247.com", add: "https://Vexch247.com" },
                    { url: "../assets/abexch9.jpg", name: "Abexch247.com", add: "https://Abexch247.com" },
                    { url: "../assets/olaexch.jpg", name: "OlaExch247.com", add: "https://OlaExch247.com" },
                    { url: "../assets/coexc.png", name: "Coexchange.com", add: "https://Coexchange.com" },
                    { url: "../assets/exch444.jpeg", name: "exch444.com", add: "https://exch444.com" }
                ]
            },
            {
                murl: "../assets/dimondexchange.png",
                mname: "Diamondexch.com",
                madd: "https://Diamondexch.com",
                wdata: [
                    { url: "../assets/maxwin9.png", name: "Maxwin9.com", add: "https://Maxwin9.com" },
                    { url: "../assets/goexch.jpg", name: "Goexch.com", add: "https://Goexch.com" },
                    { url: "../assets/coexc.png", name: "Coexchange9.com", add: "https://Coexchange9.com" }
                ]
            },
            {
                murl: "../assets/fairbook1.jpg",
                mname: "Fairbook.io",
                madd: "https://Fairbook.io",
                wdata: [
                    { url: "../assets/abexch9.jpg", name: "Abexch9.com", add: "https://Abexch9.com" },
                    { url: "../assets/lucky7.png", name: "Lucky7.in", add: "https://Lucky7.in" },
                    { url: "../assets/theroyalexch.png", name: "Theroyalexch.com", add: "https://Theroyalexch.com" },
                    { url: "../assets/exch333.jpeg", name: "exch333.com", add: "https://exch333.com" }
                ]
            },
            {
                murl: "../assets/lotusbook99.jpg",
                mname: "Lotusbook247.com",
                madd: "https://Lotusbook247.com",
                wdata: [
                    { url: "../assets/max66.jpeg", name: "Max66.com", add: "https://Max66.com" },
                    { url: "../assets/liveexch.png", name: "Livexch.com", add: "https://Livexch.com" },
                    { url: "../assets/goexch.jpg", name: "Goexch.guru", add: "https://Goexch.guru" }
                ]
            },
            {
                murl: "../assets/skyexchange.jpg",
                mname: "Sky Exchange",
                madd: "https://www.skyexch.com/exchange/member/gameHall.jsp",
                wdata: [
                    { url: "../assets/bigexch.jpeg", name: "BigExch", add: "https://www.bigexch.com/exchange/member/gameHall.jsp" },
                    { url: "../assets/skyexchange.jpg", name: "Skyinplay.Com", add: "https://www.skyinplay.com/exchange/member/gameHall.jsp" },
                    { url: "../assets/Sexch.png", name: "SgExch247.com", add: "https://www.sgexch247.com/exchange/member/gameHall.jsp" }
                ]
            },
            {
                murl: "../assets/bbbexch.jpg",
                mname: "BBB.Games",
                madd: "https://bbb.games",
                wdata: [
                    { url: "../assets/olaexch.jpg", name: "olaexch.com", add: "https://olaexch.com" },
                    { url: "../assets/9bet.jpg", name: "9bet.games", add: "https://9bet.games" },
                ]
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AmitSingh\Desktop\Documents\personal projects\betfair\website\VInternational\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map