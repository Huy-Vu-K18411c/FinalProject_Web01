// Hiển thị template content
// Đối số: nơi giữ template và đường dẫn đến template
function showTemplate(contentHolder, url) {
  async function getTemplate() {
    var template = document.createElement("template");
    template.innerHTML = await (await fetch(url)).text();
    var displayContent = template.content;
    contentHolder.appendChild(displayContent);
  }
  getTemplate();
}

//lấy data từ trong localStorage của browser
function dataRequest() {
  const products = window.localStorage.getItem("data");
  return JSON.parse(products);
}

function cartRequest() {
  const cart = window.localStorage.getItem("cart");
  return JSON.parse(cart);
}

function customerInfoRequest() {
  const customerInfo = window.localStorage.getItem("customerInfo");
  return JSON.parse(customerInfo);
}
