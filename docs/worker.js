importScripts("utils.js");

console.log(`${add(1, 11)}`);

this.addEventListener("message", event => {
    console.log("On worker");

    postMessage(add(30, 70));
});