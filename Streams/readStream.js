const fs = require("fs");

// create readable stream
const rs = fs.createReadStream("./file.txt");

// register a data event handler which will execute each time a chunk of data has been read
rs.on("data", (data) => {
  console.log("Read chunk: ", data.toString());
});

// register an end event handler which will fire when there is no more data to be consumed by the stream
rs.on("end", () => {
  console.log("No more data.");
});

// readable streams emit these events:
    // close - when the stream and any resources have been closed, no further events emitted
    // data - when new data is read from the stream
    // end - when all available data have been read
    // error - when stream experiences an error
    // pause - when readable stream is paused
    // readable - when there is data available to be read
    // resume - when a readable stream resumes after being in paused state