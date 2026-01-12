const worker = new Worker("worker.js");

addEventListener("pointerdown", event => {
    worker.postMessage(null);
});

onmessage = event => {
    console.log(`Worker: ${event.data}`);
}