"use strict";
const app = angular.module("myApp", []);
const navbar = app.component("navBar", {
  templateUrl: "./views/navigationbar.html",
});

const footer = app.component("footerWeb", {
  templateUrl: "./views/footer.html",
});

angular.bootstrap(document.getElementById("headerHolder"), ["navBar"]);
