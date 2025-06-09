//literal object means literally an object. js mein object mein sabse basic unit hai. 

//jaise yha par ye object hee hamara object literal hai. 

const user = {
    userName: "Karan",
    loginCount: 8,
    signedIn: true,
    //iske andar functions bhi diye jaate hai.
    getUserDetails: function() {
        console.log("got user details from database");
    }
}

console.log(user.userName);
console.log(user.getUserDetails()); //method hai to run karana padega khali reference nahi de sakte. 