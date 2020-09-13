let favMovie = (movie = 'the room', director = 'Tommy Wiseau') => console.log(`My name is ${director} and my favorite movie is ${movie}`)

favMovie('quentin', 'pulp')

let getFirstName = (fullName)=>{
    const first = fullName.split(' ')[0]
    return first
}

let getFirstNameConsice = (fullName)=> fullName.split(' ')[0]

console.log(getFirstName('Jason Layton'))
console.log(getFirstNameConsice('Jason Layton'))

let doMath = (x,y) => {
    let exponent = x**y
    let product = x*y
    return {
        exponent : exponent,
        product : product
    }
}


console.log(doMath(100,2))

function myFunc(name, location, favFood){
    console.log(`my name is ${name}, I live in ${location}, and my favorite food is ${favFood}`)
}

myFunc('jason','wantagh','pizza')

let array = ['Brad',"levittown",'bagels']

myFunc(...array)

let myName = "Jason"

function myFunc2(param){
    let chars = [...param]
    for (letter of chars){
        console.log(letter)
    }
}


myFunc2(myName)