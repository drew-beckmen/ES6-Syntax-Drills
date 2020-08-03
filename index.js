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
