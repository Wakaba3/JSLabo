const worker = new Worker("worker.js");

addEventListener("pointerdown", event => {
    worker.postMessage(null);
});

addEventListener("message", event => {
    console.log(`Worker: ${event.data}`);
});