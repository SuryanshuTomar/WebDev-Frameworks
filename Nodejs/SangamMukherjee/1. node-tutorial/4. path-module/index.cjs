const path = require("path");

// File name 
console.log("File name: ", path.basename(__filename));;

// Directory name of the current modules
console.log("Directory name: ", path.dirname(__filename));

// File extension
console.log("File extension: ", path.extname(__filename));

// Join paths
console.log("Joined paths: ", path.join(__dirname, "test", "hello.html"));

// Resolve paths - This checks whether the path exists or not and then gives the absolute path
console.log("Resolved paths: ", path.resolve(__dirname, "test", "hello.html"));

// Normalize paths - This removes any redundant or unnecessary characters from the path
console.log("Normalized paths: ", path.normalize(__dirname + "/test/////hello.html"));