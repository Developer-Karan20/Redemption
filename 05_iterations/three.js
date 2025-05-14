// for of loop 

// ["", "", ""];
// [{}, {}, {}]

/* for (const element of object) {
    
 }
*/


const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

// we can also use for of loop for strings. 

const greetings = "Hello World!";
for( const greet of greetings) {
    if(greet == " ") {
        console.log("space detected");
        continue;
    }
    console.log(`Each char is ${greet}`);
}


// Maps : are known to store unique values, ek value do baar nahi store krega. aur jis order mein input diya hai wahi order follow hota hai output mein bhi. Also map is not iterable. 

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("NP", "Nepal");

console.log(map);

// for of loop for map.

for( const [key, value] of map) {
    console.log(key, ":-", value);
}

// for of loop for objects does not work. Hence, we have got other options to access key value pairs in objects. discused in four.js

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

for(const [key, value] of myObject) {
    console.log([key, value]);
}


