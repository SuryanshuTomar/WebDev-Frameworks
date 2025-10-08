const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Register a listener for the 'customEvent'
// First argument is the event name, second is the callback function which receives the event data
myEmitter.on("customEvent", (name) => {
	console.log("Hello, " + name);
});

// Emit the event multiple times with different arguments
// First argument is the event name, second is the data to pass to the listener
myEmitter.emit("customEvent", "Alice");
myEmitter.emit("customEvent", "Bob");
myEmitter.emit("customEvent", "Charlie");
