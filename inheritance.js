// INHERITANCE : 

class animals { // parent class
    alive = true
    eating() {
        console.log(`the ${this.name} is eating`)
    }
    sleeping() {
        console.log(`the ${this.name} is sleeping`)
    }
}

class cow extends animals { // child class of animal
    name = "cow"
    milk() {
        console.log('cow gives milk')
    }
}
class eagle extends animals { // child class of animal
    name = "eagle"
    fly() {
        console.log('eagle can fly')
    }
}

const Cow = new cow()
const Eagle = new eagle()

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
    runcode() {
        console.log(`
    vahecle  : ${this.vehicletype},
    modal : ${this.modal},
    color : ${this.color},
    capcity : ${this.capacity}  `)
    }
}
class bike extends vehicles { // child 
    vehicletype = 'bike'
    capacity = 'max 3  passengers'
    color = 'red'
    modal = 'cd 70'
}
class car extends vehicles { // child 
    vehicletype = 'car'
    capacity = 'max 6  passengers'
    color = 'white'
    modal = 'hoda civic'
}
const Bike = new bike()
const Car = new car()

Bike.runcode()
Car.runcode()

