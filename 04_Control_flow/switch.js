/* format to write switch statement

switch (key) {
    case value:
        
        break;

    default:
        break;
} */


// Switch statement kisi taale ki chabhi ki tarah hai...jo chabi match ho gayi wo statement execute ho jayega. 

const month = 3;

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break; //agar march ke baad break nahi hota to uske baad wala saara code bhi execute ho jaate. Except default. 
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}



// if the given argument is a string rather than a number or any other data type : 

const month2 = "feb";

switch (month2) {
    case "january":
        console.log("January");
        break;

    case "february":
        console.log("february");
        break;

    case "march":
        console.log("march");

    default:
        console.log("default statement has been reached");
        break;
}