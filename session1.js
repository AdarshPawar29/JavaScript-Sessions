console.log('Hello World!');
console.error('This Is an eroor');
console.warn("Rhis is warning");
//https://developer.mozilla.org/en-US/docs/Web/API/console

// Variables 
// var , let , const
// var is for globle

// let, const 
let age = 20;
age = 19;
console.log(age);

const score = 20;
//score = 31; !!
console.error("Cant re assign the const variable");

let temp;
temp = 31;
console.log(temp);
//const age1; cant do that!!

// String, NUmbers, Boolean, Null, undefined 

const name = 'Adarsh Pawar';
const age2 = 30;
const isCool = true;
const rating = 2.5;
const x = null;
const y = undefined;
let z;
null == undefined; //true
null === undefined; //false
this == window; // true
this === window; //true


console.log(typeof name);
console.log(typeof x);
console.log(typeof age2);

//Concatenation 
console.log('My name is ' + name + ' and Im ' + age);
console.log(`My name is ${name} and I am ${age}`);

//String Oprations

const s = 'Hello World!!';
console.log(s.length);
console.log(s.toLocaleUpperCase());

console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLocaleLowerCase());

console.log(s.split(''));

const tech = 'technology, computers, IT, code';
console.log(tech.split(', '));

let te = tech.split(', ');
console.log(te.length);
