/**
  * Binary Heap implementation in JavaScript.
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
var Heap = function(){

	"use strict";

	var heap = [-Infinity];

	// insert element x to the heap
	function insert(x){
		heap.push(x);
		upheap(heap.length-1);
	}

	// bubble up the element to preserve heap order
	function upheap(i){
		var p = Math.floor(i/2), v = heap[i];

		while(heap[p] > v){
			heap[i] = heap[p];
			i = p;
			p = Math.floor(p/2);
		}
		heap[i] = v;
	}

	// get minimal element
	function getMin(){
		var min = heap[1];
		var end = heap.pop(); // get last element
		if(heap.length > 1){
			heap[1] = end;
			downheap(1);
		}
		return min;
	}

	// sink down element to preserve heap order
	function downheap(i){

		var v = heap[i];

		while(true){
			var lChild = 2*i, rChild = 2*i+1;
			var swapIndex = null;

			if(lChild < heap.length && heap[lChild] < v){
				swapIndex = lChild;
			}
			if(rChild < heap.length && heap[rChild] < (swapIndex === null ? v : heap[lChild]) ){
				swapIndex = rChild;
			}
			if(swapIndex === null) break;

			heap[i] = heap[swapIndex];
			heap[swapIndex] = v;
			i = swapIndex;
		}

	}

	// construct heap from the given array of elements
	function construct(arr){
		var n = arr.length;
		heap = heap.concat(arr);

		for(var i = Math.floor(n/2); i>=1; --i){
			downheap(i);
		}
	}

	// get heap size
	function getSize(){
		return (heap.length-1);
	}

	var publicApi = {
		construct: construct,
		insert: insert,
		getMin: getMin,
		getSize: getSize
	};
	return publicApi;

};

module.exports = Heap;