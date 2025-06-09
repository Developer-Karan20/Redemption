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


//CONSTRUCTOR FUNCTIONS

function User(username, logincount, isloggedin) {
    this.username = userName,
}
