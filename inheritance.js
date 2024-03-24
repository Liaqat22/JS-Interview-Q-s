// INHERITANCE : The process of creating a new class from an existing class
// >> we have to create the parent class first i.e;(animals , vehicles) then we have to create the child classes and connect the child class to the parent class by using EXTENDS keyword for example (class cow extends animals) cow is a child class of animals class (Parent class)
// >> we use inheritance to write less code 
// >> we have put the common things to the parent class and
//    rest of the things to each child class according to their nature as explained in the below examples



//  ============================================= EXAMPLE 1 ====================================================

class animals { // parent class
    alive = true
    eating() {
        console.log(`the ${this.name} is eating`)
    }
    sleeping() {
        console.log(`the ${this.name} is sleeping`)
    }
}

class cow extends animals { // child class of animals
    name = "cow"
    milk() { // method
        console.log('cow gives milk')
    }
}
class eagle extends animals { // child class of animals
    name = "eagle"
    fly() {
        console.log('eagle can fly')
    }
}

const Cow = new cow()      // Cow --> object , now we can access the cow methods
const Eagle = new eagle() // Eagle --> object , now we can access the eagle methods

console.log(Cow.alive, 'cow ')
Cow.eating()
Cow.milk()
Cow.sleeping()

console.log(Eagle.alive, 'eagle ')
Eagle.eating()
Eagle.sleeping()
Eagle.fly()

// =================================== Example 2 =====================================================

class vehicles { // parent 
    type = "transport"
    constructor(vehicle, modal, color, capacity) { // constructor will be called whenever the object is created , with constructor we can create multiple instance
        this.vehicletype = vehicle
        this.modal = modal
        this.color = color
        this.capacity = capacity
    }
    runcode() {
        console.log(`
    vahecle : ${this.vehicletype},
    modal : ${this.modal},
    color : ${this.color},
    capcity : ${this.capacity}  `)
    }
}
class newCar extends vehicles {
    super(vehicle, modal) { // super() is used to call the constructor of parentClass from child or subclass
        this.vehicletype = vehicle,
            this.modal = modal
    }

    train() {
        console.log(`the vehical type is ${this.vehicletype} and modal is ${this.modal} `)
    }
}

const Bike = new vehicles("bike", "cd 70", "red", "max 3  passengers")
const Car = new vehicles('car', 'hoda civic', 'white', 'hoda civic')
const Newcar = new newCar("train", "hazara express")

// Bike.runcode()
Car.runcode()

Newcar.train()