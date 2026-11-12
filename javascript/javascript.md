JavaScript Revision

    fundamentals 1
    -javascript is a dynamically typed language meaning only values have types not variables
     variable can change holding diff types at different times of program
    -data types and variables let const var.. use const always less variable mutation less bugs 
       firstname='global' works property on global obj
    Data Types
    1.Number Infinity, -Infinity and NaN.
    2.BigInt number greater than 2^53-1 9007199254740991 const bigInt = 1234567890123456789012345678901234567890n;
    3.String '',"",``
    4.Boolean true false
    5.null not object ref but “nothing”, “empty” or “value unknown”.
    6.undefined  unassigned
    7.Symbol typeof Symbol("id") // "symbol"
    8.Objects all else 
        typeof Math // "object"  (1)
        typeof null // "object"  (2) ----error/mistake from early js days 
       typeof alert // "function"  (3)
    -math operators,assignment,logical,comparison +,-,*,/, && || ! += -= ++ -- <> <= >= !==
    --Strings and Template Literals '' "" ``
    -if/else type convers Number(),String and coercion + when string will convert to string
    - Truthy and Falsy Values uneon undefined,null,'',0,NaN
    -'==' type coercion vs '===' data type check
    -JavaScript was originally built to run exclusively inside web browsers. If the core  JavaScript  language had native file system I/O capabilities (like Python's open()), visiting a malicious website could allow the site's script to read your private files, delete your operating system, or access your webcam without permission.
   -v8 spidermonkey engines follow ecmascript blind no I/O. browser and node are envi provide apis
    for fs,http and dom.. also they manage Event Loop, Task Queue, and Microtask Queue to handle asynchronous code like setTimeout or fs.readFile.
   -js revision let const var are hoisted,var a is intialized with undefined ReferenceError is a subclass of Error.
   -switch no break execute next case. default when all cases fail
   -expression produce value statement is if,switch.. `{expression}`
   -terenary operator condition ? expressionIfTrue : expressionIfFalse

fundamentals 2
   -'use strict' warns uncaught ReferenceError and reserved key word
   -continue and break are key words in loops break breaks the loop continue the loop
   -use Date.now() for clock or stop watch with setinterval bcs of how js executes bts single thread nature and browser envir browser sleep mode/load big image
   -expression computes to a value. statement dont change value but alters the state of the program.
   control structures like if for are statement variable dec and assignment are also statements
  -arrow func => seperates parameters and body of func mostly used when func(unnamed) are passed as argu to other func eg [1,2,3].map((val) => val *2)
  -console.log(["1", "2", "3"].map((val) => parseInt(val))); works but map( parseInt(val)) fails bcs parseInt expects more arguments
  -if a value is not a number,string boolean symbol null or undefined its an object
  -function are reusable blocks of code def parameters.. call/invoke/execute funct with values arguments. DRY donot repeat yourself.. default return undefined
  -function declration -hoisted can be used before declaration func expression not hoisted will get ReferenceError cant use before intializion
 -arrow func argu => returnvalue if (arg1,arg2) =>{lines code explixit return value} doesnot have own this keyword
-func can call other functions
-Arrays are numbered ds =[] literal const colors= new Array('red','blue') colors[0],colors.length
--pop vs push -last element.. element shift vs unshift 1st element 0000->0-pop 0000<-0 push shift 0<-000 0->00 unshift indexOf() includes('red') true/false
-objects key-value ds const troy ={} order doesnot matter troy.firstname or  troy['firstname'(exp)]
-objetcs can have methods bcs func express are values calcAge :fun(){} this points to object calling it. arrays are also objects bcs they have methods
-for(let i=0;i<=10;i++){} while(i<=10){} continue - continue loop without going to next.. break breaks the loop completely
-loop can work backwards and loop inside loop is possible exercise loop contain repeat loop inside
-while loop doesnt need counter just condition.. eg roll dice till you roll 1 login user till correct email/password

DOM and Events
   -Document object model structured representation of html documents.allow js to acess html el and css styles and to manipulate them
   -dom tree structure by browser html load.. document obj special obj entry to DOM
   -dom methods and property are part of web APIs..timers,fetch are eg of web API
   -So the browser is a safety layer: websites are untrusted code from strangers, and Web APIs expose only what’s safe, with the user in control.cant close broswer or read history
   -window is the global obj it contains document,timers(setinterval) fetch localstorage 
   -queryselector,All,getelementbyid/tag/class.. .value for input elements .textContent only text string.. innerHtml to get entire html inside it
   -window-browser tab/window..document-current html page
   -Events happen on DOM elements (and bubble up to the document). We use addEventListener('click', callbackFn), which is a higher-order function. We only pass the function reference, and the browser triggers it for the JS engine to execute when the event occurs
   -chrome(v8,blink)..blink-html,css and webapis.. v8-js and webassembly..writes complex, math-heavy code in C++, Rust, or Go compile to .wasm(0 and 1)-v8 runs it..wasm cant touch dom or css..for heavy tasks (3d rendering/physics/video editing ).. eg.figma(c++ to wasm),google earth and photoshop web...
   -Math.trunc(Math.random() * 20) + 1(1-20) document.queryselector('body).style.backgroundColor='green' manipulate css styles
   -queryselectorAll('.btn') returns a NodeList like an array..no map filter to array [...nodelist] Array.from()
   -'click' one of event of PointerEvent.. when event happen the e is passed to callbackFn