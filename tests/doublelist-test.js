var dlist = require('../data-structures/DoubleLinkedList.js');

console.log('size: ' + dlist.getSize() );

dlist.pushBack(33);
dlist.pushBack(10);

dlist.traverse( function foo(e){ console.log(e.data); });
console.log('size: ' + dlist.getSize() );

console.log('Remove element 33');
dlist.remove(33);
dlist.traverse( function foo(e){ console.log(e.data); });

console.log('size: ' + dlist.getSize() );