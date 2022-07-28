const book = {
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

book.updateVersion();
console.log(book);

const calculator = {
  add(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
  multipy(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
};

console.log(calculator.add(5, 20));
