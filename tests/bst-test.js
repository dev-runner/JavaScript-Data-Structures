var bst = require('../data-structures/BinarySearchTree.js');

bst.insert(7);
bst.insert(5);
bst.insert(13);
bst.insert(10);
bst.insert(15);

var node = bst.search(10);
console.log(node);