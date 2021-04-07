const fs = require("fs");

const file = fs.createWriteStream("./file.txt");

for (let i = 0; i <= 1000000; i++) {
  file.write(
    "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine. \n"
  );
}

// all streams are instances of the EventEmitter class
// writeable streams emit these events:
    // close - when the stream and any resources have been closed, no more events emitted
    // drain - when the writeable stream can resume writing data
    // error - when stream experiences an error
    // finish - when the writeable stream has ended and all writes are complete
    // pipe - when stream.pipe() method is called on a readable stream
    // unpipe - when stream.unpipe() method is called  