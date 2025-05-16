// map : ye use hota hai kisi array ke each element par operation lagake usko tranform karke ek completely new array banata hai....par ye original array ko modify nahi karta...

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// isko single line mein bhi likh sakte hai...implict return use karke. 

const newNumbers = myNumbers.map( (num) => {
    return num+10;
} )

// this is called method chaining...in which we can use more than 1 method simultaneously. Point to be noted is : pehle jo mthod apply huwa hai...usse jo value milegi usi par next method apply hoga. 

const newNumbers2 = myNumbers
.map( (num) => num*10 )
.map( (num) => num+1)
.filter( (num) => num >= 40);


console.log(newNumbers);
console.log(newNumbers2);





















































































































