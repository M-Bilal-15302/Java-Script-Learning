//                        SPREAD
//  --- spread mean expand an iterable into multiple values
//                                  example
//  suppose we want to find the minimum number in array with help of Math.min()
// let nums = [10, 5, 3, 6, 2, 8, 9];
// let min = Math.min(...nums);
// console.log(min);

// // here we can not pass the "nums" array without "...".
// console.log(nums);
// console.log(...nums);

//                                              Spread with array literals
//  we can use spread literal to simply copy an array
//                                  example

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// newArr.push(123);
// // console.log(arr);
// // console.log(newArr);

// let char = [..."hello and welcome"];
// // console.log(char);
// console.log(char[1]);
// char.forEach((ele) => {
//   console.log(ele);
// });

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let numbers = [...even, ...odd];
console.log(numbers);

//         we can also spread object leterals
const student = {
  fname: "will",
  email: "will@gmail.com",
  add: "street2 , township",
};

//    we can also use more properties right after spread leterals like "id" here
const copyStudent = { ...student, id: 12, isPass: true };
console.log(copyStudent);

const userData = {
  email: "john@yahoo.com",
  address: "newyork",
};
const copyData = { ...userData, id: 10 };
console.log(copyData);
