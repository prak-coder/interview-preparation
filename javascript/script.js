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

let h = document.querySelector(".hour");
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
stop.addEventListener("click", () => clearInterval(timerID));
