let score = "Karan"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => i; false => 0

let isLoggedIn = "Karan"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "karan" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);





// ****************************Operations********************************
let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " Karan"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// ALL THE CODE WRITTEN ABOVE IS WRONG FORMAT.

console.log( (3 + 4) * 5 % 3); // this is the correct way...use parenthesis in between of operations. 

// here are some common errors again that devs do
console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);

// study about this in mdn docs.

