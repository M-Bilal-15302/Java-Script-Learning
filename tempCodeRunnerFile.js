val(() => {
  console.log("hello after 3 second each");
}, 3000);
clearInterval(ID);
console.log("interval cleare