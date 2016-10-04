var list = require('../data-structures/LinkedList');

// insert some elements to the list
list.insert('A');
list.insert('B');
list.insert('C');
list.insert('D');

console.log('printing the list...');
// display the list
var f = function(e){ console.log(e.data); };
list.traverse(f);

// reverse order of the list
console.log('reverting order of the list...');
list.reverse();
list.traverse(f);