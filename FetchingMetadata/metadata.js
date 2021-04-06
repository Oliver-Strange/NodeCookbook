// a program that gives information about the file we pass to it as a parameter
const fs = require("fs");

// read the filename as a command-line argument
const file = process.argv[2];

// print metadata function
function printMetadata(file) {
    // wrapped in a try/catch to handle invalid file paths
  try {
      // statSync is a synchronous function that returns info about the file path that is passed to it, it can be a file or directory, info returned is in form of stats object
    const fileStats = fs.statSync(file);
    console.log(fileStats);
  } catch (error) {
      console.error("Error reading file path: ", file)
  }
}

printMetadata(file);
