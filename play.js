const axios = require("axios");

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

const fetchDataPromise = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("Hello");
    }, 1500);
  });
};

fetchData((text) => {
  console.log(text);
});

fetchDataPromise().then((text) => {
  console.log("fetchDataPromise");
  console.log(text);
});

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  console.log(res.data);
  console.log("Stop2");
  // do something after get data
});

fetchData2();
async function fetchData2() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res.data);
}
