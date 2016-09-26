/**
 * Implementation of the queue (FIFO) using JavaScript
 * 
 * author: przemek@devrunner.pl
 *
 */


// the easiest way to implement queue is by using an array and built-in push/shift methods
var queue = [];
queue.push('a');
queue.push('b');
queue.push('c');
queue.push('d');
queue.push('e');


// print stack before pop
console.log(queue);

// take the top element
var element = queue.shift();

// print stack and the element after pop
console.log(queue);
console.log(element);