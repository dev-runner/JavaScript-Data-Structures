var queue = require('../data-structures/Queue');

queue.init();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');

console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.dequeue() );