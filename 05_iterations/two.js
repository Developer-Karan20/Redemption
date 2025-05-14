let index = 0;

while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2;
}

let myArray = ["flash", "batman", "Superman"];

let arr = 0;

// array length is 3 and arr will clock from 0 to 2 i order to satisfy the condition arr < myArray.length.

while(arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}


// do while loop 


let scores = 1;

do {
    console.log(`score is ${scores}`);
    scores++;
} while (scores <= 10);





// this case is an exception, this is like udhar to le liya par fir pta chla arey...paise to hai hee nahi. rule ke according ek baar print to ho jayega par fir nahi. ye tab hota hai jab initial iterator ki value condition mein diye gaye iterator se badi ho jaye. 
let score = 11; 

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);          