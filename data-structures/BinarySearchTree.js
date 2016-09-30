/**
 * Implementation of the binary search tree (BST) using JavaScript
 *
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
module.exports = (function BinarySearchTree(){

	var root = null;

	// create and return new node object
	function createNode(key){
		return {
			key: key,
			left: null,
			right: null
		};
	}

	// searches for the given key iteratively
	function search(key){
		var current_node = root;

		while(current_node != null){
			if(current_node.key === key){
				return current_node;
			}
			else if(key < current_node.key){
				current_node = current_node.left;
			}
			else{
				current_node = current_node.right;
			}
		}
		return null; // key not found
	}

	// inserts new node to the BST
	function insert(key){
		
		if(root === null){
			root = createNode(key);
		}
		else {
			var current_node = parent_node = root;
			var subtree;

			while(current_node !== null){
				parent_node = current_node;

				if(current_node.key < key){
					current_node = current_node.right; 
					subtree = 'r';
				}else{
					current_node = current_node.left;
					subtree = 'l';
				}
			}
			if(subtree === 'l'){
				parent_node.left = createNode(key);
			}
			else if(subtree === 'r'){
				parent_node.right = createNode(key);
			}
		}
	}

	function traverse_node(node){
		if(node === null) return;
		console.log(node.key);
		traverse_node(node.left);
		traverse_node(node.right);
	}

	function traverse(){
		traverse_node(root);
	}

	var publicApi = {
		search: search,
		insert: insert,
		traverse: traverse,
	};

	return publicApi;

})();