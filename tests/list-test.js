var list = require('../data-structures/LinkedList');

// insert some elements to the list
list.insert('A');
list.insert('B');
list.insert('C');
list.insert('D');
list.insert('E');

list.insertBeginning('X');
list.insertBeginning('Y');

// display the list
var f = function(e){ console.log(e.data); };
list.traverse(f);

// delete element
list.deleteElement('C');

// shouldn't be able to find
var found = list.find('C');
console.log(found);
