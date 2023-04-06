// elect an element by id.
const navbar = document.getElementById("navbar");
const content = document.getElementById("content");
const p = document.getElementById("paragraph");
console.log(navbar);
console.log(content);
console.log(p);

// get the parent node of an element.
let navChild = document.getElementById("navbar");
let navParent = navChild.parentNode;
console.log(navParent);
let contentChild = document.getElementById("navbar");
let contentParent = contentChild.parentNode;
console.log(contentParent);
let paragraphChild = document.getElementById("navbar");
let paragraphParent = paragraphChild.parentNode;
console.log(paragraphParent);
// get the parent node of an element.

// elect an element by id.

// select elements by name.
const fullName = document.getElementsByName("full-name");
const button = document.getElementsByName("button");
const email = document.getElementsByName("email");
console.log(fullName);
console.log(button);
console.log(email);
// select elements by name.

// get siblings of an element.
let textSib = document.getElementsByName("text");
let nextText = textSib.nextText;

console.log(nextText);

let emailSib = document.getElementsByName("email");
let previousEmail = emailSib.previousEmail;

console.log(previousButton);

let buttonSib = document.getElementsByName("button");
let previousButton = buttonSib.previousButton;
let nextButton = buttonSib.nextButton;

console.log(previousButton);
console.log(nextButton);

// get siblings of an element.

// select elements by a tag name.
const h1 = document.getElementsByTagName("h1");
const form = document.getElementsByTagName("form");
const input = document.getElementsByTagName("input");
console.log(h1);
console.log(form);
console.log(input);
// select elements by a tag name.

// select elements by one or more class names.
const navMenu = document.getElementsByClassName("menu");
const title = document.getElementsByClassName("title");
const btnSubmit = document.getElementsByClassName("btn-submit");
console.log(navMenu);
console.log(title);
console.log(btnSubmit);

// get children of an element.
let menuParent = document.getElementsByClassName("menu");
let childMenu = menuParent.children.length;

console.log("Jumlah child dari menu " + childMenu);

let menuForm = document.getElementsByClassName("form");
let childForm = FormParent.children.length;

console.log("Jumlah child dari menu " + childForm);
let menuAbout = document.getElementsByClassName("form");
let childAbout = aboutParent.children.length;

console.log("Jumlah child dari menu " + childAbout);
// get children of an element.

// select elements by one or more class names.

// select elements by CSS selectors.
const about = document.querySelector(".about");
const titleAbout = document.querySelector(".title-about");
const aboutDesc = document.querySelector(".about-desc");
console.log(about);
console.log(titleAbout);
console.log(aboutDesc);
// select elements by CSS selectors.
