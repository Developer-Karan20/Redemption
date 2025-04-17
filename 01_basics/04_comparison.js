// console.log("2" > 1);
// console.log("02" > 1); 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that equality check == and comparisons > < >= <= work differently. Comparisons convert null into a number, treating it as 0. That's why (3)null >= 0 is true and (1)null > 0 is false. 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//But undefined treats everything as same. 

// === : this is called strict check, it checks value as well as datatype. 
console.log("2" == 2);
console.log("2" === 2);