console.log("Start");

setTimeout(() => {
  console.log("Timer 3 sec Done!!");
}, 3000);

setTimeout(() => {
  console.log("Timer 0 sec Done!!");
}, 0);

console.log("Stop");

const fetchData = (callback) => {
  setTimeout(() => {
    callback("Timer 2 sec Done!!");
  }, 2000);
};

fetchData((text) => {
  console.log(text);
});
