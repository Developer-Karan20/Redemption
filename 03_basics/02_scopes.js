let a = 10;
const b = 20;
var c = 30;

// bas ye baat yaad rakhna ki var is the most fucked up thing in javascript when it comes to working on same project. kyuki agar galti se bhi global aur local scope mein variable name same huwa to code chudne ke chances bahut high hai. So this is the reason why var is used really less in programming in js and projects.


/* now thoda local aur global scope ke baare mein bhi discuss kar lete hai.. 

Local/block scope -> local scope matlab kisi ek function ya if else ke andar kisi varibale ko declare kiya to wo local scope hoga jaise. ye : 

if(true) {
  const name = "Karan"
}


Global scope -> global scope matlab koi variable independently declare kiya gya hai..mtlb na kisi function ke andar na if else ke andar to woh global scope kehlayega. */

let globalScopeNO = 20;

if(true) {
    let globalScopeNO = 100;
}

console.log("INNER: ", globalScopeNO);
