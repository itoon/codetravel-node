// // let and const

// const name = "Songklod";
// const age = "30";
// let classRoom = "CodeTreveler";
// // classRoom = classRoom + " " + "X DataRockie";
// classRoom = `${classRoom} X DataRockie`;

// //function
// function joinClassRoom(name, classRoom) {
//   return "function: " + name + " join " + classRoom;
// }

// // anonymous function
// const anonymousJoinClassRoom = function (name, classRoom) {
//   return "anonymous function: " + name + " join " + classRoom;
// };

// //arrow function
// const arrowJoinClassRoom = (name, classRoom) => {
//   // this
//   //console.log(this);
//   return "ansynimous function: " + name + " join " + classRoom;
// };

// console.log(joinClassRoom(name, classRoom));

// // play with ansynimous function
// console.log(ansynimousJoinClassRoom(name, classRoom));

// //play with arrow function
// console.log(arrowJoinClassRoom(name, classRoom));

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// const minus = (num1, num2) => {
//   return num1 - num2;
// };

// console.log(add(7, 10));
// console.log(minus(7, 10));

// book.updateVersion();
// console.log(book);

// const calculator = {
//   add(x, y) {
//     return x + y;
//   },
//   minus(x, y) {
//     return x - y;
//   },
//   multipy(x, y) {
//     return x * y;
//   },
//   divide(x, y) {
//     return x / y;
//   },
// };

// console.log(calculator.add(5, 20));

// function add(x, y) {
//   return x + y;
// }

// const add2 = function (x, y) {
//   return x + y;
// };

// const add3 = (x, y) => {
//   return x + y;
// };

// console.log(add(5, 9));
// console.log(add2(4, 8));
// console.log(add3(4, 3));

const book1 = {
  name: "Start With Why",
  version: 1,
  sku: "0241958229",
  Publication: "date 11 Oct 2011",
  price: 389.65,
  dimensions: "130 x 197 x 18mm | 183g",

  updateVersion() {
    this.version++;
  },
};

// const book = {
//   name: "Start With Why",
//   version: 1,
//   sku: "0241958229",
//   publication: new Date("2011-10-11"),
//   price: 389.65,
//   dimensions: "130 x 197 x 18mm | 183g",
// };

// console.log(book.name);
// console.log(book.version);
// console.log(book.sku);
// console.log(book.publication);
// console.log(book.updateVersion());
// console.log(book.version);

// const book = {
//   name: "Start With Why",
//   version: 1,
//   sku: "0241958229",
//   publication: new Date("2011-10-11"),
//   price: 389.65,
//   dimensions: "130 x 197 x 18mm | 183g",
// };
// const { name, sku, price } = book;
// console.log(name); //Start With Why
// console.log(sku); //0241958229
// console.log(price); //389.65

const languages = ["Javascript", "Node", "Python", "R", "Java", "Php"];
const [language1, language2] = languages;

console.log(language1); //Javascript
console.log(language2); //Node

//spread operator copy object and array
//[languages...]
// rest operator
/*
  const toArray = (...args) => {
    console.log(args)
  }
*/

const toArray = (...args) => {
  console.log(args);
  console.log(args[0]);
};

toArray(1, 2, 3, 4, 5);

const bookObjsArray = [
  {
    name: "Start With Why",
    version: 1,
    ISBN: "0241958229",
    publication: new Date("2011-10-11"),
    price: 389,
  },
  {
    name: "Building a Second Brain",
    version: 1,
    ISBN: "1800812213",
    publication: new Date("2022-06-14"),
    price: 969,
  },
  {
    name: "SPRINT",
    version: 2,
    ISBN: "9780593076118",
    publication: new Date("2016-06-21"),
    price: 710,
  },
];

console.log(bookObjsArray[1]);

const filterBooks = bookObjsArray.filter((item) => item.version == 1);
console.log(filterBooks);

const findBookIndex = bookObjsArray.findIndex(
  (item) => item.name == "Building a Second Brain"
);
console.log(findBookIndex);

// add new price
const newBooks = bookObjsArray.map((item) => {
  item.price = item.price + 50;
  return item;
});

const sum = bookObjsArray.reduce((acc, item) => {
  return acc + item.price;
}, 0); // 0 is init val

console.log(sum);

// console.log("Start");
// setTimeout(() => {
//   console.log("Timer 3 sec Done!!");
// }, 3000);

// setTimeout(() => {
//   console.log("Timer 0 sec Done!!");
// }, 0);

// console.log("Stop");

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Timer 2 sec Done!!");
//   }, 2000);
// };

// fetchData((text) => {
//   console.log(text);
// });
