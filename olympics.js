// Preliminaries 
if(5 > 3){
    console.log("is greater than")
}

var cat = "cat"
if (cat.length == 3 ){
    console.log("is the length")
}

var dog = "dog"
if (dog == cat){
    console.log("they are the same")
} else {
    console.log("not the same")
}

// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
  }

if (person.age >= 18){
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.name.charAt(0) == "B"){
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

if ((person.age >=18) && (person.name.charAt(0) == "B")){
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

//Silver Medal
if (1 === "1") {
    console.log("strict")
} else if (1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}

if (1 < 2 && 2 === 4){
    console.log("yes")
} else {
    console.log("no")
}

// Gold Medal
var pet = {
    dog: "dog"
}
if (pet.dog instanceof String){
    console.log("is a string")
} else {
    console.log("is not a string")
}

if ("true" instanceof Boolean){
    console.log("is a boolean")
} else {
    console.log("is not a boolean")
}

var variable = undefined
if (variable){
    console.log("variable defined")
} else {
    console.log("variable undefined")
}

if ("s" > 12){
    console.log("it is greater")
} else {
    console.log("it is not greater")
}

var myNum = 10
if (myNum % 2 === 0){
    console.log("it is even")
} else {
    console.log("it is odd")
}