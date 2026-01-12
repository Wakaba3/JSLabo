const worker = new Worker("worker.js");

addEventListener("message", event => {
    alert(`Worker: ${event.data}`);
});

alert(add(2, 8));

worker.postMessage([3, 7]);