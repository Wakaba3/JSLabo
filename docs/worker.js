importScripts("utils.js");

setTimeout(() => {
    postMessage(add(5, 15));
}, 1000);