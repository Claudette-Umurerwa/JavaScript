
// 1500000 -> 1,500,000

function formatRWF(amount) {
    let formattedAmount = amount.toLocaleString('en-RW')
    return formattedAmount
}

console.log(formatRWF(1500000));

function withVat(amount, rate = 0.18) {
    let vat = amount * rate;
    let totalVat = amount + vat
    return totalVat.toLocaleString('en-RW')
    // return amount + (amount * rate);
}

console.log(withVat(1000));


function capitalize(word) {
    let upperCase = word.charAt(0).toUpperCase() + word.slice(1);
    return upperCase;
    // return word.toUpperCase

}

console.log(capitalize("rWANDA"));

function randomBetween(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
console.log(randomBetween(1, 5));


function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-0.-]+\.[a-zA-Z]{2, 6}$/;
    return emailRegex.test(email);
    
}

console.log(isValidEmail("5.Derrick@igirerwanda.org"));


function sum(...numbers) {
    let total 0;
    for (const add of numbers) {
        total += add;
    }
    return total;

    // for (let i = 0; i < numbers.length; i++) {
    //     total += numbers[i];
    // }
    //  return total;
    
}
 console.log(sum(1, 2, 3, 4, 5));

 function createCounter(start = 0) {
    let count = start;
    return function() {
        count++;
        return count;
    }
 }

 let counter = createCounter();

 console.log(counter());
 console.log(counter());
 console.log(counter());