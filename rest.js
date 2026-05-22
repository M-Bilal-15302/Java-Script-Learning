//                              REST
// rest is opposite of spread
// rest allow a function to take indefinite numbers of arguments and then handle them in an array

function min(msg, ...args) {
  let res = args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
  console.log(res);
  console.log(`msg after result is ${msg}`);
}
min("rest handle many arg in single args arr", 1, 2, 3, -4);
