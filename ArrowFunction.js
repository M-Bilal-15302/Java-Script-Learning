//  ----------------- Arrow function-----
//  arrow fucntion is a function without function keyword and it is stored in a variable.
//  usually arrow function is used for small function definition.
//  it is used for callback function(those function which passed as argument to another function).
//  since we dont want to change the value of arrow function variable so it is best to declare it with const.

const sum = (a, b) => {
  return a + b;
};
// console.log(sum(5, 6));

const cube = (n) => {
  console.log(n ** 3);
};
// cube(2);

const sqr = (num) => {
  console.log(num ** 2);
};
// sqr(10);

//  ------------------------ Implicite return - arrow function
//  if arrow function reuring single value then we do not explicitily write the return keyword

const mul = (a, b) => a * b;
console.log(mul(3, 8));

const func = (a) => {
  console.log(a);
};
func("this is a");
