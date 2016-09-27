var dictionary = require('../data-structures/Dictionary');

dictionary.add('A', 10);
dictionary.add('B', 100);
dictionary.add('C', 1000);
dictionary.add('D', 10000);
dictionary.add('E', 100000);

dictionary.traverse(function(elem){ console.log(elem); }); // print all elements
console.log( dictionary.getSize() ); // 5


dictionary.remove('C');
dictionary.traverse(function(elem){ console.log(elem); });
console.log( dictionary.getSize() ); // 4

console.log( dictionary.get('A')); // 10
console.log( dictionary.get('X')); // undefined