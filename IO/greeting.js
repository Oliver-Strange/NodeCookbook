// STDIN - standard in - an input stream that a program can use to read input from a command shell or Terminal
// STOUT - standard out - the stream that is used to write the output
// STDERR - standard error - is a separate stream that is typically reserved for outputting errors and diagnostic data

process.stdin.on("data", (data) => {
  // processing on each data event
  const name = data.toString().trim().toUpperCase();
  if (name !== "") {
    process.stdout.write(`Hello ${name}!`);
  } else {
    process.stderr.write("Input was empty.");
  }
});