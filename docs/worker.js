importScripts("utils.js");

addEventListener("message", event => {
    postMessage(add(event.data[0], event.data[1]));
});