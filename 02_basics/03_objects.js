// Singleton : does not get created when an object is declared by literal method. Constructor se banega to humesh singleton hee banega. 

// Object.create -> this is constructor method. 

// object literals 

const Jsuser = {
    name: "Karan", 
    "full name": "Karan Goswami",
    age: 21,
    location: "Uttarakhand",
    email: "karangoswami@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email); // one method to print the email.

console.log(Jsuser["email"]); // another method to print the email....most of the time .method will be used but for some special cases we need pull out this one.  

console.log(Jsuser["full name"]); // this way of printing becomes really helpful when the key and value pair both are defined as strings. other than this there is no way we can access that value. 


// Now we get to the main part. The symbols which are just another data type...umm not really..they are quite complicated. I think i need to go through them once again. Prolly i'll it later. for the time being let's go through what sir said once again. 




const mySym = Symbol("key1");
console.log(mySym);

// things are getting relly messy so i need to create another object to review this once again...the task is to add the above symbol into the given object.  

const symObj = {
    name: "Karan",
   [mySym]: "key1", // this is the syntax if we want to add a symbol to any object. 
}

console.log(symObj);
console.log(symObj[mySym]);

// several other methods are also there....like the freez one....as the name suggests we can freez the current values of the object. For example I freez the first array. and then try to change the email address or any other shit. and the result is that the data does not change. 

// Object.freeze(Jsuser);
Jsuser.email = "karan@microsoft.com";
console.log(Jsuser);
 

// we can also create functions inside an object. For reference the funtions are given hight priority in an object whihc basically means they are treated like first class citizens of a country. 

Jsuser.greeting = function() {
    console.log("hello js user"); 
} 

// and here is a catche...we have used the freez method above this code...so eventually no changes will be made and this where most of the programmers make the mistake. DHYAN RAKHNA ISS CHEEZ KA. WE NEED TO COMMENT OUT THAT FREEZ METHOD FIRST. 

Jsuser.greeting();
// some misunderstanding happened in the video. let's create one more function inside the jsuser object. 

Jsuser.greeting_2 = function() {
    console.log(`Hello js user, ${this.name}`);
} // this yha par same object ko reference karne ke liye use kiya ja rha hai. 

console.log(Jsuser);

Jsuser.greeting_2();
