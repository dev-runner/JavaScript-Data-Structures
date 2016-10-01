var heap = require('../data-structures/Heap');

// construct the heap
var arr = [3,10,89,5,2,1,100,111];
heap.construct(arr);

// heap sort
console.log('in order...');
while(heap.getSize() > 0){
	console.log( heap.getMin() );
}