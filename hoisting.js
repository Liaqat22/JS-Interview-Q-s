// Hoisting 
// variable and function declaration are moved to the top of their scope , before code is exected
// only declarations are hoisted not the the initailization or assignments 
// in case of 'let' and 'const'  their declaton hoisted to the top not their initialization  , their variable goes to the temprary dead zone
// function expressions are not hoisted (is equal to kr k jo expression likhi jaey , e.g; var a = function(){} )

// for EXAMPLE - 1: variable hoisting , with "var"

console.log(a) // undefined because "a" is declared at the top not initialized due to hoisting 

var a = 'hello world , var' // at here "a" is initailized 

console.log(a) // as the a is initialized so we get output as : hello world     Cannot access 'a' before initialization


//  EXAMPLE - 2: variable hoisting , with "let"
// console.log(x), //refrence error : Cannot access 'x' before initialization , "x" is in temprary dead zone

let x = 'hello world , let' // at here "x" is initailized  , declartion hoisted to the top but not the initialization

console.log(x) // as the x is initialized so we get output as : hello world     

// EXAMPLE - 3 : variable hoisting  with "const" , same thing will be happen with const as let

//  EXAMPLE - 4: function hoisting , with normal function

hoisting() // output : hoisting function , hoisted
function hoisting() {
    const value =  console.log("hoisting function")
    return value
}

//  EXAMPLE - 5: function hoisting , with  function expression

// functionExpression() //  TypeError: functionExpression is not a function

var functionExpression = function hoisting() {
    return console.log("hoisting with  function expression")
}
functionExpression() // output : hoisting with  function expression

//  EXAMPLE - 5: function hoisting , with  function expression with "let" and "const" we get the error
// ReferenceError: Cannot access 'functionExpression' before initialization.
