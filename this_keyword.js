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
console.log(student.stdName);
console.log(student.age);
student.getAvg();
