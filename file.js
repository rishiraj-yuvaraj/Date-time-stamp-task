
const fs = require("fs");

//The code is to create a current time.
const today = new Date();

let hours = today.getHours();
let mins = today.getMinutes();
let secs = today.getSeconds();

let result = `${hours}:${mins}:${secs}`;

//appendFile will create a new file in a mentioned folder
fs.appendFile(`./CurrentTime/currentTime.txt`,"\n" + result, (err) => {
    console.log(result);
});