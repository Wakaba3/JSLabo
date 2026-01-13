const worker = new Worker("worker.js");

// Prevent right clicking
addEventListener("contextmenu", event => event.preventDefault(), { passive: false });

// Prevent touch scrolling
addEventListener("touchmove", event => event.preventDefault(), { passive: false });

addEventListener("message", event => {
    alert(`Worker: ${event.data}`);
});