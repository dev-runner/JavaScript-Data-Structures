/**
  * Implementation of the doubly-linked list in JavaScript.
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
var DoubleLinkedList = function(){

	"use strict";

	// head of the list
	var head = getNode(null);

	var size = 0;

	// create and return a new node
	function getNode(data){
		return {
			data: data,
			prev: null,
			next: null
		};
	}

	// insert new element to the front
	function pushFront(data){
		var newNode = getNode(data);
		
		if(head.next === null && head.prev === null){ // empty list
			head.next = newNode;
			head.prev = newNode;
		}
		else {
			newNode.next = head.next;
			head.next.prev = newNode;
			head.next = newNode;
		}
		++size;
	}

	// insert new element to the back
	function pushBack(data){
		var newNode = getNode(data);

		if(head.next === null && head.prev === null){ // empty list
			head.next = newNode;
			head.prev = newNode;
		}
		else {
			newNode.prev = head.prev;
			head.prev.next = newNode;
			head.prev = newNode;
		}
		++size;
	}

	// remove and return front element
	function popFront(){
		
		var frontNode = head.next;

		// delete front node
		if(frontNode !== null){
			if(frontNode.next !== null){
				frontNode.next.prev = null;
				head.next = frontNode.next;
			}
			else {
				head.next = head.prev = null;
			}
			--size;
		}
		return frontNode;
	}

	// remove and return back element
	function popBack(){

		var backNode = head.prev;

		if(backNode !== null){

			if(backNode.prev !== null){
				backNode.prev.next = null;
				head.prev = backNode.prev;
			}
			else {
				head.next = head.prev = null;
			}
			--size;
		}
		return backNode;
	}

	// remove all elements that contain data
	function remove(data){
		var currentNode = head.next;

		while(currentNode !== null){
			if(currentNode.data === data){
				if(currentNode.next !== null && currentNode.prev !== null){
					currentNode.prev.next = currentNode.next;
					currentNode.next.prev = currentNode.prev;
				}
				else if(currentNode.next !== null){
					currentNode.next.prev = null;
					head.next = currentNode.next;
				}
				else if(currentNode.prev !== null){
					currentNode.prev.next = null;
					head.prev = currentNode.prev;
				}
				else {
					head.prev = head.next = null;
				}
				--size;
			}
			currentNode = currentNode.next;
		}
	}

	// get list size
	function getSize(){
		return size;
	}

	// check if list is empty
	function isEmpty(){
		return (size === 0);
	}

	// reverse order
	function reverse(){
		
		var currentNode = head.next;

		if(currentNode !== null && currentNode.next !== null){
			while(currentNode !== null){
				var tmp = currentNode.next;
				currentNode.next = currentNode.prev
				currentNode.prev = tmp;
				currentNode = tmp;
			}
			tmp = head.next;
			head.next = head.prev;
			head.prev = tmp;
		}
	}

	// traverse the list, use f as callback on each node
	function traverse(f){
		var currentNode = head.next;

		while(currentNode !== null){
			f(currentNode);
			currentNode = currentNode.next;
		}
	}

	var publicApi = {
		pushFront: pushFront,
		pushBack: pushBack,
		popFront: popFront,
		popBack: popBack,
		reverse: reverse,
		remove: remove,
		traverse: traverse,
		getSize: getSize,
		isEmpty: isEmpty,
	};

	return publicApi;

};

module.exports = DoubleLinkedList;