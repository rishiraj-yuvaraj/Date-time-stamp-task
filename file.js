
const fs = require("fs");

const today = new Date();

let hours = today.getHours();
let mins = today.getMinutes();
let secs = today.getSeconds();

let result = `${hours}:${mins}:${secs}`;

fs.appendFile(`./CurrentTime/currentTime.html`,"\n" + result, (err) => {
    console.log(result);
});