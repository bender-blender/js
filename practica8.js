const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
});

// Завданяя 2

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
});