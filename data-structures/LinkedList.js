/**
 * Implementation of the singly-linked list using JavaScript
 *
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
var LinkedList = function LinkedList(){
	
	"use strict";

	// head of the linked list = reference to the first element
	var head = null;

	// count number of elements in the linked list
	var size = 0;

	// creates returns a new node for the linked list
	function createNode(data){
		return {
			data: data,
			next: null,
		};
	}

	// insert new node at the end of list
	function insert(data){

		var newNode = createNode(data);

		if(head === null){
			head = newNode;
			++size;
			return;
		}else{
			var current = head;
			while(current.next != null){
				current = current.next;
			}
			current.next = newNode;
			++size;
			return;
		}
	}

	// inserts new node at the front of list
	function insertFront(data){
		var newNode = createNode(data);
		newNode.next = head;
		head = newNode;
		++size;
	}

	// removes element from the list that holds data
	function remove(data){
		var current = head, previous = null;

		while(current != null){
			if(current.data === data){
				if(previous === null){
					head = current.next;
				}else{
					previous.next = current.next;
				}
				current = null;
				--size;
				return true;
			}
			previous = current;
			current = current.next;
		}
		return false;
	}

	// finds element that holds specified data
	function find(data){
		var current = head;
		while(current != null){
			if(current.data === data){
				return current;
			}
			current = current.next;
		}
		return null;
	}

	// reverts the order of the list - iterative
	function reverseIterative(){
		var current = head, prev = null, next = null;

		while(current != null){
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		head = prev;
	}
	
	// reverts the order in the recursive function calls
	function reverseRecursive(node){
		if(node === null || node.next === null){
			head = node;
			return;
		}
		reverseRecursive(node.next);
		node.next.next = node;
		node.next = null;
	}

	// reverts the order of the list
	function reverse(algorithm){
		
		algorithm = (typeof algorithm === 'undefined') ? 'iterative' : algorithm;

		switch(algorithm){
			case 'recursive':
				return reverseRecursive(head);
			case 'iterative':
			default:
				return reverseIterative();
		}
	}

	// traverse the linked list using the given function and algorithm (recursive/iterative)
	function traverse(f, algorithm){

		f = (typeof f === 'undefined') ? function(n){ console.log(n.data) } : f;
		algorithm = (typeof algorithm === 'undefined') ? 'iterative' : algorithm;

		switch(algorithm){
			case 'recursive':
				return traverseRecursive(head, f);
			case 'iterative':
			default:
				return traverseIterative(f);
		}

	}

	// traverse linked list iteratively
	function traverseIterative(f){
		var current = head;
		while(current !== null){
			f(current);
			current = current.next;
		}
	}

	// traverse linked list recursively
	function traverseRecursive(node, f){
		if(node === null) return;
		f(node);
		traverseRecursive(node.next, f);
	}

	// get size of the linked list
	function getSize(){
		return size;
	}

	// check if linked list is empty
	function isEmpty(){
		return (size === 0);
	}

	// clears the linked list
	function clear(){
		head = null;
		size = 0;
	}

	// linked list public API
	var publicApi = {
		insert: insert,
		insertFront: insertFront,
		remove: remove,
		find: find,
		reverse: reverse,
		traverse: traverse,
		getSize: getSize,
		isEmpty: isEmpty,
		clear: clear,
	};

	return publicApi;

};

module.exports = LinkedList;