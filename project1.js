const name = "Grace";
const monthlyIncome = 350000;
const rent = 120000;
const food = 90000;
const transport = 30000;
const internet = 15000;

// totalExpenses

let totalExpenses = rent + food + transport + internet;

// Savings
let savings = monthlyIncome - totalExpenses;

// saving rate
let savingRate = (savings / monthlyIncome) * 100;

let savingGoal = savingRate >=20


console.log(totalExpenses);
// 1 answer

console.log(`${name} has a monthly income of ${monthlyIncome} and she spends ${totalExpenses} RWF`)

// 2 answer
console.log(`${name} after spending ${totalExpenses} Rwf she is left with a saving of ${savings} rwf`)

// 3 answer
console.log(`${name} has a saving rate of ${savingRate.toFixed}`)
