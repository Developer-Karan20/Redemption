//generate a ramdom color

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// console.log(randomColor());

let intervalId; //declaring globally to access locally. 

const startChangingColor = function() {
    
    //for safety check.
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};


const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null; //flushing out the value.
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
