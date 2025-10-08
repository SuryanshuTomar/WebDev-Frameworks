const EventEmitter = require("events");

class CustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greetings = "Hello";
  }

  onGreet(name) {
    this.emit("onGreet", `${this.greetings}, ${name}!`);
  }
}

const myEmitter = new CustomEmitter();

// Register a listener for the custom event
myEmitter.on("onGreet", (name) => {
  console.log(name);
});

// Emit the custom event
myEmitter.onGreet("Alex Mercer");