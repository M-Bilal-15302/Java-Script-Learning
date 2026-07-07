let msg = document.querySelector("h3");
let buttons = document.querySelectorAll(".btn");
let gameStart = false;
document.addEventListener("keypress", function () {
  if (!gameStart) {
    console.log("game started");
    gameStart = true;
  }
});
