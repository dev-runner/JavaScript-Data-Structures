/**
  * Double-ended queue (dequeue) implemented in JavaScript.
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
var Deque = function Deque(){

	"use strict";

	var deque = [];

	function pushFront(element){
		deque.unshift(element);
	}

	function pushBack(element){
		deque.push(element);
	}

	function popFront(){
		deque.shift();
	}

	function popBack(){
		deque.pop();
	}

	function peekFront(){
		return deque[0];
	}

	function peekBack(){
		return deque[deque.length-1];
	}

	function clear(){
		deque = [];
	}

	function getSize(){
		return deque.length;
	}

	function traverse(f){
		for(var i=0, l=deque.length; i<l; ++i){
			f(deque[i]);
		}
	}

	var publicApi = {
		pushFront: pushFront,
		pushBack: pushBack,
		popFront: popFront,
		popBack: popBack,
		peekFront: peekFront,
		peekBack: peekBack,
		clear: clear,
		getSize: getSize,
		traverse: traverse,
	};

	return publicApi;

};

module.exports = Deque;