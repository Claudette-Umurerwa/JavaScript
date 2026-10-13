// data types

// 1 String
// 2 number



// let
let name  ="John";
name = "Doe";

// const 
const username = "Hassan";

// var

var names ="Ali";
var names ="Ahmed";
var names ="Hassan";


console.log(names);

// global scope

function globalScope() {
    console.log(name)

}

globalScope();

function localScope() {
    let name ="Ali";
    console.log(name);
}
localScope();
 

// Block scope

if(true) {
    let blocklet = "I am trapped here";
    var leakedVar = "I escaped the block!";
    console.log(blocklet);

}
console.log(leakedVar);

// tdz
// console.log(test)
let test ="I am in the tdz";
console.log(test)



// camel case
{
    const userName = "Hassan";            
}


const quote = "She said \"Muraho\"";
console.log(quote)


const path = "c:\\coding\\05";
console.log(path)

const twoLines = "First\nSecond";
console.log(twoLines);




