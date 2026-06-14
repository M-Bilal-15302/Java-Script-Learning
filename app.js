//  DOM (Document Object Model)
//  lets start with getting html elements and access them.

//  here we get the p tag element with help of it id name which is "aboutPera";
// and store it in variable "peragraph". now we can use it like object and access its so many properties.
// like for example
// let peragraph = document.getElementById("aboutPera");
// peragraph.style.color = "red";
// peragraph.innerText =
//   "this is about peragraph text accessed by java script and changed in js file.";

// let boxes = document.getElementsByClassName("box");
// for (let i = 1; i <= boxes.length; i++) {
//   console.log(i, "box");
//   boxes[i - 1].innerText = `booooooooooox${i}`;
// }

// let btn = document.getElementsByTagName("button");
// console.log(btn.length);

// let heading = document.querySelector("h1");

// heading.setAttribute("id", "head");
// // console.dir(heading);
// let peragraph = heading.nextElementSibling;
// // console.dir(peragraph);

// let boxes = document.querySelectorAll(".box");
// // console.dir(boxes);

// let newBtn = document.createElement("button");
// newBtn.innerText = "i am new btn";
// let body = document.querySelector("body");
// body.appendChild(newBtn);

let br = document.createElement("br");
let textInput = document.createElement("input");
let btn = document.createElement("button");
textInput.placeholder = "user name";
textInput.id = "text";
console.dir(textInput);
btn.innerText = "click me";
document.querySelector("body").append(textInput);
document.querySelector("body").append(br);
document.querySelector("body").append(btn);
btn.setAttribute("id", "btn");

let button = document.querySelector("button");
button.classList.add("btnClass");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").prepend(h1);
h1.classList.add("heading");

let pera = document.createElement("p");
pera.innerText = "Apna College delta practice";
document.querySelector("body").append(pera);
pera.classList.add("p");
