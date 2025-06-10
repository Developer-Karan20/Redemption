//literal object means literally an object. js mein object mein sabse basic unit hai. 

//jaise yha par ye object hee hamara object literal hai. 

const user = {
    userName: "Karan",
    loginCount: 8,
    signedIn: true,
    //iske andar functions bhi diye jaate hai.
    getUserDetails: function() {
        // console.log("got user details from database");
        console.log(`Username: ${this.userName}`); //this mtlb mai apne saman ki baat kar rha hu. 
        console.log(this); // will print current context....that literal object. 
    }

}

console.log(user.userName);
console.log(user.getUserDetails()); //method hai to run karana padega khali reference nahi de sakte. 

console.log(this); //node environment mein empty object milta hai...par browser mein window object milta hai jisme bhar bhar ke methods hote hai aur baaki cheeze bhi hoti hai. 


//CONSTRUCTOR FUNCTIONS - naya context banane ke kaam aata hai. har baar ek naya instance deta hai. 

function User(username, loginCount, isLoggedIn) {
    //LHS wala variable hai aur RHS wala vo value hai jo hum LHS ko parse karke de rhe hai. wo jo blank object tha na..uske andar this ki wajah se values store hoti rehti hai.
    this.username = username;
    this.logginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }

    return this //ye karte hee wo jo object tha wo pass on ho gaya...ab agar koi developer chahe to uske andar ye sab details access kar sakta hai. ye use nahi bhi karenge tab bhi implicitly defined hota hai...by default return to hoga hee. 
}


const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode",11, false); //values got overwritten. that is why we use new keyword everytime we create a new user or promise. jaise hee new keyword use karenge to empty object create hota hai jisko instance bola jaata hai: ye rahe steps.

/* step 1: new keyword creates an empty object. 

step 2: ek constructor function call hota hai new keyword ke kaaran ye hmare saare arguments ko pack karta hai aur hume de deta hai. 

step 3: this keyword use karte hee jo bhi saare arguments hai wo saare arguments empty object ke andar inject ho jaate hai. 

step 4: hume function ke andar sab values mil jaati hai. */

console.log(userOne.constructor);
console.log(userTwo);

//CONSTRUCTOR is nothing but reference hoti hai khud hee ke baare mein...jaise yha par user ke baare mein. 


//JAVASCRIPT has a prototypal behaviour....js haar nahi manti hai jab tak aap jo cheez dhund rhe ho wo use mil na jaaye. wo parents ko access karti hai, grandparents ko access karti hai aur uper jaati rehti hai jab tak usko null value na mil jaye. 

//PROTOTYPE is the one which gives the access of new keyword, classes isi se mili hai. this isi ke through kaam kar rha hai...js mein prototypal inheritance ya inheritance isi ke through aa rha hai. 

// at the end of the day we can say that js ke andar har ek cheez ek object hai....aur object ke pass jo properties avaiable hai wo array ke andar bhi available hai aur string ke andar bhi available hai. usable hai nahi hai wo alag baat hai.






