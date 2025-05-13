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