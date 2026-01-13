const worker = new Worker("worker.js");

worker.postMessage(null);

window.addEventListener("message", event => {
    alert(`Worker: ${event.data}`);
});