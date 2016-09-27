var stack = require('../data-structures/Stack');

console.log( stack.isEmpty() ); // true

stack.push('x');
stack.push('y');
console.log( stack.pop() ); // y

stack.push('z');

console.log( stack.getSize() ); // 2
console.log( stack.isEmpty() ); // false

console.log( stack.pop() ); // z
console.log( stack.pop() ); // x
console.log( stack.isEmpty() ); // true