const worker = new Worker("worker.js");

addEventListener("pointerdown", event => {
    postMessage(null);
});

addEventListener("message", event => {
    console.log(`Worker: ${event.data}`);
});