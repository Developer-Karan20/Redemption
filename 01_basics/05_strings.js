const name = "Karan";
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // New way of writing combined strings.

const gameName = new String('karan-hc-com')


// SOME STRING METHODS AND FUNCTION

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0, 12);
console.log(anotherString);

const newStringOne = "      karan   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://karan.com/karan%20goswami";

console.log(url);

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(url.includes("karan"));

console.log(url.split('/'));

console.log(gameName.split('-'));