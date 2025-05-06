function sayMyName() {
   console.log("K");
   console.log("A");
   console.log("R");
   console.log("A");
   console.log("N");
}

//agar mai yha par bass **sayMyName** likhu to wo hoga bss funtion ka reference lekin jab mai likhta hu **sayMyName()** ye hota hai execution karwana. 
sayMyName();


// functions mein jab declare kar rahe hote hai to uske andar jo likhte hai use kehte hai parametres. aur call karte time jo value enter kar rahe hote hai usko bolte hai arguments. 

                    //parametres
// function addTwoNum(number1, number2) {
//     console.log(number1 + number2);
    
// }
        //Arguments.    
// addTwoNum(2, 99);

// const result = addTwoNum(3,8);
// console.log("Result: ", result);


// to actually get output from the function, hume uske andar return statement pass karni hogi varna wo undefined print karega. 

function addTwoNum(number1, number2) {
    
    // let result = number1 + number2;
    // console.log("Karan");
    // return result;

    // we can also write directly the return statement without declaring a new variable..like: 
    return number1 + number2;
    
}

const result = addTwoNum(3, 5);
console.log("Result: ", result);

// javascript mein by default ye property hoti hai ki return statement ke baad koi bhi code execute nahi hota hai. Hence, hume sara code return statement ke uper hee likhna hoga jisko execute karwana hai. 


// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Karan")); 

// in case agar argument hee pass nahi huwi to uss case meinerror message dikhana padega. 

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); 

// we can also write the above code in other way which is generally preferred in the industry. Like this way : 

function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); 


// if we don't want ki hum aise kisi case se encounter kare...to hum by default bhi koi value pass kar sakte hai...aur wo baad mein overwrite kar di jayegi. 

function loginUserMessage(username = "Pal") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); 

// abhi ye latest hai to iss wajah se all three functions mein same value display ho rhi hai. but as soon as we give username a value...this is pal will be overwritten. 🤘🤘

//+++++++++++++++++++++++++++++++++++++++++++++++++

// ab functions ko use karke OBJECTS and ARRAYS ko bhi access kiya ja sakta hai. 

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500));
// this returns all the value inside an array and we can later perform operations inside array to calculate the total. Same goes for OBJECTS as well. 

const user = {
    userName: "Karan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


