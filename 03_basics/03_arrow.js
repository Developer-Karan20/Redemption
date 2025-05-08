// this keyword is used to refer current context. current object ke andar ke cheezo ko access karne ke liye this keyword ko use kiya jaata hai. 

const user = {
    username: "Karan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);

        console.log(this); // gives output related to the context. context change to output change. 
    }


}

user.welcomeMessage();

user.username = "Sam"; // context change kar diya gaya mere dwara

user.welcomeMessage();

console.log(this); // gives empty object cuz global scope mein kuch available hee nahi hai jise display kiya ja sake. But browser mein windows is the prominent element inside an object. 


// but this keyword if used inside function gives same type shit as this used inside an object in a browser. 

function chai() {
    let userName = "Karan";
    console.log(this.userName); // function ke andar mai this ko use nahi kar paa rha hu..context ke liye. 
}

chai();

// Now let's talk about Arrow functions : Boom same as normal function, we can't use this inside the arrow function as well. 

const Chai = () => {
    let useRname = "Karan";
    console.log(this);
}

Chai();



const addnum = (num1, num2) => {
    return num1+num2;
}


// Here comes the concept of explicit and implicit return. Explicit matlb jabardasti return lagana pad rha hai to get the output. Implicit mein return keyword use karne ki zaroorat nahi hoti. Shart ye hai ki hume single line statements likhne padenge. For example : 

const addthree = (num1, num2, num3) => num1+num2+num3;


const addfour = (num1, num2, num3, num4) => (num1+ num2+ num3+ num4); // Here we can use parenthesis but don't use curly braces cuz after that we will have to use return statement. 


const addfive = () => ({username: "karan"}); // we always have to use curly braces in order to store an object inside an arrow function. 

console.log(addnum(3, 5));
console.log(addthree(3, 3, 3));
console.log(addfour(3, 3, 3, 3));

console.log(addfive());