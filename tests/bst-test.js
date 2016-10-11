var bst = require('../data-structures/BinarySearchTree.js');

bst.insert(3);
bst.insert(1);

// traverse bst tree (in-order)
bst.traverse( function(node){console.log(node.key)} );

// try to find node
/*
var found_node = bst.search(10);
if(found_node){
	console.log(found_node);	
}else{
	console.log('node not found');
}


var min_node = bst.searchMin();
console.log(min_node);

var max_node = bst.searchMax();
console.log(max_node);
*/
/*
console.log('Deleting 7...');
bst.remove(7);
bst.traverse( function(node){console.log(node.key)} );
*/

console.log('Height of this tree is: ' + bst.getTreeHeight() );