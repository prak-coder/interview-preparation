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
//     break;
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

try {
  console.log(a);
  const a = 10;
  // let a = undefinedVariable;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
