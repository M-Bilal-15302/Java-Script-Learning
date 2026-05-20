// as name suggest interval. setInterval methode(window obj) is used to run a function or code again and again with fix time delay.

// setInterval(() => {
//   console.log(" hello after each 3 second");
// }, 3000);

// since setInterval will not stop automatically so we need an id to stop (clear interval)
// const ID = setInterval(() => {
//   console.log("hello after 3 second each");
// }, 3000);

// clearInterval(ID); // if we not clear interval then it will run like infinite loop after each 3 second.
// console.log("interval cleared");

// -------------------------------------practice example
// let print 5 time hello with help of setinterval

let id = setInterval(() => {
  console.log("hello");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("interval cleared successfully");
}, 10000);
// In the above example setInterval will execute and print hello after each two sec but
//  we have its id to stop it after 10000 (10 sec) that will print 5 time hello then clear in setTimeout.
