// a program that gives information about the file we pass to it as a parameter
const fs = require("fs");

// read the filename as a command-line argument
const file = process.argv[2];

// print metadata function
function printMetadata(file) {
  try {
    const fileStats = fs.statSync(file);
    console.log(fileStats);
  } catch (error) {
      console.error("Error reading file path: ", file)
  }
}

printMetadata(file);
