const EventEmitter = require("events");

// Create an EventEmitter object
var eventEmitter = new EventEmitter();

// Create an event listerners
var listener1 = (msg) => {
  console.log("Message from listener1: " + msg);
};

var listener2 = (msg) => {
  console.log("Message from listener2: " + msg);
};

//register the listeners to the event
eventEmitter.on("myEvent1", listener1);
eventEmitter.on("myEvent2", listener1);
eventEmitter.on("myEvent2", listener2);

//Remove only one event listener
// eventEmitter.removeListener('myEvent', listener1);

// Fire the 'myEvent' event
eventEmitter.emit("myEvent1", "Event 1 occurred now");
eventEmitter.emit("myEvent2", "Event 2 occurred now");

//Removing all listeners
// eventEmitter.removeAllListeners('myEvent');

// eventEmitter.emit('myEvent', "Event occurred");
