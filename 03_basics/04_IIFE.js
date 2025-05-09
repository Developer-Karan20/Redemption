// Immediatly Invoked Function Expression : these are used to immediatly invoke a function. But the main definition is global scope mein kayi baar pollution like variables se aur baaki cheezo ko hatane ke liye IIFE ko use kiya jaata hai. 

// typical syntax of arrow function. 

//IIFE for normal function. this is a named IIFE.
(function message() {
    console.log("Databse is Connected");
}) ();



/* ; is explicitly used to end the working of function. otherwise it will generate error after the iife is executed.*/



//IIFE for arrow function. this is an unamed IIFE.
( () => {
    console.log("Databse is Connected");
} ) (); //fuckin important. isko lagaye bina agla iife execute hee nahi hoga. 

// and if we want to pass an parameter and argument.

( (name) => {
    console.log(`Database is connected, ${name}`);
}) ("Karan")