const worker = new Worker("worker.js");

worker.postMessage(null);

this.addEventListener("message", event => {
    console.log(`Result: ${event.data}`);
});