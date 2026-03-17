// for closure, we need two things: a function and the data on which the function operates (this data is called lexical scope or surrounding state).
// A closure is a function that has access to the parent scope, even after the parent function has closed.

let outerFunction = () => {
    let name = "Jotny";

    let accessName = () => {
        let name = "radhe";
        console.log(`Hello ${name}`);
    }
    accessName("Krishna");
}

outerFunction();
accessName(); // this will give error because it is not defined in the global scope
              // The memory of the name variable is released after the outerfunction is executed, 
              // but the accessName function still has access to it because of closure.

// But 
function outerFunction1() {
    let name = "Jotny";

    function accessName() {
        console.log(`Hello ${name}`);
    }
    return accessName;
}

let innerFunction = outerFunction1();
innerFunction(); // this will work because the innerFunction has access to the name variable through closure.