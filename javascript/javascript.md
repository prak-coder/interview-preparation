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
   -Math.trunc(Math.random() * 20) + 1(1-20) document.queryselector('body').style.backgroundColor='green' manipulate css styles
   -queryselectorAll('.btn') returns a NodeList like an array..no map filter to array [...nodelist]/ Array.from()
   -'click' one of event of PointerEvent.. when event happen the e is passed to callbackFn


js bts 
   -high level -- c low level fast.. memory management
   -garbage collected memory management 
   -interpreted/jit compiled.. js engine..
   -multipradim.. procedural,oop,functional..
   -proto type based in heritance.. [1,2,3].push => Array.proty
    eg:java class based inheritance
   -first class func.. stored in variables.. passed into and returned from another func
   -dynamic.. variable can hold different values in course of program..
   -single threaded non blocking concurrency model
      -concurrency model how js handle multiple tasks happening at same time 
      -js single thread-- do one thing at a time.. long running task..fetch data .. block thread..
      -event loop no blocking--executes in background and puts in main thread when task is completed
      -js engine call stack (code execution execution context) heap(obj in memory)
      -compilation source code --binary file--execution
      -interpreted sc--execution line by line
      -jit sc---machinecode--execution (immediately and no file)
      -js engine -->parsing- ds called AST abstract syntax tree (syntax errors)-->compilation-->execution optimized
      -js runtime in browser{
         js engine{heap, call-stack}
         web-api{timers,fetch,DOM}
         callback-Queue{onclick,timer,data}
         event-loop puts func from callback que in call stack when empty
      }
      -js runtime in Nodejs{
         js engine{heap, call-stack}
         {c++ bindings- low level file read open network socket
          and thread pool-libuv-handles heavy blocking tasks-file I/0
          }
         callback-Queue{multiple Queues,Microtask que ,event loop phase ques}
         event-loop puts func from callback que in call stack when empty
      }
      -creation of global execution context top level code-->execute toplevel code inside global EC-->execute functions and waiting callbacks
      -inside execution context 
                     EC{
                        1.variable_environ
                           -let const var declarations,functions and argument object 
                        2.scope chain 
                        3.this keyword 
                     } (ec for arrow func no this and arguments obj)
      -inside call stack 1.global-- first() -- second() after return removed from callstack global removed when tab closes

      -scoping:program variables are organized and accesed
      -lexical scoping scoping controlled by placement of func and blocks in code
      -scope:space/env in which variable is declared (var env in case of funct) 1.global 2.function 3.block scoped
     -global scope.. outside func or block..  everywhere access  
     -func scope.. access only inside func
     -ES6 block scope.. acesss inside block (let const).. var func scope.. functions are block scoped (only strict mode)
     -scope chain and variable look up in scope chain.. second--first--global.. first func dont have acess to second chain variable..
     --scope chain has nothing to do with order of func calls 
    
    hoisting and TDZ
     -hoisting:some type of variable acess/usable before declaration variable lifted to top of scope 
             bts:ec{variable_environ,scope_chain,this} before execution code scanned for variable declaration and for each variable a  new property created in variable_environ_object
                           hoisted       inital_value        scope
         func declaration    yes         actual func         block(strict)
         var variables       yes         undefined           func
         let and const       no(yes)     unintialized(tdz)   block
         variables
         func expess         depends on let/const or var                            
         and arrow 

         es6 tdz to avoid and catch errors using variables before declaration is bad practice and should be avoided .. make const variable actually work

         why hoisting: use func before dec (mutual recursion )..var hoisting byproduct

         best practice:
             dont use var,use let and const
             dont use functions or variable before declaring them
             declare variables at the top of their scope(top of file,top of func,start of block)
         
         this
            -special variable created for every ec(execution context)(function)
            -points to the owner of the func in which this keyword is used
            -not static .how func is called only assigned when func actually called
        method  this    <Obj that is calling the method>
        simple  this    undefined(strict) otherwise globalobject
        func 
        call 
        arrw    this    this of surrounding func (lexical this)
        event
        listener this   dom  el that handler is attached to 
        new call apply and bind 
      ** this doesnot point to func iself and not to variable environment