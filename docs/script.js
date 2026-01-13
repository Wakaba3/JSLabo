const worker = new Worker("worker.js");

window.addEventListener("message", event => {
    alert(`Worker: ${event.data}`);
});