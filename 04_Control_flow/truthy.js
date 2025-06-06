const userEmail = "k@karan.ai";

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Doesn't have user Email");
}

/* falsy values 
false, 0, -0, BigInt(0n), "", null, undefined, Nan

truthy values 
"0", "false", " ", [], {}, function(){} */

// to check an empty array 

const userName = [];


if (userName.length === 0) {
    console.log("Array is empty");
}


// to check for objects:

const emptyObj = {};

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
} else {
    console.log("object is not empty");
}

// Object.keys(emptyObj) this shit will change the object into an array...and after that we can check the length of that array using .length. 

/*
false == 0 gives true

false == "" gives true

0 == "" gives true 
*/


// Nullish Coalescing Operator (??) : it is used to counter null and undefined...what it basically does is skips null and undefined and executes if any other functions or value if provided next to it. 

let val1; 
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20; // it prints the value which is written at latest. 

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

const marks = 90;

marks >=90 ? console.log("grade : A"): console.log("grade B");