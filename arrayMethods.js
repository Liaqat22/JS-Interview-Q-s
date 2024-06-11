// Array methods


const data = [
    { id: 0, name: "top", letters: 3 },
    { id: 1, name: "left", letters: 4 },
    { id: 2, name: "bottom", letters: 6 },
    { id: 3, name: "right", letters: 5 },
]

//SOME
const somedata = data.some(e => e.id === 0)
console.log(somedata , "some") //true

// FILTER : filtering the data which have less than 5 letters

const filterdata = data.filter(item => item.letters < 5)
console.log(filterdata, "FILTER")  // [ {id : 0 , name : "top" , letters : 3 },    {id : 1 , name : "left" , letters : 4 }, ]


// FIND : find data whose id is 2 (unique data)

const findData = data.find(item => item.id === 2)
console.log(findData, "Find") //     {id : 2 , name : "bottom" , letters : 6 }


// FINDiNdex : findIndex of data whose name is right
const findIndexData = data.findIndex(item => item.name === "right")
console.log(findIndexData, "FindIndex") //  3

// SLICE : 
const sliceData = data.slice(0, 2)
console.log(sliceData , "sliceData")

// SPLICE : 
const spliceData = data.splice(0,2)
console.log(spliceData ,  "splice") 
// [ { id: 0, name: 'top', letters: 3 }, { id: 1, name: 'left', letters: 4 } ] this is the data which will be deleted


console.log(data)
// [ { id: 2, name: 'bottom', letters: 6 }, { id: 3, name: 'right', letters: 5 } ] data remains after SPLICE method