const book = {
  name: "Start With Why",
  version: 1,
  ISBN: "0241958229",
  publication: new Date("2011-10-11"),
  price: 389,
};

const copyBook = { ...book };
copyBook.name = "ABC";
console.log(copyBook);
console.log(book);
