(function displayProduct() {
  const products = dataRequest();
  const productHolder = document.getElementById("productHolder");

  for (let i = 0; i < 8; i++) {
    const productCard = document.createElement("div");
    const productImg = document.createElement("img");
    const productName = document.createElement("h4");
    const productPrice = document.createElement("p");

    productCard.setAttribute("align", "center");
    productImg.src =
      "https://m.media-amazon.com/images/I/" +
      products[i].imageMap.MAIN +
      ".jpg";
    productName.innerHTML = products[i].productName;
    productPrice.innerHTML = products[i].price;

    productName.style.color = "black";

    productCard.classList.add("container-th");
    productCard.classList.add("productCard");

    productImg.onmouseover = function () {
      if (products[i].imageMap.PAIR === undefined) {
        productImg.src =
          "https://m.media-amazon.com/images/I/" +
          products[i].imageMap.PT02 +
          ".jpg";
      } else {
        productImg.src =
          "https://m.media-amazon.com/images/I/" +
          products[i].imageMap.PAIR +
          ".jpg";
      }
    };

    productCard.onmouseleave = function () {
      productImg.src =
        "https://m.media-amazon.com/images/I/" +
        products[i].imageMap.MAIN +
        ".jpg";
    };

    productCard.appendChild(productImg);
    productCard.appendChild(productName);
    productName.appendChild(productPrice);

    productHolder.appendChild(productCard);
  }
})();
