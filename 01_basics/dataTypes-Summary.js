// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // They ain't gotta be the same.

const bigNumber = 34343453535345345n
console.log(typeof(bigNumber)); // example of bigInt




// Reference (Non Primitive) : these return dataType as object and functions return as (object Function)

// Array, Objects, Functions

// An Array
const heroes = ["Shaktiman", "naagraj", "doga"];


// An Object
let myObj = {
    name : "Karan",  // An Object
    age : 21,
}


// A Function
const myFunction = function() {
    console.log("hello world");  
}
myFunction();


console.log(typeof anotherId);

// JavaScript is a dynamically typed language, which means that variables can store different types of values during runtime. In contrast, statically typed languages, like Java and C++, require you to explicitly declare the type of a variable. 