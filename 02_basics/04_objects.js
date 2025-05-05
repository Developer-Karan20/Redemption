// const tinderUser = new Object();
const tinderUser = {};
// both are same dono mein koi bhi internal difference nahi hai. Bas ye yaad rakhna hai ki first waala singleton object hai aur dusra waala non singleton object hai.

tinderUser.id = "123abc";
tinderUser.name = "Karan";
tinderUser.isLoggedIn = false;

// ye wahi print karega jaise ek normal hard typed object print karta hai.
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName : "Karan",
            lastName : "Goswami"
        }
    }
}

// we can penetrate as deep as we want. bas syntax sahi hone chahiye. 
// console.log(regularUser.fullName.userFullName.firstName);


/*objects ko merge karne ka ek interesting method hai jisme target aur source use hote hai. aur baaki array waal method bhi use kar sakte hai.  

const target = {a:1, b: 2};
const source = {b: 4, c: 5};

const returnTarget = Object.assign(target, source); 
console.log(target);
// Expected output: Object {a: i, b: 4, c: 5}
*/


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // {} ye target hai. 

// array wala method(spread operator most of the time yahi use hoga.)
const newObj = {...obj1, ...obj2};
// console.log(newObj);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    }, 
    {
        id: 2,
        email: "kg@gmail.com"
    },
    {
        id: 3,
        email: "kng@gmail.com"
    },
]

console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Objects return keys values and entries and other stuff in the form of arrays. and for entries it returns an array for each key value pair. 

console.log(tinderUser.hasOwnProperty("isLoggedIn")); 

// to check whether an object has a certain property or not. 



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Karan"
}

// console.log(course.courseInstructor); this is one of the methods we could use to print the value in an object. But baar baar likhne se accha ek baar define kar lete hai iss new method se. Isme we can modify the name according to our convinience aur value same hee ayegi. This process is called **Object Destructuring**. 

const {courseInstructor} = course;

const {courseInstructor: instructor} = course;

console.log(courseInstructor);
console.log(instructor);