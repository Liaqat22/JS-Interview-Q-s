// PERMITIVE DATA TYPES : there are 7 permitive datatypes in js (nn , bb , ss , u) ;

let a = 7; // number
let b = null; // null
let c = true // booleon
let d = BigInt("7") + BigInt("3") // 10 ; BigInt
let e = "Javascript data types" // string
let f = Symbol("this is symbol") // symbol
let g = undefined; // undefined

let h = null
console.log(h===b) // true ; permitives can be eqaul


// ================================================================== Object / non-permitives ========================================

// Object / Non-Permitives

let object = {
    'a' : true,
    'b' : undefined,
    "c" : 'javascript object',
    "d" : 'islamabad'
}
console.log(object["d"] , "d") // islamabad , d

//  two non-permitive can never be eqaul

// Example

let arry  = [1,2,3]
let arry2  = [1,2,3]

console.log(arry===arry2) // false because of non permitive data type

