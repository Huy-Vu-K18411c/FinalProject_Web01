function displayProduct(contentHolder, num = 8) {
  const products = dataRequest();

  for (let i = 0; i < num; i++) {
    const productCard = document.createElement("div");
    const productImg = document.createElement("img");
    const nameHolder = document.createElement("div");
    const productName = document.createElement("h4");
    const productPrice = document.createElement("p");
    let a = Math.round(Math.random() * 272);
    productCard.setAttribute("align", "center");
    productImg.src =
      "https://m.media-amazon.com/images/I/" +
      products[a].imageMap.MAIN +
      ".jpg";
    productName.innerHTML = products[i].productName;
    productPrice.innerHTML = products[i].price;

    productName.style.color = "black";

    productCard.classList.add("container-th");
    productCard.classList.add("productCard");

    productImg.onmouseover = function () {
      if (products[a].imageMap.PAIR === undefined) {
        productImg.src =
          "https://m.media-amazon.com/images/I/" +
          products[a].imageMap.PT02 +
          ".jpg";
      } else {
        productImg.src =
          "https://m.media-amazon.com/images/I/" +
          products[a].imageMap.PAIR +
          ".jpg";
      }
    };

    productCard.onmouseleave = function () {
      productImg.src =
        "https://m.media-amazon.com/images/I/" +
        products[a].imageMap.MAIN +
        ".jpg";
    };
    nameHolder.appendChild(productName);
    nameHolder.appendChild(productPrice);
    productCard.appendChild(productImg);
    productCard.appendChild(nameHolder);
    nameHolder.classList.add("centered-content");
    nameHolder.style.flexDirection = "column";
    productCard.onclick = function () {
      window.location.pathname = "./productdetails.html";
    };
    // productName.appendChild(productPrice);

    contentHolder.appendChild(productCard);
  }
}
