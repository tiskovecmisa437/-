console.clear();

const q = [
  "Як розмістити об'єкт по центру",
  "Як розмістити об'єкт в колонку",
  "Як повернути об'єкт?",
  "Функція яка розбиває рядок?",
  "як називається масив на англ мові?"
];
const a = ["center", "columns", "reverse", "split", "array"];
const qq = document.querySelector(".q");
const aa = document.querySelector(".a");

const randomIndex = Math.floor(Math.random() * q.length);
qq.textContent = q[randomIndex];

let res1 = qq.textContent;
let res2 = a[q.indexOf(qq.textContent)];

for (let i = 0; i < res2.length; i++) {
  let el = document.createElement("p");
  aa.appendChild(el);
}

const letters = document.querySelectorAll(".letter");
for (let j = 0; j < letters.length; j++) {
  letters[j].addEventListener("click", press);
}

let n = 0;
const pa = document.querySelectorAll("p");
console.log(pa);

function press() {
  for (let g = 0; g < res2.length; g++) {
    if (res2[g] == this.textContent) {
      pa[g].style.backgroundColor = "#00FFFF";
      console.log("df");
      pa[g].textContent = this.textContent;
    }
  }
}
