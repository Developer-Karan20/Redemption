
// QUTE OLDER WAY OF SETTING GETTER AND SETTER AS COMPARED TO THE MODERN ES6 SYNTAX USING FUNCTIONS.

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    });

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    });
}

const newUser = new User("user@gmail.com", "chai");
console.log(newUser.email);



