importScripts("utils.js");

addEventListener("message", event => {
    postMessage(add(5, 15));
});