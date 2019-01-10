// function sayHello(name){
//   console.log('Hello' + name);
// }
//
//  sayHello('Mosh');

// console.log(window);
// var message ='testing';
// console.log(global.message);

// console.log(module);

// var logger = require('./logger');
// console.log('message');


// const logger = require('./logger');
// // logger =1;
// console.log('message');


// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);


// const os = require('os');
//
// var totalMemory =os.totalmen();
// var freeMemory =os.freemen();
//
// console.log('Total Memory: ' + totalMemory);
// // Template string
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
