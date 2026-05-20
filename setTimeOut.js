//  settimeout methode is window object methode that is used to perform a function/task after a specfic time
//  or used to delay a task

console.log("hello before timeout");
setTimeout(() => {
  console.log("hello  after 2 sec");
}, 2000); // here times is in milisec so 2000 = 2 sec
console.log("hello after timeout");

//   we can store each timeout methode id in a variable and using that we can stop from running before the delay ends.
console.log("hello before timeout");
let id = setTimeout(() => {
  console.log("hello  after 2 sec");
}, 3000);
console.log("hello after timeout");
clearTimeout(id);
console.log("time out never runs becuse we clear its id before the delay end");
