const books = ["Start with why", "Coding is matter", "Coding"];
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
