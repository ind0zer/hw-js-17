const btn = document.querySelector(".one-btn");
const input = document.querySelector(".one-input").value;

btn.addEventListener("click", function () {
  btn.textContent = input;
});

const img = document.querySelector(".two-img");
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSow3bgq2ap0fSd7PRkslhqrPXbBmXqi2w78A&s";

const link = document.querySelector(".three-link");
const imgTwo = document.querySelector(".three-img");

link.href = "https://youtube.com/";
imgTwo.alt = "SHIFT";
console.log(imgTwo);

const fourList = document.querySelector(".four-list");

const firstEl = fourList.firstElementChild;

firstEl.textContent = "lox";
