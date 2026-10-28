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

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

// Using async/await to wait for the user's answer

let day = await rl.question("Enter a number between 1 and 7: ");
day = parseInt(day);

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("not a  day of the week");
    break;
}
rl.close(); // Remember to close the interface!
