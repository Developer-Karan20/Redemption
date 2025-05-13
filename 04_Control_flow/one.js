// agar codition mein true likha hai to scope ke andar ka code exucute hoke hee rahega. wahi agar condition mein false likha hoga to scope ke andar ka code execute nahi hoga.

if (true) {
    console.log("this will print if the condition is true");
}

if(false) {
    console.log("this will not print if condition is false");
}


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

