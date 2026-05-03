//------------------------- this Keyword
//  Actually this keyword refer to calling object
//  "this" keyword referes to an object that is executing the current piece of code.
const student = {
  stdName: "xyz",
  age: 25,
  eng: 20,
  math: 39,
  phy: 33,
  //   getAvg() {
  //     let avg = (eng + math + phy) / 3;        here this getAvg function will result to error
  //    console.log(avg);                          "eng math phy" is not defined
  //   },

  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};
// console.log(student.stdName);
// console.log(student.age);
// student.getAvg();

//  --------------------Try & Catch -----------
// Try statement allows you to define a block of code to be tested for errors while it is being executed.

// try{
//    here will be a block of code where you think an error could occurs.
// }

// -----------------------catch
// the catch statement allows you to define a block of code to be exwcuted, if an error occure in try block.

// --------------- example 1
// console.log("hello before error");
// console.log(a);
// console.log("hello after error");

//  ---------------Example 2
console.log("hello before try");
try {
  console.log(a);
} catch (e) {
  // e is like an perameter to catch that store the error.
  console.log("a is not defined");
  console.log(e);
}
console.log("hello after catch");
// in example 2 the code after error in try block will be executed normally.
