const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".drop-list");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("opened");
});