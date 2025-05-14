const coding = ["js", "ruby", "java", "python", "cpp"];

// this is a callback function so it does not have any name, aur ye ek array ke andar chal rha hai to () ke andar automatically parameter leke aa jayega.

coding.forEach( function (item) {
    console.log(item);
} )

// we can also use arrow functions as well. 

coding.forEach( (item) => {
    console.log(item);
} )

// another very interesting variation is there.

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

// for each can also access index and complete array list as well. 

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )


// many times we have to tackle objects inside arrays...basically in ecommerce websites when we have to display the object in card format. 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
        
    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName); // displaying this is one of the most complex shit in js.
} )