let a = 10;
const b = 20;
var c = 30;

// bas ye baat yaad rakhna ki var is the most fucked up thing in javascript when it comes to working on same project. kyuki agar galti se bhi global aur local scope mein variable name same huwa to code chudne ke chances bahut high hai. So this is the reason why var is used really less in programming in js and projects.


/* now thoda local aur global scope ke baare mein bhi discuss kar lete hai.. 

Local/block scope -> local scope matlab kisi ek function ya if else ke andar kisi varibale ko declare kiya to wo local scope hoga jaise ye : 

if(true) {
  const name = "Karan"
}


Global scope -> global scope matlab koi variable independently declare kiya gya hai..mtlb na kisi function ke andar na if else ke andar to woh global scope kehlayega. */

let globalScopeNO = 20;

if(true) {
    let globalScopeNO = 100;
}

console.log("INNER: ", globalScopeNO);


// Nested scope : isko aise samjhenge ki jaise chote bacche bado se icecream maang sakte hai ya cheen sakte hai. Par agar bade chote baccho se icecream mange to kharab lagta hai. Theek aise hee local/block scope ke andar global scope ke variable ko access kiya ja sakta hai par global scope mein local/block scope ke varibale ko access nahi kiya jaa sakta. 

function one() {
  const username = "Karan";
  // console.log(username);

  function two() {
    const website = "Youtube";
    console.log(username);
  }

  // console.log(website);


// two(); // wxpected output : Karan cuz console statement got executed. 

}

one(); // expected output : empty cuz execute to huwa but console statement nahi thi to display kuch bhi nahi huwa. 



//++++++++++++++++++++ interesting ++++++++++++++++

/* function declare karne ke kaafi methods hote hai unme se 2 hai Ek to Normal wala aur ek hota hai function ko variable ke andar store karna, jisko expression bhi kehte hai. */

// Here fact of the matter is: hum addone() yani function ko normal method ke andar initialization se pehle hee call kar sakte hai. 

console.log(addone(5));

function addone(num) {
  return num+1;
}

// addone();



// Par agar expression mein wo karne jaaye to error de dega. 

console.log(addtwo(4));

const addtwo = function(num) {
  return num+2;
}

// addtwo();