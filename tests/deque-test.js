var deque = require('../data-structures/Deque');

deque.pushFront('A');
deque.pushFront('B');
deque.pushFront('C');
deque.pushBack('X');
deque.pushBack('Y');
deque.pushBack('Z');


deque.traverse(function(e){ console.log(e); }); // CBAXYZ

deque.popFront();
deque.popBack();

deque.traverse(function(e){ console.log(e); }); // BAXY

console.log( deque.getSize() ); // 4
console.log( deque.peekFront() ); // B
console.log( deque.peekBack() ); // Y
