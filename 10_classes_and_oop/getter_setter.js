//By using getter and setter we can actually control what other people see and modify. Like hum ek class banate hai to uske andar jo bhi properties hai unko set se modify karke get se ek filtered version jo ki humne hee banaya hai wo user ko dikha sakte hai. original value to rhegi par modified value bahar waalo ko dikhegi. 


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value.toUpperCase();
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(superman) {
        this._email = superman.toUpperCase();
    } 
}



//MORE SECURE WAY.
const karan = new User("karan@k.ai", "abc@kgf");
console.log(karan.password);
console.log(karan.email);

class employee {
    #name;
    #employeeid;
    #age;

    constructor(name, employeeid, age) {
        this.name = name;
        this.employeeid = employeeid;
        this.age = age;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value.toUpperCase();
    } 

    get employeeid() {
        return this.#employeeid;
    }

    set employeeid(value2) {
        this.#employeeid = value2.toUpperCase();
    } 

    get age() {
        return this.#age;
    }

    set age(value3) {
        this.#age = value3.toString();
    } 
}

const newEmployee = new employee("karan_goswami", "k@google.ai", 21);
console.log(newEmployee.name);
console.log(newEmployee.employeeid);
console.log(typeof newEmployee.age);
