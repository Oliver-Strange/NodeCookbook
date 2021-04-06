const fs = require("fs")
const file = "./file.txt"
const moment = require("moment")

// watch accepts three parameters - filepath, array of options, and listener function
    // options can be:
    // Persistent - defaults to true - boolean indicating whether the node process should continue to run while files are still being watched
    // Recursive - defaults to false - boolean that allows user to specify whether changes in subdirectories should be watched, only supported by Mac and Windows
    // Encoding - default is utf8 - specifies which character encoding should be used
// listener function - eventType is either change or rename, trigger is the file that triggered the event
fs.watch(file, (eventType, filename) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a")
    return console.log(`${filename} updated ${time}`)
})