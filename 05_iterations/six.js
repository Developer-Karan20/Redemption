const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( (item) => {
    console.log(item);
} )

// we can also store the forEach loop and call stack in a variable like this : 

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
} )

console.log(values);

// we get to know that forEach does not return any value. 