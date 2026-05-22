// let arr = [1, 2, 3, 4, 5];

// forEach is highorder function that take callback function and you can perform a specific
// task for each of array element.
//  we can use as loop that run for each element of array
// arr.forEach((i) => {
//   console.log(`do something for element ${i}`);
// });

// const students = [
//   {
//     name: "khan",
//     marks: 96,
//   },
//   {
//     name: "ali",
//     marks: 80,
//   },
//   {
//     name: "simran",
//     marks: 98,
//   },
// ];

// ---------------            map methode
// map return a new array of elements just like foreach methode.
// let gpaList = students.map((el) => {
//   return el.marks / 10;
// });

// console.log(gpaList);

// ------------------------ filter methode
//  filter methode filter the orignal array and return new array of true elements that defined in filter call back function.
// let passStudents = students.filter((ele) => {
//   return ele.marks > 80;
// });
// console.log(passStudents);

//               example of filter
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = nums.filter((ele) => {
//   return ele % 2 == 0;
// });

// console.log(even);

//                      EVERY & SOME methode
// Every methode is same as AND gate. here callback function of Every methode return true or false as defined for each element. if one of the result return as false then the "every" methode return false.

// let evenNums = [2, 4, 6, 8, 10];
// let result = evenNums.every((ele) => {
//   return ele % 2 == 0;
// });

// console.log(result);

//   Same "some" methode is like OR gate. if one of the element callback result true "some" methode will return true always

// let evenNums = [4, 3, 5, 9, 11];
// let result = evenNums.some((ele) => {
//   return ele % 2 == 0;
// });

// console.log(result);

// practice questions
//  return true if an array contain no zero
// let checkZero = [1, 2, 3, 4, 5, 6, 7];
// let result = checkZero.every((ele) => {
//   return ele != 0;
// });
// console.log(result);

//         ------------------------------------  REDUCE METHODE ----------------------------
//  reduce methode reduce the value of array to a single value. as above methode its required a callback with two variable "accumulator" "element". accumulator store the result that we write for each element. initially it is undefined.

// let nums = [1, 5, 2, 3, 100];
// let finalVal = nums.reduce((acc, ele) => acc + ele);
// console.log(finalVal);

//                           -------- practice question --------
//   find the maximus in an array using reduce methode

// let numbers = [1, 2, 3, 5, 2, 112, 100];
// let max = numbers.reduce((max, ele) => {
//   if (max > ele) {
//     return max;
//   } else {
//     return ele;
//   }
// });
// console.log(max);

//                                    practice question to check all the number devisiable by 10

// let nums = [5000, 20, 30, 40];
// let result = nums.every((ele) => {
//   return ele % 10 == 0;
// });
// console.log(result);

//                                  create a function to check the minimum number in an array
function checkMin(nums) {
  let min = nums.reduce((res, ele) => {
    if (res > ele) {
      return ele;
    } else {
      return res;
    }
  });
  console.log(min);
}
let nums = [0, 24, 2, 13, -88, 62, 2];

checkMin(nums);
