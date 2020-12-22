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

const carousel = app.component("carouSel", {
  templateUrl: "./carousel.html",
});

const productDetails = app.component("productDetail", {
  templateUrl: "./productdetails.html",
});

app.controller("CollectionController", function ($scope) {
  $scope.collections = [
    {
      name: "Accesories",
      image:
        "https://cdn.shopify.com/s/files/1/0276/4616/5110/collections/accessories_540x.jpg?v=1589428985",
      quantity: 17,
    },
    {
      name: "BackPacks",
      image:
        "https://cdn.shopify.com/s/files/1/0276/4616/5110/collections/bag_540x.jpg?v=1589429021",
      quantity: 17,
    },
    {
      name: "HomePage",
      image:
        "https://cdn.shopify.com/s/files/1/0276/4616/5110/collections/accessories_5e68ae61-8db3-4f19-a812-887b89310179_540x.jpg?v=1589814373",
      quantity: 17,
    },
    {
      name: "Shoes",
      image:
        "https://cdn.shopify.com/s/files/1/0276/4616/5110/collections/shoes_540x.jpg?v=1589429091",
      quantity: 17,
    },
    {
      name: "Women",
      image:
        "https://cdn.shopify.com/s/files/1/0276/4616/5110/collections/women_540x.jpg?v=1589429115",
      quantity: 17,
    },
    {
      name: "Men",
      image:
        "https://cdn.shopify.com/s/files/1/0276/4616/5110/collections/men_540x.jpg?v=1589429045",
      quantity: 17,
    },
  ];
});
angular.bootstrap(document.getElementById("headerHolder"), ["navBar"]);
