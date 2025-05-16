const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( (item) => {
    console.log(item);
} )

// we can also store the forEach loop and call stack in a variable like this : 

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
} )

console.log(values);// we get to know that forEach does not return any value. 



// filter : filter ke andar ek callback function hoga jiske andar each value check hogi...uske baad hume deni padegi ek condition...wo condition check hogi fir uske according values ko filter kar diya jayega.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ek cheez jo yaad rakhni hai..arrow function mein wo hai explicit aur implicit return (reference provided in arrow.js). 
const newNums = myNums.filter( (num) => num > 4 );
console.log(newNums);


// if we don't want to use filter we can also do it using forEach loop. 

const newNums_2 = [];

myNums.forEach( (num) => {
    if(num > 4) {
        newNums_2.push(num);
    }
} )
console.log(newNums_2);

// Here is a great example on how to use filter for real life problems. 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBooks = books.filter( (bk) => {
    return (bk.genre === "Fiction" && bk.edition >= 2000);
} )

userBooks = books.filter( (bk) => bk.genre === "History" ); // userBooks ko overwrite kar diya gaya..to yahi values print hongi. 

console.log(userBooks);