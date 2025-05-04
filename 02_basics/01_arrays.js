// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // the first array. 

// Aray Methods

myArr.push(6); // push adds element in the array. 
myArr.push(7);
myArr.pop(); // removes last element from the array. 



myArr.unshift(9); // places the entered element at the beginning of the array.

myArr.shift(); // removes the enetered element.

const newArr = myArr.join(); // changes the datatype of array to string. 
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);

console.log(myArr);

// it is common to state that the splice includes the last index and works accrodingly unlike the slice. But that's not important, the thing which is important is that it manipulates the original array. 
