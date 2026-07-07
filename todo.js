let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");
btn.addEventListener("click", (e) => {
  let item = document.createElement("li");
  item.innerText = input.value;

  let dltbtn = document.createElement("button");
  dltbtn.innerText = "delete";
  dltbtn.classList.add("delete");

  item.append(dltbtn);
  list.append(item);
  input.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    e.target.parentElement.remove();
    console.log("delete");
  } else {
    console.log("dont delete");
  }
});

// let dltbtns = document.querySelectorAll(".dltbtn");
// for (btn of dltbtns) {
//   btn.addEventListener("click", (e) => {
//     e.target.parentElement.remove();
//   });
// }
// dltbtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.target.parentElement.remove();
//   });
// });
