function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername(username); //username nahi store hoga kyuki call stack mein execute hone ke baad variable hold nahi hoga...execute huwa aur sidha gayab. par function call to hoga. 

    SetUsername.call(username); //yha bhi same problem hai...variable hold nahi hoga. par function call to hoga. .call is used to explicitly call a function.

    SetUsername.call(this, username); //ab yha reference hold karke rakhega aur properly work karega....kyuki uper wala this kisi kaam ka nahi hai...to ye apna this use karke reference hold karega. mtlb aisa hai ki uper wale ne isko apna sab kuch de diya aur wo khud duniya se chla gaya. yha funcion call to hoga hee hoga sath mein reference bhi hold karega aur properly execute hoga. 
    // 
    // Bhale hee call humne execution context ke andar kiya hai par still ye problem aati hai. .call is used to explicitly call a function.

    this.email = email;
    this.password = password;
}

const chai = new createUser("Karan", "karan@google.com", "123");
console.log(chai);