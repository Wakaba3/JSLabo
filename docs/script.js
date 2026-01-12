const worker = new Worker("worker.js");

addEventListener("message", event => {
    alert(`Worker: ${event.data}`);
});