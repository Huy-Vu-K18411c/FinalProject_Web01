"use strict";
const app = angular.module("myApp", []);
const navbar = app.component("navBar", {
  templateUrl: "./navigationbar.html",
});

const footer = app.component("footerWeb", {
  templateUrl: "./footer.html",
});

const loginform = app.component("loginForm", {
  templateUrl: "./login.html",
});

const signup = app.component("signUp", {
  templateUrl: "./register.html",
});

angular.bootstrap(document.getElementById("headerHolder"), ["navBar"]);
