/**
  * Implementation of the singly-linked list in JavaScript.
  *
  * Copyright (c) 2016 Przemek Jażło <przemek@devrunner.pl>
  *
  * Permission is hereby granted, free of charge, to any person obtaining 
  * a copy of this software and associated documentation files (the "Software"),
  * to deal in the Software without restriction, including without limitation the
  * rights to use, copy, modify, merge, publish, distribute, sublicense,
  * and/or sell copies of the Software, and to permit persons to whom the Software
  * is furnished to do so, subject to the following conditions:
  * 
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
  * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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