// synchronous code: code that runs in a sequence, one line after another

//asynchronous code: code that runs independently of the main thread, allowing other code to run while it is executing
// functions like setTimeout, setInterval, fetch, and event listeners are examples of asynchronous code
// to handle asynchronous code, we use event loop

// HOW EVENT LOOP WORKS:
// 1. Call Stack: This is where the JavaScript engine keeps track of function calls. When a function is called, it is added to the call stack. When the function returns, it is removed from the call stack.
// 2. Web APIs: These are provided by the browser (or Node.js) and include things like setTimeout, fetch, and event listeners. When an asynchronous function is called, it is offloaded to the Web API, allowing the main thread to continue executing other code.
// 3. Callback Queue: When an asynchronous operation completes, its callback function is added to the callback queue. This queue holds all the callbacks that are ready to be executed.
// 4. Event Loop: The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.

// example of event loop in action:

console.log("start");

setTimeout(() => {
    console.log('This is an asynchronous callback');
}, 5000);

console.log("end"); // OUTPUT: start, end, This is an asynchronous callback (after 5 seconds)