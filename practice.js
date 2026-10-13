// level 1 

let name = "Benie";
let age = 18;
let isaBoy = false;
let phoneNumber = null;
let userName ;




console.log(typeof name);
console.log(typeof age);
console.log(typeof isaBoy);
console.log(typeof phoneNumber);
console.log(typeof userName);

// level 2

const input = "frontend-developer-kigali";

const output = input
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(output);

// level 3

const number = Math.floor(Math.random() * 100) + 1;

const isEven = number % 2 === 0;
const squareRoot = Math.sqrt(number).toFixed(2);

console.log("Random number:", number);
console.log("Is even:", isEven);
console.log("Square root:", squareRoot);

// level 4
console.log("10" + 2 * 3);
console.log(("10" + 2) * 3);
console.log(0 || "default");
console.log(0 ?? "default");
console.log(typeof NaN);
console.log("Kigali".slice(-3));

// the output
// 106
// 303
// default
// 0
// number
// ali

// level 5
const price = "2500";
let qty = 3;

let total = Number(price) * qty;

console.log(`Total: ${total} RWF`);

const discount = 0.1;
const discountedTotal = total * (1 - discount);

console.log(`Discount: ${discount * 100}%`);
console.log(`Final total: ${discountedTotal} RWF`);

