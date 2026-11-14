// console.log(typeof 1);
// console.log(typeof "prak");
// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof Math);
// console.log(typeof console);
// console.log(typeof console.log);
// console.log(typeof "+");

// import readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";

// const rl = readline.createInterface({ input, output });

// // Using async/await to wait for the user's answer

// let day = await rl.question("Enter a number between 1 and 7: ");
// day = parseInt(day);

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("not a  day of the week");
//
// }
// rl.close(); // Remember to close the interface!

// firstName = "troy";
// console.log(firstName);
// console.log(typeof firstName);
// console.log(this);
// console.log(typeof this);
// console.log(globalThis);

//var const let

// console.log(var_hoisted);
// // console.log(let_hoisted);
// // console.log(const_hoisted);

// var var_hoisted = "this is hoisted variable";
// // let let_hoisted;
// const const_hoisted = "this is hoisted variable";

// try {
//   let a = undefinedVariable;
// } catch (e) {
//   console.log(e instanceof ReferenceError); // true
//   console.log(e.message); // "undefinedVariable is not defined"
//   console.log(e.name); // "ReferenceError"
//   console.log(e.stack); // Stack of the error
// }

// try {
//   console.log(a);
//   const a = 10;
//   // let a = undefinedVariable;
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// const time = "10pm";
// switch (time) {
//   case "6am":
//     console.log("good morning");
//     break;
//   case "12pm":
//     console.log("good afternoon");
//     break;
//   case "6pm":
//     console.log("good evening");
//     break;
//   case "10pm":
//     console.log("good night");
//     break;
//   default:
//     console.log("Invalid time");
// }
// time = new Date().toLocaleTimeString();
// console.log(`The time is ${time}`);

/*"use strict";
let hasdriversLicense = true;
let hasGoodVision = false;
const passeyeTest = true;
hasGoodVison = true;
if (hasdriversLicense && hasGoodVision) {
  console.log("You can drive!");
} else {
  console.log("You cannot drive.");
}
const interface = "21";*/

/*let h = document.querySelector(".hour");
let m = document.querySelector(".minute");
let s = document.querySelector(".second");

let startTime = Date.now();
function stopwatch() {
  let elapsedTime = Date.now() - startTime;

  elapsedTime = Date.now() - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  h.innerHTML = hours;
  m.innerHTML = minutes;
  s.innerHTML = seconds;

  // console.log(`${hours}:${minutes}:${seconds}`);
}

let timerID = setInterval(stopwatch, 1000);
const stop = document.querySelector(".stop");
stop.addEventListener("click", () => clearInterval(timerID));*/

/*let a = [];
a.push(1, 2, 3);
a.reverse();
console.log(a);
console.log([1, 2, 3].map((val) => val * 2));
console.log([1, 2, 3].map((val) => multiBy5(val)));
// console.log(a.map(multiBy5(a[i]), i));
console.log(["1", "2", "3"].map((val) => parseInt(val)));

console.log(a.map(multiBy5));
console.log(a);

function multiBy5(val) {
  return val * 5;
}*/

/*console.log(typeof 1);
console.log(typeof "jdnjnd");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof (1 / 0));*/

/**
// func express vs declaration

console.log(declaredFunc(2006));
// console.log(expressionFunc(2006));
console.log(arrowFunc(2006));

function declaredFunc(birthYear) {
  return 2050 - birthYear;
}
const expressionFunc = function (birthYear) {
  return 2050 - birthYear;
};

const arrowFunc = (birthYear) => 2050 - birthYear;*/

// for (let index = 1; index <= 10; index++) {
//   if (index === 5) continue;
//   console.log(index);
// }

// for (let index = 1; index <= 10; index++) {
//   if (index === 6) break;
//   console.log(index);

// const numbers = [3, 7, 12, 18, 21, 25, 30];

// // numbers.forEach((el) => {
// //   if(el >20) break;
// //   console.log(el);
// // })
// function print(array) {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > 20) break;
//     console.log(array[index]);
//   }
// }
// print(numbers);

/*const numbers1 = [2, 5, 8, 9, 12, 15, 18, 21, 24];
function printoddgreater15(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 15) break;

    if (array[index] % 2 === 0) continue;
    console.log(array[index]);
  }
}

printoddgreater15(numbers1);
*/

/*const correctPassword = "javascript";
const pass = ["javascript", "hello", "fine"];
let password = "";
let attempt = 0;

while (password !== correctPassword) {
  // Generate or assign a password attempt
  const maxattempt = 3;
  attempt++;
  if (attempt === maxattempt) {
    console.log("you exhausted maxmimum attempt try after 5 minutes");
    break;
  }
  password = pass[Math.random() * 3];
  // Print whether it is correct
}

console.log("Login successful!");
*/

// console.log(Math.trunc(Math.random() * 20) + 1);
// document.querySelector("body").style.backgroundColor = "green";
// // console.log(document.querySelector("html"));

// console.log(document.querySelector("body"));

//var func scoped let and const block scoped
// var global = 3;
// function test() {
//   var funcScope = 5;
//   if (global > 10) {
//     let blockScope = 8;
//     return global + blockScope;
//   }
//   console.log(global);
//   console.log(funcScope);
//   // console.log(blockScope);
//   return global + funcScope;
// }
// console.log(global);
// console.log(test());
// console.log(funcScope);
"use strict";
// const x = 5;
// if (x === 5) {
//   function blockScoped() {
//     return 25;
//   }
//   const arrFun = () => "arrow";
// }
// console.log(blockScoped());
// console.log(arrFun());
// let x = 10;
// function test() {
//   let x = 20;
//   console.log(x);
// }
// test();
// const a = 1;
// function first() {
//   const b = 2;
//   function second() {
//     const c = 3;
//     function third() {
//       const d = 4;
//       console.log(a, b, c, d);
//     }
//     third();
//   }
//   second();
// // }
// // first();

// function first() {
//   const x = 10;
//   second();
// }
// function second() {
//   console.log(typeof x);
// }
// first();

// function outer() {
//   let message = "Hello";
//   function inner() {
//     console.log(message);
//   }
//   return inner;
// }
// const fn = outer();
// fn();

// function first() {
//   const a = 10;
//   function second() {
//     const b = 20;
//     function third() {
//       console.log(a + b);
//     }
//     third();
//   }
//   second();
// }
// first();

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c = makeCounter();
c();
c();
console.log(c());
