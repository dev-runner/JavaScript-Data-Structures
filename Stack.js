/**
 * Implementation of the stack using JavaScript
 * 
 * author: przemek@devrunner.pl
 *
 */


// the easiest way to implement stack is by using an array and built-in push/pop methods
var stack = [];
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');


// print stack before pop
console.log(stack);

// take the top element
var element = stack.pop();

// print stack and the element after pop
console.log(stack);
console.log(element);