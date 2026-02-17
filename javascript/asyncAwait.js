// async await is used to handle asynchronous operations in a more synchronous way.
// It is built on top of promises.
// async: It is a keyword that is used to declare an asynchronous function. An asynchronous function is a function that returns a promise.
// await: It is a keyword that is used to wait for a promise to resolve. It can only be used inside an asynchronous function.

// creating an async function

async function getApiData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(await response.json());
}
// adding await means we are stoping the flow of execution until the promise is resolved.
// We will wait untill the data is fetched.
