//==========Exercise #1 ===========//

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function faveFoods(aperson){
    for(let i = 0; i < Object.entries(aperson).length; i++){
        console.log(Object.entries(aperson)[i])
    }
}

function faveFoods2(aperson){
    for(let i = 0; i < Object.keys(aperson).length; i++){
        console.log(Object.keys(aperson)[i])
        console.log(Object.values(aperson)[i])
    }
}

console.log(faveFoods(person3))
console.log(faveFoods2(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;

    this.printInfo = (city) => {
        console.log(`My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old and I am from ${city}.`)
    }

    this.addYear = () => {
        this.age++;
        console.log(`I am now ${this.age} years old.`)
    }
}

let first_person = new Person('Will', 'Fowler', 27)
let second_person = new Person('Sean', 'Rich', 24)

console.log(second_person.printInfo('Durham'))
console.log(first_person.printInfo('Atlantic Beach'))
console.log(first_person.addYear())
console.log(first_person.addYear())
console.log(first_person.printInfo('Atlantic Beach'))
console.log(first_person.addYear())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = ( word ) => {
    return new Promise( (resolve, reject) => {
        if( word.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigWord('JavaScript')
.then ( () => {
    console.log('Big Word')
})
.catch ( () => {
    console.log('Small Number')
})