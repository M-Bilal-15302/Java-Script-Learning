// universities and collge activity start
let url = "http:universities.hipolabs.com/search?name=india";
async function getColleges() {
  let res = await axios.get(url);
  console.log(res);
}
// universities and collge activity ends

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getFact() {
//   try {
//     let data = await fetch(url);
//     let res1 = await data.json();
//     console.log(res1.fact);
//     let data2 = await fetch(url);
//     let res2 = await data2.json();
//     console.log(res2.fact);
//     // console.log(res.fact);
//   } catch (err) {
//     console.log(err);
//   }
// }

async function getFacts() {
  const config = { Headers: { Accept: "application/json" } };
  try {
    let data = await axios.get(url, config);
    console.log(data.data.fact);
  } catch (err) {
    console.log(err);
  }
}

// function changeColor(color, delay, changeNextColor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (changeNextColor) changeNextColor();
//   }, delay);
// }
// changeColor("green", 1000, () => {
//   changeColor("blue", 1000);
// });

// PROMISES

// function getData(data, data2) {
//   return new Promise((resolve, reject) => {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     if (netSpeed > 4) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }
// getData("hello world")
//   .then(() => {
//     console.log("data get 1 successfully ");
//     return getData("heelo wolrd");
//   })
//   .then(() => {
//     console.log("data 2 get successfuly");
//   })
//   .catch(() => {
//     console.log("sorry we couldn't get the data");
//   });

// function changeColor(color, deley) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color chnaged");
//     }, deley);
//   });
// }
// // promise channing
// changeColor("green", 1000)
//   .then(() => {
//     console.log("color 1 changed");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("color 2 changed");
//     return changeColor("red", 1000);
//   })
//   .then(() => {
//     console.log("color 3 changed");
//     return changeColor("yellow", 1000);
//   })
//   .then(() => {
//     console.log("color 4 changed");
//     return changeColor("orange", 1000);
//   })
//   .catch(() => {
//     console.log("color not chnaged");
//   });

// async await
// async function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, 1000);
// }
