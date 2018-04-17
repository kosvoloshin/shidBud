const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 16.6;
const step = 16.6;
let currentRight = 0;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "%";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "%";
  }
});