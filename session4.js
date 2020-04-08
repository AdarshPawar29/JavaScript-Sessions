//THIS 
function bike() {
    console.log(this.name);
}

var name = "Ninja";
var obj1 = {
    name: "Pulsar",
    bike: bike
};
var obj2 = {
    name: "Gixxer",
    bike: bike
};

bike(); // "Ninja"
obj1.bike(); // "Pulsar"
obj2.bike(); // "Gixxer"

function bike() {
    var name = "Ninja";
    this.name = "NINJA";
    this.maker = "Kawasaki";
    console.log(this.name + " " + maker); // undefined Bajaj
}

var name = "Pulsar";
var maker = "Bajaj";

obj = new bike();
console.log(obj.maker); // "Kawasaki"

//Functions
//OOP in ES5
//Construct0r Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
    // this.getBirthYear = function()
    // {
    //     return this.dob.getFullYear();
    // }
}

//OOPS in ES6
//syntex suger //orgnaized  
//Class
class Persons {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person11 = new Persons('Adarsh', 'Pawar', '06-08-1996');
const person22 = new Persons('Wanda', 'Kaur', '02-01-1994');

console.log(person22);
console.log(person22.dob.getDate);
console.log(person11.getBirthYear());
console.log(person22.getFullName());
