// for LOOOOOOOOP

for (let i = 0; i < 10; i++) {
    console.log(`For loop is going on here ${i} time!`);
}

//While Loop

let i = 0;
while (i < 10) {
    console.log(`While loop is going on here ${i}time!`);
    i++;
}

// loop in array

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//better way 

for (let todo of todos) {
    console.log(todo.id);
}

//forEach, map, filter

//forEach
todos.forEach(function (todo) {
    console.log(todo.text);
});

//MAP
const todoText = todos.map(function (todo) {
    return todo.isCompleted;
});
console.log(todoText);

//Filter
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todo)
// {
//     return todo.isCompleted == true;
// }).map(function(todo)
// {
//     return todo.text;
// });
// console.log(todoCompleted);


//conditionals

const zx = 10; //Assign 
if (zx === 10) {
    console.log('zx is 10');
} else {
    console.log('zx is not 10');
}

//Iternally Opraters like short hand is statements

const q = 10;
const color1 = q > 10 ? 'Red' : 'Blue';
console.log(color1);

//switch
const x1 = 20;
const color = x1 > 10 ? 'Red' : 'Blue';

switch (color) {
    case 'Red':
        console.log('Color is red');
        break;
    case 'Blue':
        console.log('color is not red or blue');
        break;
}