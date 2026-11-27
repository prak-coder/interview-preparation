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
   -v8 spidermonkey engines follow ecmascript blind no I/O. browser and node are envi provide apis,ecmascript just spec js imple changes acc to env  eg.sort() v8-timsort spidermonkey mergesort
    for fs,http and dom.. also they manage Event Loop, Task Queue, and Microtask Queue to handle asynchronous code like setTimeout or fs.readFile.
    -closures and eventloop are internal mechanism we cant control
      eventloop--
      1.call stack(all sync code)
      2.microtask(promise)[if creates another micro it runs]
      3.one macro (settimeout)
      4.Repeat: Check the Microtask Queue again (and empty it), render UI updates (in browsers), then grab the next Macrotask
      
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
   -dynamic.. variable can hold different values in course of program.. weakly typed-does type coercion 
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
             dont use var,use let and const(var also create prop on global obj)
             dont use functions or variable before declaring them
             declare variables at the top of their scope(top of file,top of func,start of block)
             never use arrow fuct as methods
         
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
        listener this   dom  el that handler is attached to(not arrw func)
        new call apply and bind 
      ** this doesnot point to func iself and not to variable environment
       - no arguments variable available inside aroww function
       -var firstname='jeff'--- prop on window obj -- troy.greet() is an arrw so window and 
       'hi jeff' .. so dont use var and no arrw func as methods
       -normal func call inside a method.. iszensi() inside calcage()- this is undefined
         sol: self/that pre es6
         sol 2: use arrw func 
      primitive vs reference
      call stack                    heap
      age   adress  val
             001     20            adres   value
     oldage  002     21            AC251    { name:'' age:

     me      003        AC251                            }
     friend

     this is why can use const for non primitive bcs its mutable
     -Object.assign({},troy).. creates a shallow copy(not inside ref are changed)
      - can use external lib-- lodash to create deep clone
    SyntaxError     const x;
    ReferenceError console.log(a) let a;
    TypeError   let a=5; a() 'hi'.push('nn')
    RangeError (Out of Bounds),URIError (Broken Web Links),EvalError (Legacy Error): InternalError (Engine Overload) AggregateError (Multiple Failures): 

Data Structures, Modern Operators and Strings

   destructuring: complex ds to simple
   arrays:
   const [x,y,z]=[1,2,3]//[first,,third]
   a,b,temp.. [a,b]=[b,a] no temp
   [i,,[j,k]]=[1,2,[5,9]] 
   const [p=1,q=1]=[3] default values

   Objects
   const {firstname,birthyear} = troy (order not imp but same prop names)
   const {firstname:officialName,b:p}
   let a=5,b=6 obj={a:'red',b:'blue'}
   ({a,b}=obj)-- otherwise things its code block
   {fri:{a,b}}={fri:{a:1,b:2}}... nested obj 
   function printuser({a,b}){console.log(a,b)} -- destructuring directly in parameters

   spread operator  =... rest operator ... = 
     -const newArr =[...arr,5,6]
     -iterables arrays strings sets maps but not object
     -spread works on all iterables 
     -dominos.orderPizza(...ingredients)
     -es2018 work on objects const newUser ={...user,job:'student'}
     -const userCopy ={...user} // shallow copy
     - spread bcs on right side of '='
     -const [a,b,...others] =[1,2,3,4,5] rest should be the last element
     -const {sat,sun,...weekdays}=alldaysofWeek
     -rest in func  add(...numbers) add(2,3),add(4,5,6)

   short circuiting && and ||
    - or if first value true it short circuit (3||'hi') (null||'hi')-- first truthy value
    -and  (false && null) ('hi' && 5 && 0 && 'ff')  --first falsy value
    -use for default vaues user || 10 and where expression needed as in jsx {expression}

   nullish colasing operator ?? works nullish values (null and undefined)
   noGuest = guests.numguest || 10 // 0 --> 0 so  instead guests.numguest ?? 10 // 0 -- 10 

   for-of loop
      -es6 for(const el of menu) 
      -break and continue work in forof
      -for(const {i,el} of menu.entries()) -to get index value
   
   enhanced object literal 
      -const user = {jobDetails} jobDetails is a obj outside..jobDetails:jobDetails not 
      -const user = {login():{}} -no prop and func expres 
      -calculate prop name const user = {[`day-${weekdays[0]}`]}
   
   Optional chain ?.
      -user?.friends?.[0]?.firstname
      -user?.work?.() - for methods too

   Looping over Objects 
      -keys values and entries
      -Object.keys(user) Object.values(user) Object.entries(user) // on arr colors.entries()
      -for(const x of keys|| values)
   
   Set 
      -es6 set and map
      -iterable of unique values, string also iterable
      -const colorsSet =new Set(['red','blue','yellow','brown','red']) -2nd red ignored
      -.size not length
      -methods colorsSet.has() .add()  .delete() .clear()
      -can loop for(const el of colorsSet)
      -use to create unique value arr [...colorsSet]
      -since they have unique values no need for order(unordered) -preserve order no index 
       based access ~~colorsSet[0]~~
   
   Map
      -obj with any type for prop
      -const rest =new Map() -- empty map then add using set method 
      -.set() can be chained
      -.get('prop name') .has() .delete()
      -can use obj as prop eg rest.set(doc.queryselector(),'dom')
      -const rest =new Map([['name','best'],[1,'street']])
      - obj to map const m = new Map(Object.entries(user))
      -map to array [...rest]
   
   which ds to use
    -data from 1.inside program 2.from ui(form) 3.from web api
    -if(simple list) array || set
    -if(key/value) obj/set
    -use array if- ordered list and manipulate data(lot methods) 
    -sets unique,high performance,remove dupl from arr
    -obj traditional easy to write and acess
    -map performance ,prop not string ,iterable

    Working With Strings
      -'strings'[0],'strings'.length
      -indexOf(),lastindexof() use inside slice(0,4) 4-excluded 
      -toLowercase,touppercase,replace('$',''),trim(),replaceAll,replace(/the/g,'') -regEx
      -includes(),startswith,endswith
      -split(" "),join('_'),padstart(),padend()

