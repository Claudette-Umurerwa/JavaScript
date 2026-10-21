// this means its an Object{}

const student = {
  name: "Grace",
  age: 22,
  track: "Frontend",
  skills: ["HTML", "CSS"],
  address: { city: "Kigali", district: "Gasabo" },
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

// console.log(student.name); // this is a dot notation method

// console.log(student["track"]); // this is a bracket notation method

// console.log(student.address.city); // this is a dot notation with a nested object

// console.log(student.skills[1]); // this is a dot notation with an array index

// console.log(student.phone);

// updating, deleting and adding new properties to an object

// 1. add

student.email = "derrick@igirerwanda.org";
// console.log(student.email);

// updating 
// student.age = 23;
// student.skills.push("JavaScript");
// console.log(student.skills);

// deleting
// delete student.greet
// console.log(student);

// looping over an object 

const prices = { shoes: 45000, bag: 30000, cap: 8000 };

// console.log(object.entries(prices));

for (const [key, value] of object.entries(prices)){
  // console.log(`This is ${key} costs ${value} RWF`);
}

const total = object.values(prices).reduce((acc, curr) => acc + curr);

// console.log(`The total cost of all items is ${total} RWF`);


// destructuring an object

const user = {
  name: "Derrick",
  age: 25,
  track: "Frontend",
  skills: ["HTML", "CSS", "JavaScript"],
  address: { city: "Kigali", district: "Gasabo" },
  greet() {
    return `Hi, I'm ${this.name}`;
  },
  login() {
    return `${this.name} is logged in`;

  }
};

const {name, age, address: {city, district}, skills, greet, login} = user;

console.log(name);

