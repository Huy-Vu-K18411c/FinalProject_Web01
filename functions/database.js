"use strict";
(function loadData() {
  fetch("../data/products.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      window.localStorage.setItem("data", JSON.stringify(data.results));
    });
})();
