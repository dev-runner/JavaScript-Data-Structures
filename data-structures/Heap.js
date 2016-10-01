"use strict";

/**
  * Implementation of the binary heap (priority queue) in JavaScript
  *
  *
  * author: Przemyslaw Jazlo <przemek@devrunner.pl>
  * 
  */
var Heap = (function(){

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

})();

module.exports = Heap;