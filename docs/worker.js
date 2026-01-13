importScripts("utils.js");

console.log("Log from worker");

window.addEventListener("message", event => {
    setInterval(() => {
        postMessage(add(Math.random(), Math.random()));
    }, 1000);
});