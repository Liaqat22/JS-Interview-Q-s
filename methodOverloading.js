// Method Overriding : When a subclass provides a specific implementation of a method that is already defined in its superclass
class parentclass{

    education(){
        console.log(`completed ICS`)
    }
}

class childclass extends parentclass{
    experience = '2 years'
    
    education(){
        console.log("completed BSIT")
    } // here the education is overloaded 
}

const codeOutput = new childclass()

codeOutput.education() // completed BSIT ,  due to method overridding

// parentclass.prototype.education() // completed ICS 


//==================================================== function overloading ===========================================================

// if we have two or more same function it will return the output of the last function as shown in below code , 
// we have 3 same function and only the last function will run

function sum(a,b){
    return a+b
} // function will skipped

function sum(a,b,c){
    return a+b
}// function will skipped

function sum(a,b){
    return a*b
} // 25

console.log(sum(5,5) , "sum")