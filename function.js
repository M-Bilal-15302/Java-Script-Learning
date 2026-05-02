// let greet = "hello";
// function outerGreet() {
//   let greet = "Assalam o Alaikum";
//   console.log(`Greeting from outer function ${greet}`);

//   function innerGreet() {
//     console.log(`Greeting from inner function ${greet}`);
//   }
//   innerGreet();
// }
// console.log(greet); // hello
// outerGreet(); // Assalam o alaikum

//------------------------------- Function Epression ----------------
// function expression is when we store a function in a variable.

// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(sum(2, 3), 5)); // passing the sum function as a perameter to sum function.

// ---------------------High order Functions
// those function that takes a function as an argument(callback function) or return a function

// function greeting(func, n) {
//   for (let i = 1; i <= n; i++) {
//     func();
//   }
// }
// function hello() {
//   console.log("hello");
// }
// greeting(hello, 5);

//  ---------------------------- High-order function
function processNumbers(arr, operation) {
  for (i of arr) {
    operation(i);
  }
}
function double(x) {
  console.log(x * 2);
}

function squareFunc(y) {
  console.log(y ** 2);
}
function add10(e) {
  console.log(e + 10);
}

// processNumbers([1, 2, 3, 4, 5], double);
// processNumbers([2, 4, 6], squareFunc);
// processNumbers([1, 2, 3], add10);

//-----------------------Return high-order function
function createMultiplier(factor) {
  return double;
}

let doubel = createMultiplier(2);
doubel(5);
