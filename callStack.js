// function one() {
//   return 1;
// }
// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

function callToDB(data) {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve("data get successfully");
    } else {
      reject("error");
    }
  });
}
callToDB("here is your data");
