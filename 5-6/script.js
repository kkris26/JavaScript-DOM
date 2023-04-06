let input = document.getElementById("input");
input.type = "email";
input.name = "name";

let content = document.getElementById("content");
let paragraph = document.createElement("p");
paragraph.setAttribute("id", "paragraph");
paragraph.textContent = "test-2";
paragraph.style.color = "red";
paragraph.style.height = "80px";
content.appendChild(paragraph);

let link = document.getElementById("link");
linkAddress = link.getAttribute("href");
console.log(linkAddress);

content.removeAttribute("class");

let classParagraph = document.getElementById("classParagraph");
classParagraph.classList.remove("informasi");
console.log(classParagraph.className);

let contentWidth = content.offsetWidth;
let contentHeight = content.offsetHeight;

console.log(`Lebar: ${contentWidth}px`);
console.log(`Tinggi: ${contentHeight}px`);





