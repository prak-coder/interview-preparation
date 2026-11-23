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
// "use strict";
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

// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const c = makeCounter();
// c();
// c();
// console.log(c());

// const troy = {
//   firstname: "troy",
//   birthyear: 1995,
//   calcAge: function () {
//     console.log(`my age is ${2050 - this.birthyear}`);
//   },
// };
// troy.calcAge();
// function testThis() {
//   console.log(this);
// }
// testThis();
// document.querySelector(".stop").addEventListener("click", function () {
//   console.log(this);
// });
// const user = {
//   name: "Asha",
//   show() {
//     return this.name;
//   },
// };
// const fn = user.show;
// console.log(fn());
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// let a = 5,
//   b = 6;
// const obj = { a: "red", b: "blue" };
// ({ a, b } = obj);
// console.log(a, b);

// console.log(c);
// const c;
// console.log(c);

// console.log(l);
// let l;
// console.log(l);
// // l();
// let text = "hello";
// // console.log(text.push("world"));
// const a=[]
//  = text.split().push("world");
// console.log(a[1]);
// console.log(text);

// const a = [1, 2, 3, 4];
// const s = new Set(["hammer", "screwdriver"]);
// // const m = new Map("berlin", "york");
// const text = "javascript";
// console.log(...a);
// console.log(...s);
// // console.log(...m);
// // console.log(...text);
// const user = {
//   name: "Asha",
//   show() {
//     return this.name;
//   },
// };
// const newUser = { ...user, job: "student" };
// console.log(newUser);
// console.log(3 || "hi");
// console.log(null || "hi");

// console.log(3 && "hi");
// console.log(null && "hi");
// const guests = { numguest: 0 };
// console.log((noGuest = guests.numguest || 10));
// console.log((noGuest = guests.numguest ?? 10));
const menu = ["egg", "fish", "chicken", "mutton"];
// console.log([...menu.entries()]);

// for (const [i, el] of menu.entries()) {
//   // if (el === "fish") break;
//   // console.log(el);
//   // if (el === "fish") continue;
//   console.log(`item ${i + 1}:${el}`);
// }
// const weekdays = ["mon"];
// const user = {
//   // [`day-${weekdays[0]}`]: "test cal prop name",
//   firstname: "troy",
//   job: "student",
//   friends: [{ firstname: "troy" }, { firstname: "jeff" }],
// };
// console.log(user);
// // console.log(user?.friends?.[0]?.firstname);
// console.log(Object.keys(user));
// const values = Object.values(user);
// console.log(values);
// const [{ firstname }] = values[2];
// console.log(firstname);
// console.log(Object.entries(user));

// const colorsSet = new Set(["red", "blue", "yellow", "brown"]);
// console.log(colorsSet);
// console.log(colorsSet.size);
// console.log(colorsSet.add("grey"));
// console.log(colorsSet.has("red"));
// console.log(colorsSet.delete("brown"));
// console.log(colorsSet);
// console.log(colorsSet.clear());
// console.log(colorsSet);
// const userSet = new Set("troy");
// console.log(userSet);
// const user = {
//   id: 101,
//   name: "Arjun",
//   email: "arjun@example.com",
//   age: 26,
//   isActive: true,
//   role: "developer",
//   skills: ["JavaScript", "Node.js", "PostgreSQL"],
//   address: {
//     city: "Chennai",
//     country: "India",
//   },
//   greet() {
//     return `Hi, I'm ${this.name}`;
//   },
// };
// const rest = new Map();
// rest.set("name", "best restau");
// rest.set(1, "street");
// rest.set(2, "plaza");
// rest.set(document.querySelector("h1"), "DOM el");
// console.log(rest);
// const umap = new Map(Object.entries(user));
// console.log(umap);
// const s = "Str$ing$";
// console.log(s, s.toLocaleLowerCase(), s.replaceAll("$", ""));
// console.log(
//   "map performance prop not string iterable".split(" ,").forEach((el) => {
//     const arr = [];
//     arr.push(el.split(" "));
//     console.log(...arr.flat());
//   }),
// );
// console.log("map performance prop not string iterable".split(" ").join("_"));
// function print(str) {
//   console.log(str);
// }
// console.log(typeof print);

// const greet = (greeting) => (name) => `${greeting} : ${name}`;
// console.log(greet("hello")("troy"));
// (function () {
//   console.log("this will run once");
// })();
// (() => console.log("this will also run once"))();

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();
// console.dir(counter);

//EX1
// let f;
// const a = function () {
//   let x = 2;
//   f = function () {
//     console.log(x * 2);
//   };
// };

// const b = function () {
//   let y = 2;
//   f = function () {
//     console.log(y * 3);
//   };
// };
// a();
// f();
// console.dir(f);
// b();
// f();
// // console.dir(f);

// const defTimer = function (n, wait) {
//   const b = n / 3;
//   setTimeout(function () {
//     console.log(b);
//     console.log(wait * b);
//   }, wait * 1000);
//   console.log("before timeout");
// };
// console.dir(defTimer);
// defTimer(90, 5);
const arr = [1, 2, 3];
console.log(arr.slice(0, 2));
console.log(arr);
const b = [...arr];
console.log();
console.log(b.map((el) => el * 2).reduce((sum = 0, el) => (sum += el)));
console.log([...arr].map((el) => el * 2).reduce((sum = 0, el) => (sum += el)));

console.log(
  arr
    .slice()
    .map((el) => el * 2)
    .reduce((sum = 0, el) => (sum += el)),
);
console.log(arr.reverse());
console.log(arr);
