// let myName = "Karan      ";
// let myChannel = "chai     ";

// console.log(myName.trueLength); //the goal is to construct a method named trueLength that returns the value of the original string and not the spaces.

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpideyPower: function() {
        console.log(`Spidey has the power of ${this.spiderman}`);
    }
}


//yha pe humne kiya hai khela....object jo ki hierarchy mein top par baithta hai....uske andar modification kar di aur karan naam ka ek method assign kar diya...to wo har ek ke andar inject ho jayega jaise object, string, array. par wahi agar mai kisi niche waale par ye modification karta jaise array ya string pe...to baaki sab mein koi changes nahi aate. 

Object.prototype.karan = function() {
    console.log("Karan is present in all objects");
}

heroPower.karan();
myHeroes.karan();

//jaise yha mai array mein modification karta hu.
Array.prototype.heyKaran = function() {
    console.log("Karan is here and he says hello");
}

myHeroes.heyKaran(); //array ko to method asssign huwa par niche object ko nahi huwa.

//heroPower.heyKaran(); will generate error. 


//INHERITENCE - Old syntax

const User = {
    name: "Karan",
    email: "Karan@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    fullTime: true,
    __proto__: TeachingSupport //TeachingSupport ki sari properties TASupport mein inherit ho gayi.
}

console.log(TASupport.isAvailable);

Teacher.__proto__ = User; //Teacher ki properties inherit ho gayi User mein. 

console.log(User.email);



//modern Syntax 
Object.setPrototypeOf(TeachingSupport, Teacher); //teaching support ne access karli teacher ki saari properties. 

let anotherUsername = "chaiAurCode     ";

String.prototype.trueLength = function() {
    console.log(`${this}`); //this mujhe access de rha hai chai aur code ka...kyuki anotherUsername ke andar usi kar reference hai. reference change karunga to results bhi changed dekhne ko milenge...line no. 79 

    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength(); //mtlb chai aur code.
"hitesh".trueLength();
"karan".trueLength();

// so this was about prototype and the oop of js ends here💖.

