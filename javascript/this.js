// In this we are revising this keyword in JavaScript
// this keyword refers to the current context of the code.

// function 1
let object1 = {
    name: "Jotny",
    age: 22,
    welcomeMsg: function() {
        console.log(`Hello ${this.name}, welcome to JavaScript!`);
    }
}
object1.welcomeMsg();

// function 2
let object2 = {
    name: "Radhe",
    age: 22,
    welcomeMsg: function() {
        console.log(`Hello ${this.name}, welcome to JavaScript!`);
        console.log(this); // this will print the object2 because it is the current context of the code
    }
}
object2.welcomeMsg();
object2.name = "Krishna";
object2.welcomeMsg(); // this will print "Hello Krishna, welcome to JavaScript!" because we have changed the name property of object2


// using this in a function
function welcomeMsg(name) {
    console.log(`Hello ${this.name}, welcome to JavaScript!`);
}
welcomeMsg("Bhavya"); // this will give undefined because this is not defined in the global scope

let name = () => {
    let name = "HoekChand";
    console.log(this.name); // this will give undefined because this is not defined in the global scope
}

// you can use a arrow function like this as well

const add = (a, b) => a + b;
console.log(add(2, 3)); // this will print 5

// To return object, use parentheses around the object literal
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("Jotny", 22)); // this will print { name: 'Jotny', age: 22 }