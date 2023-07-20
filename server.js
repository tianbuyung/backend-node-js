// core modules
const EventEmitter = require("events");
const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

// custom modules
const logEvents = require("./logEvents");

class Emitter extends EventEmitter {}

// initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// myEmitter.on("log", (msg) => logEvents(msg));

// myEmitter.emit("log", "Log event emitted!");
