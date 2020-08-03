//Template Literals, Default Parameter Values
function favMovie(name = "Tommy Wiseau", movie = "The Room") {
    console.log(`My name is ${name} and my favorite movie is ${movie}`)
}

//Arrow Functions Single Line with No Curly Braces
const favoriteMovie = (name = "Tommy", movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}`)

const getFirstName = name => name.split(" ")[0]

//Concise Syntax: Single Line
const doMath = (x, y) => ({
    exponent: x**y, 
    product: x*y
})

//Spread Syntax: 
const displayInfo = (name, location, favFood) => console.log(`I am ${name}, I live in ${location}, and I like ${favFood}`)

let arr = ["Paul", "Birmingham", "Hot Dogs"]
displayInfo(...arr) //spread operator

const displayCharacters = str => {
    let charArr = [...str] //spread operator
    for (let i = 0; i < charArr.length; i++) {
        console.log(charArr[i])
    }
}
let name = "Drew"
displayCharacters(name)

//-----------------------------------------------------------------------------

//Object Oriented Programming Drills 

//Prototyping and Pseudo-Classes:
function Person(name, city, age) {
    this.name = name 
    this.city = city 
    this.age = age 
}

Person.prototype.sayHello = function() {
    alert(`Hi, my name is ${this.name} and I live in ${this.city}. I'm ${this.age} years old.`)
}

let p1 = new Person("Drew", "Summit", 19)
let p2 = new Person("Julia", "Jackson Hole", 19)
p1.sayHello() 
p2.sayHello()

//ES6 Class Syntax 
class Person2 {
    constructor(name, city, age) {
        this.name = name 
        this.city = city 
        this.age = age 
    }

    sayHi() {
        alert(`Hey how's it going? I'm ${this.name}`)
    }
}
p1 = new Person2("Drew", "Summit", 19)
p1.sayHi()

//Inheritance: 
class Vehicle {
    constructor(wheels, manufacturer) {
        this.wheels = wheels
        this.manufacturer = manufacturer
    }

    aboutVehicle() {
        console.log(`This is a vehicle with ${this.wheels} wheels made by ${this.manufacturer}`)
    }
}

class Truck extends Vehicle {
    constructor(wheels, manufacturer, doors, hasTruckBed) {
        super(wheels, manufacturer)
        this.doors = doors 
        this.hasTruckBed = hasTruckBed
    }

    aboutVehicle() {
        console.log(`This ${this.constructor.name} has ${this.wheels} wheels and ${this.doors} doors`)
    }
}

class Sedan extends Vehicle {
    constructor(wheels, manufacturer, size, mpg) {
        super(wheels, manufacturer)
        this.size = size 
        this.mpg = mpg 
    }
    aboutVehicle() {
        console.log(`This ${this.constructor.name} has ${this.wheels} wheels and ${this.mpg} mpg`)
    }
}

class Motorcycle extends Vehicle {
    constructor(wheels, manufacturer, hasHandlebars) {
        super(wheels, manufacturer)
        this.hasHandlebars = hasHandlebars
    }

    aboutVehicle() {
        console.log(`This ${this.constructor.name} has ${this.wheels} wheels and was made by ${this.manufacturer}.`)
    }
}

let t1 = new Truck(4, "Ford", 4, true)
let s1 = new Sedan(4, "Chevy", "small", 19)
let m1 = new Motorcycle(2, "Harley Davidson", true)
t1.aboutVehicle()
s1.aboutVehicle()
m1.aboutVehicle()
