/**
 * Implementation of the binary search tree (BST) using JavaScript
 *
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
var BST = function BinarySearchTree(){

	"use strict";

	// root of the tree
	var root = null;

	// create and return new node object
	function createNode(key){
		return {
			key: key,
			left: null,
			right: null,
			parent: null,
		};
	}

	// searches for the given key iteratively
	function search(key){
		var current_node = root;

		while(current_node != null && current_node.key !== key){
			if(key < current_node.key){
				current_node = current_node.left;
			} else {
				current_node = current_node.right;
			}
		}
		return current_node;
	}

	// find minimum node
	function searchMinNode(node){
		while(node !== null && node.left !== null){
			node = node.left;
		}
		return node;
	}
	function searchMin(){
		return searchMinNode(root);
	}

	// find maximum node
	function searchMaxNode(node){
		while(node !== null && node.right !== null){
			node = node.right;
		}
		return node;
	}
	function searchMax(){
		return searchMaxNode(root);
	}

	// inserts new node to the BST
	function insert(key){
		
		if(root === null){
			root = createNode(key);
		}
		else {
			var current_node = root;
			var parent_node = root;
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
			var newNode = createNode(key);
			newNode.parent = parent_node;
			if(subtree === 'l'){
				parent_node.left = newNode;
			}
			else if(subtree === 'r'){
				parent_node.right = newNode;
			}
		}
	}

	// finds a successor of the node
	function findSuccessor(node){
		if(node.right !== null){
			return searchMinNode(node.right);
		}
		var tmp_node = node.parent;
		while(tmp_node !== null && tmp_node.left !== node){
			node = tmp_node;
			tmp_node = tmp_node.parent;
		}
		return tmp_node;
	}

	// finds predecessor of the node
	function findPredecessor(node){
		if(node.left !== null){
			return searchMaxNode(node.left);
		}
		var tmp_node = node.parent;
		while(tmp_node !== null && tmp_node.right !== node){
			node = tmp_node;
			tmp_node = tmp_node.parent;
		}
		return tmp_node;
	}

	// deletes node from BST
	function removeNode(node){
		var x = y = null;

		if(node.left === null || node.right === null){
			y = node;
		}
		else {
			y = findSuccessor(node);
		}
		if(y.left !== null){
			x = y.left;
		}
		else {
			x = y.right;
		}
		if(x !== null){
			x.parent = y.parent;
		}
		if(y.parent === null){
			root = x;
		}
		else {
			if(y === y.parent.left) y.parent.left = x;
			else y.parent.right = x;
		}
		if(y !== node){
			node.key = y.key;
		}
		return y;
	}
	function remove(key){
		var node = search(key);
		if(node !== null) {
			removeNode(node);
		}
	}

	// finds height of the tree
	function findHeight(node){
		if(node === null){
			return -1;
		}
		var leftHeight = findHeight(node.left);
		var rightHeight = findHeight(node.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}
	function getTreeHeight(){
		return findHeight(root);
	}

	// traverse bst tree in-order, f - callback function
	function traverse_inorder(node, f){
		if(node === null) return;
		traverse_inorder(node.left, f);
		f(node);
		traverse_inorder(node.right,f);
	}
	function traverse_preorder(node, f){
		if(node === null) return;
		f(node);
		traverse_preorder(node.left, f);
		traverse_preorder(node.right,f);	
	}
	function traverse_postorder(node, f){
		if(node === null) return;
		traverse_postorder(node.left, f);
		traverse_postorder(node.right,f);
		f(node);
	}
	function traverse(f, algorithm){

		f = (typeof f === 'undefined') ? function(n){ console.log(n.key);} : f;
		algorithm = (typeof algorithm === 'undefined') ? 'inorder' : algorithm;

		switch(algorithm){
			case 'preorder':
				traverse_preorder(root, f);
				break;
			case 'postorder':
				traverse_postorder(root, f);
				break;
			case 'inorder':
			default:
				traverse_inorder(root, f);
		}
	}

	var publicApi = {
		search: search,
		searchMin: searchMin,
		searchMax: searchMax,
		insert: insert,
		remove: remove,
		traverse: traverse,
		getTreeHeight: getTreeHeight,
	};

	return publicApi;

};

module.exports = BST;