const worker = new Worker("worker.js");

worker.postMessage(null);

onmessage = event => {
    console.log(`Worker: ${event.data}`);
}