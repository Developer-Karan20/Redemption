// const score = 400;
// console.log(score);

const balance = new Number(100); //specifically defined Number
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); //converts the above number into india style counting. \


// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math); // it is an object itself
console.log(Math.abs(-4)); // - ko + mein change kar dega. does not work vice versa.
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //Uper hee round off karega always. 
console.log(Math.floor(4.9)); //Niche hee round off karega always.
console.log(Math.min(4, 3, 6, 8)); //Finds lowest value in the array.
console.log(Math.max(3, 5, 5, 8, 8, 10, 77)); //Finds highest value in the array. 


console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1); // to find a single digit value.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);
