// With callback functions
const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf-8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File contents: ", contents);
  const upperContents = contents.toUpperCase();

  // calling the update file function within the callback function of read file
  // adding delay to demo async functionality 
  setTimeout(() => updateFile(filepath, upperContents), 10) ;
});

function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, (err) => {
    if (err) throw err;
    console.log("File updated.");
  });
}

// Demo async functionality by showing timing 
setInterval(() => process.stdout.write("**** \n"), 1).unref()