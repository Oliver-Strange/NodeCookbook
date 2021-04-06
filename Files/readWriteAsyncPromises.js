// combining Promises API with async/await syntax
const fs = require("fs").promises;
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

async function run() {
  try {
    const contents = await fs.readFile(filepath, "utf-8");
    console.log("File contents: ", contents);
  } catch (error) {
    console.error(error);
  }
}

run();
