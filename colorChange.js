let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", () => {
  const color = getColor();
  heading.innerText = getColor();
  div.style.backgroundColor = color;
});

function getColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  //   console.log(`${red}, ${green}, ${blue}`);
  return `rgb(${red}, ${green}, ${blue})`;
}
