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

const findBook = bookObjsArray.find(
  (item) => item.name == "Building a Second Brain"
);
console.log(findBook);

const filterBooks = bookObjsArray.filter((item) => item.version == 1);
console.log(filterBooks);

// add new price
const newBooks = bookObjsArray.map((item) => {
  item.price = item.price + 50;
  item.val = item.price * 0.7;
  return item;
});

console.log(newBooks);

const sum = bookObjsArray.reduce((acc, item) => {
  return acc + item.price;
}, 0); // 0 is init val

console.log(sum);
