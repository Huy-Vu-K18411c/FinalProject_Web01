const app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../index.html",
    })
    .when("/cart", {
      templateUrl: "../views/cart/cart.html",
    })
    .when("/catalog", {
      template: "<h1>catalog</h1>",
    });
});
