// agar codition mein true likha hai to scope ke andar ka code exucute hoke hee rahega. wahi agar condition mein false likha hoga to scope ke andar ka code execute nahi hoga.

if (true) {
    console.log("this will print if the condition is true");
}

if(false) {
    console.log("this will not print if condition is false");
}

const temperature = 41;

// loophole is js..isko counter karne ke liye aaye line 22 waale operators.
if(temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if(score > 100) {
    let power = "fly";
    console.log(`User Power : ${power}`);
}

//it will generate error because we are refering to the variable(power) outside the block scope. 
console.log(`User power : ${power}`);


const balance = 1000;

// bohot hee kharab practice...kabhi nahi use karna chahiye aur companies mein to bilkul bhi nahi warna laat maarke ke nikla denge. iski jagah ternary operator ko use karna chahiye jo ki turthy.js mein explained hai. 


if(balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

// elif is used to check conditions other than if else. 








const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// ek bhi condition false hogi to scope ke andar ka code execute hee nahi hoga. 
if (userLoggedIn && debitCard  && 2==3) {
    console.log("Allowed to buy course");
}


// dono mein se ek bhi true huwa to scope ke andar ka code execute ho jayeaga. 
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}

