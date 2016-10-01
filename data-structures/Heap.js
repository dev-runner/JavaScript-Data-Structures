var Heap = (function(){

	var heap = [-Infinity];


	function insert(x){
		heap.push(x);
		upheap(heap.length-1);
	}

	function upheap(i){
		var p = Math.floor(i/2);
		var v = heap[i];

		while(heap[p] > v){
			heap[i] = heap[p];
			i = p;
			p = Math.floor(p/2);
		}
		heap[i] = v;
	}

	function getMin(){

	}

	function downheap(){

	}

	function traverse(){
		for(let i=1, l=heap.length; i<l; ++i){
			console.log(heap[i]);
		}
	}


	var publicApi = {
		insert: insert,
		traverse: traverse,
	};
	return publicApi;

})();

module.exports = Heap;