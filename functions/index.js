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
