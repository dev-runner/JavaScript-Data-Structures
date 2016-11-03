/**
  * Implementation of the stack (LIFO) in JavaScript.
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
 var Stack = function Stack(){

 	"use strict";

 	// js array is the data structure that can be used for stack implementation
	var stack = [];

	// inserts new element to the stack
	function push(newElement){
		stack.push(newElement);
	}

	// removes and returns the top element
	function pop(){
		return stack.pop();
	}

	// returns the top element (without removing it from the stack)
	function peek(){
		return stack[stack.length-1];
	}

	// returns the stack size
	function getSize(){
		return stack.length;
	}

	// returns true if stack is empty
	function isEmpty(){
		return (stack.length === 0);
	}

	// clears the stack
	function clear(){
		stack = [];
	}

	var publicApi = {
		push: push,
		pop: pop,
		isEmpty: isEmpty,
		peek: peek,
		getSize: getSize,
		clear: clear
	};

	return publicApi;

};

module.exports = Stack;