const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data-test");

// Check if the dataFolder folder already exists or not, if not then create the dataFolder
if(!fs.existsSync(dataFolder)){
  fs.mkdirSync(dataFolder)
  console.log("Data folder created!");
}

const filePath = path.join(dataFolder, "example-test.txt");

// Sync create the file
fs.writeFileSync(filePath, "Hello from Node.js");
console.log("File created successfully!");

// Sync read from the file
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("Content from the file : ", readContentFromFile);

// Sync append content in the file.
fs.appendFileSync(filePath, "\nContent appended by DeathSlayer!");
console.log("New content added");

const asyncFilePath = path.join(dataFolder, "async-example-test.txt")

// Async create the file
fs.writeFile(asyncFilePath, "Hello Async Node.js", (err) => {
  if(err) throw err;
  console.log("Async file is created successfully!");
  
  // Async read from the file
  fs.readFile(asyncFilePath, "utf8", (err, asyncFileData) => {
    if(err) throw err;
    console.log("Content from Async file: ", asyncFileData);
    
    // Async append content in the file.
    fs.appendFile(asyncFilePath, "\nAsync data appended by DeathSlayer!!", (err) => {
      if(err) throw err;
      console.log("Async content appended successfully!");
    })
  })
})