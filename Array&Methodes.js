let arr = [1, 2, 3, 4, 5];

// forEach is highorder function that take callback function and you can perform a specific
// task for each of array element.
//  we can use as loop that run for each element of array
// arr.forEach((i) => {
//   console.log(`do something for element ${i}`);
// });

const students = [
  {
    name: "khan",
    marks: 96,
  },
  {
    name: "ali",
    marks: 80,
  },
  {
    name: "simran",
    marks: 98,
  },
];

// ---------------            map methode
// map return a new array of elements just like foreach methode.
let gpaList = students.map((el) => {
  return el.marks / 10;
});

// console.log(gpaList);

// ------------------------ filter methode
//  filter methode filter the orignal array and return new array of true elements that defined in filter call back function.
let passStudents = students.filter((ele) => {
  return ele.marks > 80;
});
// console.log(passStudents);

//               example of filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = nums.filter((ele) => {
  return ele % 2 == 0;
});

// console.log(even);
