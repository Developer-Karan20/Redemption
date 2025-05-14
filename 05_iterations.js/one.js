// for loop 

for (let count = 0; count <= 10; count++) {
    const element = count;
    
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

//console.log(element); it will generate error because using the variable outside scope is not defined. 


for(let i = 0; i<= 10; i++) {
    console.log(`Outer loop value: ${i}`);

    for(let j = 0; j<=10; j++) {
        console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    }
} 

// loops in arrays. 

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for(let index = 0; index<myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue 

for(let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log("Detected 5");
        
        break; // this stops the code from getting executed further. 
    }

    console.log(`value of i is ${index}`);
}


for(let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log("We detected 5");

        continue; // lets the code to get executed futher. 
    }

    console.log(`the value of i is ${index}`);
}