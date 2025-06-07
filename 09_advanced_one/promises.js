//Promise created 

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is completed");
        resolve(); //resolve executed hoga tab ye connect hoga .then() se.
    }, 1000);
});


//Promise consumption.
//.then() ka sidha relation hai resolve ke saath.
promiseOne.then(function(){
   console.log("Promise consumed");
});


//another way of doing it: not storing promise in a variable to sidha .then() laga sakte hai.
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");//ye pehle waale ke baad hee execute hoga. 
});


//another way of doing it: values ko pass karke aur access karna hai ye btaya gya hai. 
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({userName: "chai", email: "chai@example.com"})
    }, 1000);
});

//iske andar parameter koi bhi de sakte hai jaise abhi user diya hai par superman bhi de sakte hai..it does not really matter. 
promiseThree.then(function(user) {
   console.log(user);
});


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({userName: "karan", password: "123"});
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour.then( (user) => {
   console.log(user);
   return user.userName;
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
});
//finally to use hoga hee hoga, it is default. 



//THE ASYNC AWAIT APPROACH : thoda der wait karna padta hai kaam hone ke liye.
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({userName: "javascript", password: "123"});
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
   try {
    const response = await promiseFive; //jo bhi promiseFive se aaye...ab chahe wo resolve hoke aaye ya reject hoke aaye. mai uska wait kar rha hu. 
    console.log(response);
   } catch (error) {
    console.log(error); //gracefully handled error. 
   }
}
consumePromiseFive();


//using async await and fetch() method.
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json(); //we have used await here because it takes time to convert data into a json file.
        console.log(data);
    }catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();



//using .then() and .catch() 

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data); //response handle karne ke liye..thenable bolte hai iss process ko. data likhna jaroori nahi hai kuch bhi likh sakte hai. 
})
.catch((error) => console.log(error)) //can write in single line. 