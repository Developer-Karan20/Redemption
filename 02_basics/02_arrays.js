const marvel_heroes = ["Superman", "flash", "Spiderman"];
const dc_heroes = ["Batman", "flash", "Superman"];

//push returns an array inside the array. 
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

//concat returns a new array which is made of both the arrays combined, basically sends a merged array. But the condition is that we have to store that in a new variable. 
const AllHeroes = marvel_heroes.concat(dc_heroes);
console.log(AllHeroes);

//But a better way to do it other than using concat is by spread, which is comparatively easier to remember and does the same job. 

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

//Here is one another way to do it, by using flat() and it also does the job pretty well.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//Here are some ways to generate an array from strings or numbers on the spot. 

//for single element 

console.log(Array.isArray("Karan")); //to check whether array or not. 

console.log(Array.from("Karan"));


console.log(Array.from({name: "karan"})); // it cannot make array of key value pair. it either has to be a key or a value. This is interesting and is asked very frequently in the interviews. 


//for multiple elements 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


