// if... else if /else if

// const temperature = 27;

// if (temperature < 15) {
//     console.log("cold -take a jacket.");
// } else if (temperature <= 25) {
//     console.log("Pleasant weather.");
// } else {
//     console.log("Hot-drink water.");
// }


let age = 16;
if (age >=18) {
    console.log("You are an adult");
}

let IsLoggedIn = true;
if (IsLoggedIn === true) {
    console.log("Welcome to the website");

}

let password = "12356";
if (password !== "123456") {
    console.log("Password is Incorrect");

}

// if...else
    if(IsLoggedIn === true) {
        console.log("Welcome to the website");

    } else {
        console.log("Please login");
    }

    if (age >=18) {
        console.log("You are an adult");

    } else {
        console.log("You are a minor");
    }

    // if...else if....else condition

    let marks = 55;
     if (marks >=80) {
        console.log("Grade A");

     } else if (marks >= 70) {
       console.log("Grade B");
     } else if (marks >= 60) {
        console.log("Grade C");
     } else if (marks >= 50) {
        console.log("Grade D");
     } else {
        console.log("You have failed");
     }

    //  combining the conditions

    let Authenticated = true;
    let isAdmin = false;
    if (Authenticated === true && isAdmin === true) {
        console.log("Welcome Admin");

    } else if (Authenticated === true && isAdmin === false) {
        console.log("Welcome User");

    } else {
        console.log("Please login");
    }



    let ages = 19;
    let hasTicket = false;
    let isVip = true;

    if (ages >= 18 && hasTicket) console.log("Welcome to the club");

    if (ages >= 18 || isVip) console.log("You are not allowed to be here");





    const user = null;
    let userName = null
    if (user && user.name) {
        console.log("user.name")
    }
    console.log(user?.name);


// Truthy and Falsy values

let input = "";

if (!input) {
    console.log("Please provide a valid input");
}

const quantity = 0;
if (quantity) { console.log("You have items now in your cart")}
if (quantity !== undefined) { console.log("You have items now in your cart")}

// Tenary operator
const score = 45;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result);

let userNames = "Aline";
let hours = "12hrs";
const message = hours === "12hrs" ? `Hello ${userNames} what are we going to do this afternoon` : `Hello ${userNames} what are we going to do today`;

console.log(message);


// we study 3 days a week

let studyDays = 3;
switch (studyDays) {
    case "Tuesday":
        console.log("we study on Tuesday");
        break;
        case "Wednesday":
            console.log("we do revision on Wednesday");
            break;
            case "Thursday":
            console.log("we have to study on Thursday");
            break;
            case "Friday":
            console.log("we don't study on Friday");
            break;
            case "Saturday":
            console.log("we have to study on Saturday");
            break;
            default:
            console.log("we don't study on this day");
}