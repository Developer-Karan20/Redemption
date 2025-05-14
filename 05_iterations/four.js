const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const myArr = ["batman", "spiderman", "karl"];
for(const key in myArr) {
    // console.log(key); //Output : 0,1,2 these are called keys in array. to counter this we gotta do...
    console.log(myArr[key]);
}