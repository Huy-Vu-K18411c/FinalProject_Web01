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

app.controller("BlogController", function ($scope) {
  $scope.blogs = [
    {
      title: "Title 1",
      date: "22/12/2012",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exofficia, hic quidem facere voluptates assumenda perspiciatis quodrepudiandae fugiat esse cumque, molestiae, quasi recusandae autrerum illo quas maiores error. Lorem ipsum dolor sit ametconsectetur, adipisicing elit...",
      author: "Nhat Han",
    },
    {
      title: "Title 2",
      date: "21/12/2012",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exofficia, hic quidem facere voluptates assumenda perspiciatis quodrepudiandae fugiat esse cumque, molestiae, quasi recusandae autrerum illo quas maiores error. Lorem ipsum dolor sit ametconsectetur, adipisicing elit...",
      author: "Quang Huy",
    },
    {
      title: "Title 3",
      date: "21/12/2012",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exofficia, hic quidem facere voluptates assumenda perspiciatis quodrepudiandae fugiat esse cumque, molestiae, quasi recusandae autrerum illo quas maiores error. Lorem ipsum dolor sit ametconsectetur, adipisicing elit...",
      author: "Gian Don",
    },
    {
      title: "Title 4",
      date: "20/12/2012",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exofficia, hic quidem facere voluptates assumenda perspiciatis quodrepudiandae fugiat esse cumque, molestiae, quasi recusandae autrerum illo quas maiores error. Lorem ipsum dolor sit ametconsectetur, adipisicing elit...",
      author: "Hong Oanh",
    },
    {
      title: "Title 5",
      date: "20/12/2012",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exofficia, hic quidem facere voluptates assumenda perspiciatis quodrepudiandae fugiat esse cumque, molestiae, quasi recusandae autrerum illo quas maiores error. Lorem ipsum dolor sit ametconsectetur, adipisicing elit...",
      author: "Minh Thu",
    },
    {
      title: "Title 6",
      date: "19/12/2012",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exofficia, hic quidem facere voluptates assumenda perspiciatis quodrepudiandae fugiat esse cumque, molestiae, quasi recusandae autrerum illo quas maiores error. Lorem ipsum dolor sit ametconsectetur, adipisicing elit...",
      author: "Nhat Han",
    },
  ];
});

function borderAnimation() {
  document.getElementById("rect__border").style.strokeWidth = 1;
}
function stopAnimation() {
  document.getElementById("rect__border").style.strokeWidth = 0;
}

app.controller("BlogItemController", function ($scope) {
  $scope.blogs = [
    {
      title: "Anteposuerit litterarum formas.",
      date: "22/12/2012",
      detail:
        "Diga, Koma and Torus are three kitchen utensils designed for Ommo, a new design-oriented brand introduced at the Ambiente show in February 2016. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun.Diga is a two-color melamine salad bowl where vegetables can be washed, drained and served. The disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned clockwise to lock the drain and hold condiments in the bowl when serving.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Koma and Torus are two tea infusers, each with an original design and a concealed function. Koma has a round base and a long stainless steel-trimmed handle which offers a comfortable grip and allows.And the brushed steel cover opens and closes at the touch of a finger to easily fill and empty the infuser. The perfect way to enjoy brewing tea. Torus is donut-shaped and can cling to any cup. It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea.",
      author: "Nhat Han",
    },
  ];
});

angular.bootstrap(document.getElementById("headerHolder"), ["navBar"]);
