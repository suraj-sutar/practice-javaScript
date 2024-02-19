//higher order function
//higher order function are the fucntion which accept a function in a parameter or
//  return a function or both

//when we are creating code like closures then use this concept

//forEach is a higher order function which always take a another function inside it.

//1. accept a function in a parameter
// function abc(val) {}
// abc(function () {});

//2. return a function
// function abc() {
//   return function () {};
// }

// Example of heigher order function:
// let array = [9, 8, 75, 43, 1, 3, 1];
// array.forEach((element) => {
//   console.log(element);
// });

//-----------------------------------------------------------------------------------------

//constructor function: A function which whenever invoked with" New keyword", return an object,
//  if we use "this" keyword inside that function ,it resturn an ojbect with all of the
// properties and methods mentioned inside function with this keyword such function is called constructor function

// ex:
function abcd() {
  this.name = "Suraj"; //constructor function
}
var person1 = new abcd(); //this is a obeject of the function

// why use constructor function: when we use number of different property
// in different places or number of time then we use focntion constructor

// function saanchOfBiscuit() {
//   this.width = 12;
//   this.height = 22;
//   this.color = "brown";
//   this.taste = "sugary";
// }
// let biscuit1 = new saanchOfBiscuit();
// let biscuit2 = new saanchOfBiscuit();
// let biscuit3 = new saanchOfBiscuit();

//----------------------------------------------------------------------------

//first class function: first class function is also called as function expression
//the function in that language are trated as a normal value or variable you can save them
//or pass them as a arrgument to another function.

// Ex:
// var normalFunc = function () {
//   console.log(`this is normal function`);
// };

//---------------------------------------------------------------------------------

//new keyword: the new keyword used to create an instance of an objeect of constructure function
//new keyword create a new empty object

//-----------------------------------------------------------------------------------
//iife(Immediately Invoke function expression):it is sa way to crate a function and immidialtle
//execute it without calling that function

//this is a basic syntax of iife
// (function(){

// })()

//what is the use of immediately Invoked Function Expression: is used to create a function private when we are
//add some value inside that function we cannot access ouside that function because that variable
//is private .
//then how we cen access that value: there are two method available in iife
//1. getter():using getter method you can access privte value inside the function
//2. setter(): using setter you can set some value to that private variable
//example:
// var ans = function () {
//   let privateVal = 12;

//   return {
//     getter: function () {
//       console.log(privateVal);
//     },
//     setter: (val) => {
//       privateVal = val;
//     },
//   };
// };

//----------------------------------------------------------------------
//prototype: ptototype is collection of built in healper function or healper method
//that is available for used.

//for example: we create an array and we want to know length of it ,then what do we do ,
//we use length property on array, did we created .length on that arrat no.

//--------------------------------------------------------------------------------------
//Inheritance: inheritance is basically passing parent features or properties to their
// childrens to do the same thing in javascript with the help of prototype
//   is called prototypal inheritance
//prototypal inheritance

//this call applay bind

//this:
// in global Scope value of "this" keyword is : window
// console.log(this);

//in function scope value of "this" keyword is : window
// function abcd() {
//   console.log(this);
// }
// abcd();

// in method scope the value of this keyword is : object
//then what is method : a function that is comes in object body then is called as method
// let obj = {
//   abcd: function () {
//     console.log(this);
//   },
// };
// obj.abcd();

//in event listner this keyword returns a before the addEventListner Element or property

// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   this.style.color = "red";
//   //you can also write a code like this
//   btn.style.color = "green";
// });

// call apply bind: for example we have one function and also i have a object when we are call this
//function then this keyword is not point out to window i want to they point out to that obejct then we are
//  use call or apply mwthod

//for example of call(): in call method you can number of argument
// function abc() {
//   console.log(this.age);
// }
// let obj = {
//   age: 12,
// };

// abc.call(obj);

//another example:
function num(val1, vla2, val3) {
  console.log(this, val1, vla2, val3);
}
let obj = {
  age: 12,
};

num.call(obj, 1, 2, 3);

//apply() method: in apply method you can pass only two argument that is first one is obejct
//and second one is array
function example(val1, vla2, val3) {
  console.log(this, val1, vla2, val3);
}
let obj1 = {
  name: "Suraj",
  age: 23,
};

example.apply(obj1, [99, 22, 33]);
// pure and impre function
//closures
