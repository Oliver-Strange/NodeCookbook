// a program that watches for changes in a file 
const fs = require("fs")

const file = "./file.txt"

// watchFile accepts three arguments - filename, list of options, and a listener function
// options can include the following: 
    // BigInt - defaults to false, when true numeric values from object Stats returned as Big Integers allowing large numbers reliably 
    // Persistent - defaults to true, whether Node process should continue to run while files are still being watched
    // Interval - default is 5,007 milliseconds, controls how often file should be polled for changes
// listener function will execute every time a change is detected, arguments current and previous are Stats objects
fs.watchFile(file, (current, previous) => {
    return console.log(`${file} updated ${(current.mtime)}`)
})