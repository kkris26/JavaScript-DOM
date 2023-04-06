let newHeading = document.createElement("h1");
newHeading.textContent = "hallo semua";
document.getElementById("content").appendChild(newHeading);

let newDiv = document.createElement("div");
newDiv.setAttribute("class", "container");
document.getElementById("content").appendChild(newDiv);

let newLink = document.createElement("a");
let linkText = document.createTextNode("redirect");
newLink.appendChild(linkText);
document.getElementById("content").appendChild(newLink);

let heading = document.getElementById("heading");
heading.innerHTML = "<h2>ini heading h2</h2>";

let newParagraph = document.createElement("p");
newParagraph.setAttribute("id", "new-paragraph");
newParagraph.textContent = "in paragaraph baru";
heading.appendChild(newParagraph);

newParagraph.insertAdjacentHTML(
  "afterend",
  "<span>Element baru yang ditambahkan dengan afterend</span>"
);
let newH2 = document.createElement("h2");
newH2.textContent = "heading ditambahkan dengan append";
heading.append(newH2);

let newH1 = document.createElement("h1");
newH1.textContent = "heading posisi pertama dengan prepend";
heading.prepend(newH1);

let oldElement = document.getElementById("old-element");
let newElement = document.createElement("span");
newElement.textContent = "element baru yang menggantikan old element";
content.replaceChild(newElement, oldElement);

let cloneHeading = heading.cloneNode(true);
let heading2 = document.getElementById("heading-2");
heading2.appendChild(cloneHeading);

let deleteElement = document.getElementById("delete-element");
content.removeChild(deleteElement);


let list = document.getElementById("list");
let newAlphabet = document.createElement("li");
let text = document.createTextNode("Z");
let Alphabet = document.createElement("li");
Alphabet.setAttribute("id", "alphabet");
let alphabetID = document.getElementById("alphabet");
let textN = document.createTextNode("N(Alphabet Baru)");

newAlphabet.appendChild(text);
Alphabet.appendChild(textN);
list.insertBefore(newAlphabet, list.children[2]);
insertAfter(Alphabet, alphabetID);
