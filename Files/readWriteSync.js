// Import the core File System module - API to interact with file system
const fs = require("fs");

// Import core path module - API to interact with file and directory paths
const path = require("path");

// Store file path and join the path with the file path, process cwd returns the current directory of the Node process, currently expecting hello text to be in same directory
const filepath = path.join(process.cwd(), "hello.txt");

// Read file passing in the file path as well as the encoding, if encoding omitted function will return Buffer object
const contents = fs.readFileSync(filepath, "utf-8");
console.log("File contents:", contents);

// Manipulate the file contents 
const upperContents = contents.toUpperCase();

// Update file passing path and updated content
fs.writeFileSync(filepath, upperContents);
console.log("File updated.");

// Important note - both readFileSync and writeFileSync are synchronous meaning they will block/delay concurrent operations until read/write is complete