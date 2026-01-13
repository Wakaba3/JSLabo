importScripts("utils.js");

console.log("Log from worker");

setInterval(() => {
    postMessage(`${add(Math.random(), Math.random())}`);
}, 1000);