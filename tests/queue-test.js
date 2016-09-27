var queue = require('../data-structures/Queue');

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.enqueue('e');

console.log( queue.getSize() ); // 5

console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.dequeue() );

console.log( queue.getSize() ); // 1
console.log( queue.peek() ); // e

// last element
console.log( queue.dequeue() ); // e
console.log( queue.getSize() ); // 0
console.log( queue.peek() ); // undefined