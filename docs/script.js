const worker = new Worker("worker.js");

addEventListener("message", event => {
    console.log(`Worker: ${event.data}`);
});

console.log(add(2, 8));

worker.postMessage([3, 7]);