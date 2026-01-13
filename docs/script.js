const worker = new Worker("worker.js");

worker.postMessage(null);

worker.addEventListener("message", event => {
    console.log("On main script");

    console.log(`Result: ${event.data}`);
});