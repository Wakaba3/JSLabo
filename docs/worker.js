importScripts("utils.js");

onmessage = event => {
    postMessage(add(5, 15));
}