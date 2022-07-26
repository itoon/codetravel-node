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

console.log(person.greet());
console.log(person.greet2());
