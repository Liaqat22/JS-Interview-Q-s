// CLOSURE : a function with its lexical environment , accessing variable from outside from its object scope 

const main = () =>{
    let name1 = "good morning" 

const subMain = () =>{ // closure

    let name = "good afternoon"

    console.log(name1) // name1 is its lexical enviroment
}

 name1 = "good night" // if we change name1 value here it will return "good night" in output because it returning the variable refrence not it's hardcoded value

return subMain()

}
main() // good night,  as explained above

//subMain is a CLOSURE and can access name1 due to lexical enviroment even if it is initialized outside the main function (main)
