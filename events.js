const  EventEmitter = require('events');
const eventEmitter = new EventEmitter();
let count = 0;
eventEmitter.on('my_event', () => {
    count++;
    console.log('my_event has occurred ' + count + ' times.');
});
eventEmitter.emit('my_event');
eventEmitter.emit('my_event');
eventEmitter.emit('my_event');