A Closer Look at Functions

   default parameters
      -function(a,b=1) 
   primitive vs ref as parameters
      - primitive a copy mutation will not affect
      -ref adress mutation will not affect original
      -js only pass by value no reference.. c++ we can pass address of primitive too

   func class citizen(feature) vs higher oder func(egs)
      -stored i variable pass to func ret from func
      -func are type of object.. have func methods like bind,call etc
      -High Order func -accepts func || returns func || both(called so bcs higher level of abstraction)
      -func return func greet('hello')('troy')
   call,apply,bind
      -mehods for func(bcs func obj)
      -obj has book method we copy to new method newBook if called this--undefined
      -book.call(eurroeing(obj this should refer to),a,b(argu of book))
      -apply takes arr..  now bcs destructuring.. book.call(eurroeing,...[a,b])..apply rare used
      -bind doesnt call but returns func const bookEW=book.bind(eurroeing)
      -bind can set param in stone like  const bookEW3=book.bind(eurroeing,3)-- only pass b
      -with event listener (this points to dom el) 
         -document.queryselector('.btn').addEventListener('click',ew.buyplane.bind(ew))
      -bind(null,1,b)
   Immediately Invoked Function Expressions (IIFE)
      -use with async/await
      -(function () {
         console.log("this will run once");
                     })();
      -not a js feature some devs created pattern
      -after es6 create a { use const let}- for private variables no iffe 
      -still can be used
   
   Closures
      -not a feature we explicitly use like array or obj.. happens auto..
      -func has access to variable_environ(VE) of execution context (EC) in which it was created
      -closure:VE attached to func exactly as it was at the time and place it was created
      -console.dir(counter)
      function outer() {
            let count = 0;
            return function inner() {
               count++;
               console.log(count);
            };
            }
            const counter = outer();
            counter();
            counter();
            console.dir(counter)
      //EX1 //-setTimeout()-- also create closures
            let f;
            const a = function () {
            let x = 2;
            f = function () {
               console.log(x * 2);
            };
            };
            const b = function () {
            let y = 2;
            f = function () {
               console.log(y * 3);
            };
            };
            a();
            f();
            console.dir(f);
            b();
            f();
            console.dir(f);

Working with Array
   -arr are objs so have methods
   -slice(0,3)  new array ,slice(-1)-last el,slice() create shallow copy
   -splice same as slice but mutates arr used to delete last el
   -reverse() -mutates
   -concat and join, a1.concat(a2) a.join('-')
  
   forEach loop
      -transfers.forEach((transfer, index, arr) =>{})
      -no break and continue inside forEach
      -same for set and map
      -const currencies = new Map([ ["usd", "us dollar"],  ["euro", "european union"]]);
      -currencies.forEach((value, key, map) => {})
      -const currenciesUnique = new Set(["usd", "euro", "yen", "euro", "yen"]);
      -currenciesUnique.forEach((value, key/_, set) => {});value and  key same bcs unique no index
   
   map,filter,reduce data transformation
      -map new arr after operation on all arr el
      -filter return new arr of el that passed condition
      -reduce reduces el to single value 
      -map((el,i,arr) => {})
      -map doesnot create side effect (pure)
            In programming, a side effect happens when a function modifies something outside of its own local scope. Common examples include:
               • Changing the value of an external variable or mutating the original array.
               • Logging text to the console (console.log).
               • Making a network request or saving data to a database.
               let total = 0;
               const numbers =;
               // BAD PRACTICE: Modifying an outside variable ('total') inside map()
               const doubled = numbers.map(num => {
               total += num; // <-- This is a side effect!(hard predictablity and debugging)
               return num * 2;
               });
      -filter numbers.filter(num=>(num%2 ===0))
      -reduce numbers.reduce((acc,el,i,arr) => {},0) 0=acc initial value,first el is acc def val 
      -arr.map.filter.reduce chain methods but ony if it returns an arr
      -dont overuse chaining affect performance
      -bad practice to use reverse/slice in chaining..

   find,findIndex,some,every
      -find returns first el statisfy condition.. filter return all el and new arr
         -find a tour by id return undefined no match
      -findIndex returns the index.. both find and findIndex have index and arr access in cb
       return -1 no match
      -includes test for equality.. return boolean
      -some uses condition.. positive number or num >500
      -every if all el satisfy condition..console.log([].every(x => x > 0)) -- true
      -flat(level) default 1.. flatten arr no mutation...flat(Infinity)..everylevel
      -flatMap(mapcallback).. returns  flatten arr but one level only 
      -sort() mutates arr.. convert to string and do sorting sort((a,b) =>a-b ) ascending b-a desc num.slice().sort().. to use copy
      -const isEqualarr = function (a, b) {
       return a.length === b.length && a.every((el, i) => el === b[i]);
       };

   programatically create array
      const x= new Array(2) empty arry with length 2
      -fill mutates arr fill(3) fill(3,inital,end)
      -Array.from const naturalTen = Array.from({ length: 10 }, (_, i) => i + 1);(curr,i) '_'throw value
      -queryselectorAll returns nodelist use .from to conv to arr 
   
   es2023 new arr methods
       Mutating	Non-mutating
       sort()	   toSorted() same a-b/b-a for numbers
       reverse()	toReversed()
       splice()	toSpliced()
       arr[i] = x with(i, x) if no i RangeError

Numbers, Dates, Intl and Timers
