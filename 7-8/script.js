let btn = document.getElementById("btn");
let background1 = document.getElementById("background1");
let background2 = document.getElementById("background2");
let background3 = document.getElementById("background3");
btn.addEventListener("click", function () {
  alert("This Allert");
});

btn.onclick = function () {
  background1.style.backgroundColor = "green";
};

btn.addEventListener("click", function () {
  background2.style.backgroundColor = "blue";
});

function changeBackgroundColor() {
  background3.style.backgroundColor = "red";
}

btn.addEventListener("click", changeBackgroundColor);

window.addEventListener("load", function () {
  alert("Page Load 100%");
});

let fishImage = document.getElementById("fish-image");

fishImage.addEventListener("load", function () {
  console.log("Image Load 100%");
});

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    alert("Tombol telah diklik!");
  });
});

btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "green";
});

btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "red";
});

// window.addEventListener("beforeunload", function (event) {
//   event.preventDefault();
//   event.returnValue = "";
// });

// function showConfirmation() {
//   let confirmationMessage = "Apakah Anda yakin ingin meninggalkan halaman ini?";
//   event.returnValue = confirmationMessage;
//   return confirmationMessage;
// }
let input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    alert("You pressed Enter!");
  }
});

