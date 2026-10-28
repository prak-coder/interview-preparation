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



