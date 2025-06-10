// we can make a function behave like an object....kyuki end of the day har ek cheez jaake milti hai object se. Object end of the world hai uske baad fir null ka reference milta hai....js har nahi manti uper jaati hee jati hai. bsdki. 

function multiplyBy5(num) {
   return num*5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}


//we can create our own functinality/methods in it cuz at the end of the day everything is object in js. 
createUser.prototype.increment = function(){
    this.score++; //this mtlb jis ne bhi call kiya hai uski value badha do. 
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25); // new keyword lagate hee sab assesmble ho jata hai. usne ek object liye fir uske andar ek prototype inject kiya....fir jo methods additonally defined hai unko bhi define kiya...fir dekha ki createUser ke basis pe banana hai to uske basis pe banta hai. 

const tea = createUser("tea", 250);

chai.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//next example in Prototype.js 