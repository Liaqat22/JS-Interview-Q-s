// VAR : var could be hoist  , re-declared , re-initialize ('var is not suitable to use') 

// EXAMPLE 1 : re-declared , re-initialize

var a = 10; // first declaration and initialization

console.log(a) // 10

var a = 20; // re-declaration and re-initialization

console.log(a) // 20

// =============================================== LET =====================================================

// LET : can not re-declared but can be updated with in its scope  (ES6)

// EXAMPLE 1 

let x = 'outside the scope';
console.log(x) // outside the scope

// let x = 'updating the outsideScope';     // SyntaxError: Identifier 'x' has already been declared ; // can not re-declared ; // wrong way
x = 'updating the outsideScope'// correct way  to update

function Letfunc() {
    let x = "inside the scope";
    console.log(x, "INSIDE")
}

console.log(x, 'OUTSIDE') // updating the outsideScope , OUTSIDE
Letfunc() // inside the scope , INSIDE


// =============================================== CONST =====================================================

// CONST : can not be re-declared and can not be updated with in its scope , we must initialize const along with its declaration (ES6)

// EXAMPLE 1 

// const value ; // must initialize const along with its declaration 

const value = 'constant value outside the scope'

//  value = "update const value" ; // can not update the const value 

function Constfunc() {
    const value = "constant valueinside the scope";
    console.log(value, "constINSIDE")
}

console.log(value, "constOUTSIDE") // constant value outside the scope , constOUTSIDE
Constfunc() //constant valueinside the scope, constINSIDE
