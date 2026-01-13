importScripts("utils.js");

setInterval(() => {
    postMessage(`${add(Math.random(), Math.random())}`);
}, 1000);