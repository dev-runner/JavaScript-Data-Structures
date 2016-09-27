var stack = require('../data-structures/Stack');

stack.init();

console.log( stack.isEmpty() );

stack.push('x');
stack.push('y');
console.log( stack.pop() );

stack.push('z');

console.log( stack.pop() );
console.log( stack.pop() );
console.log( stack.isEmpty() );