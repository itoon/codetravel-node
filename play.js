const person = {
  name: "Songklod",
  age: 30,

  // object this
  greet() {
    return `Hello: ${this.name}`;
  },

  // global this
  greet2: () => {
    return `Hello: ${this.name}`;
  },
};

// console.log(person.greet());
// console.log(person.greet2());

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
