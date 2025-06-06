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


 