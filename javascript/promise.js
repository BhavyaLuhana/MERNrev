// promise: promise is a built-in object that is used to handle asynchronous operations.
// Promise is a way to handle asynchronous operations in a more elegant way than callbacks.
// It allows us to write asynchronous code that looks synchronous, making it easier to read and maintain.

// A promise has three states:
// 1. PENDING: The initial state of a promise. It is neither fulfilled nor rejected.
// 2. FULFILLED: The state of a promise when the asynchronous operation is completed successfully.
// 3. REJECTED: The state of a promise when the asynchronous operation fails.

let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Promise is fulfilled");
    } else {
        reject("Promise is rejected");
    }
}).then((msg) =>  {
    console.log("Promise message is: " + msg);
}).catch((err) => {
    console.log("Promise error is: " + err);
});


let promise2 = new Promise((resolve, reject) => {
    console.log("This is a promise that will be fulfilled after 3 seconds");
    setTimeout(() => {
        resolve("Promise is fulfilled after 3 seconds");
    }, 3000)
}).then((msg) => {
    console.log("message is: " + msg);
}).catch((err) => {
    console.log("error is: "+ err);
});

console.log(promise2);

// promise functions:
// 1. Promise.all(): It takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved
// , or rejects if any of the promises in the array reject

Promise.all([promise, promise2]).then((values) => {
    console.log("All promises resolved with messages:", values);
}).catch((err) => {
    console.log("One or more promises rejected with error:", err);
});