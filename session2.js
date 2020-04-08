// Array - variable that hold multipale values 

const number = new Array(1, 2, 3, 4, 5, 6);
console.log(number);

const fruits = ['Apple', 'Orange', 30, true, 3.7];
fruits[4] = 'End';
fruits.push('Hello');
fruits.unshift('Banana'); //add element in the 1st position
fruits.pop();
console.log(fruits);
console.log(fruits[1]);

console.log(Array.isArray(fruits)); // to check whether its array or not
console.log(fruits.indexOf('Apple')); //find the possition of the elements


//Object litrals

const person = {
    firstName: 'Adarsh',
    lastName: 'Pawar',
    age: 30,
    hobbies: ['Music', 'Movies', 'Sport'],
    adrdess: {
        street: '211A Bakers street',
        city: 'Boston',
        state: 'MA'
    }
}
person.email = 'adarsh.pawar@bcone.com';
console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);



//const {firstName, lastName} = person;
//console.log(firstName);

const {
    firstName,
    lastName,
    adrdess: {
        city
    }
} = person;

console.log(city)


// Array todos 

const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//About JSON
const todosJSON = JSON.stringify(todos); // convert the object litraters into JSON format
console.log(todosJSON);



//funtions

function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(2, 3));

//ES6 Function 
const addNums = (num1, num2) => {
    return num1 + num2;
}
console.log(addNums(2, 3));

//can be writern like that we dont need {} 
const multiNums = (num1, num2) => num1 * num2;
console.log(multiNums(2, 3));

let obj = {
    myVar: 'foo',
    myFunc: function () {
        console.log(window.myVar);
    }
}
obj.myFunc(); //foo
console.log(obj.myVar); //foo


//Prototypes 
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

// Intantiate object 
const person1 = new Person('Adarsh', 'Pawar', '06-08-1996');
const person2 = new Person('Wanda', 'Kaur', '02-01-1994');

console.log(person2);
console.log(person2.dob.getDate);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
