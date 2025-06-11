const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); //Math jo module/object hai uske andar se PI jo ki uski ek property hai wo chahiye mujhe. 

console.log(descriptor); 
//We cannot overwrite or change the value of PI in js even if we want to because it is hard coded by the developers in c++ and yeah we can also define such properties in our object or our frameworks if we want to. 

//another way of creating Object.
const mynewObject = Object.create(null);
// console.log(mynewObject);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nahi bani");
    }
}


console.log(chai);

//chai jo object hai uske andar name naam ki property ko access karna chah rha hai. 
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//defining specific properties to an element of an object.
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: true, //false karunga to name property show hona band ho jayegi.
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//yha par property likhna compulsary hai khali object likhne se kam nahi chlega. jaise name likha to ab mai name ko modify kar sakta hu jaisa unchangable bana sakta hu just like Math.PI. 


for (let [key, value] of Object.entries(chai)) {

    //jab typeof value function nahi hogi tab ye code execute hoga..par typeof value function hai to wo wala key value pair skip ho jayega. basically code fatne se bachana hai. 
    if(typeof value !== "function") {
      console.log(`${key} : ${value}`);
    }
}

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
