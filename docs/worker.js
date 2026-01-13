importScripts("utils.js");

console.log(`${add(1, 11)}`);

addEventListener("message", event => {
    console.log("On worker");
});