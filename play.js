const books = [
  "Start with why",
  "Builing a Secound Brain",
  "Digital Transformation in action",
  "R for DataScience",
  "SPRINT",
  "Algorithms",
];
for (const book of books) {
  console.log(book);
}
console.log("========");

for (let i = 0; i < books.length; i++) {
  console.log(`${i}: ${books[i]}`);
}
console.log("========");

books.forEach((book, index) => {
  console.log(`${index}: ${book}`);
});

console.log(books[0]);
