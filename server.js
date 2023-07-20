// core modules
const EventEmitter = require("events");

// custom modules
const logEvents = require("./logEvents");

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add event listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
