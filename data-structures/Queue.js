/**
 * Implementation of the queue (FIFO) using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 * 
 */
var Queue = (function Queue(){

	var queue = [];

	// add new element to the queue
    function enqueue(newElement){
		queue.push(newElement);
    }

    // remove element from the queue
    function dequeue(){
    	return queue.shift();
    }

    // returns size of the queue
    function getSize(){
		return queue.length;
	}

	// returns first element without removing from the queue
	function peek(){
		return queue[0];
	}

	// checks if queue is empty
	function isEmpty(){
		return (queue.length === 0);
	}

	// clears the queue
	function clear(){
		queue = [];
	}

	var publicApi = {
		enqueue: enqueue,
		dequeue: dequeue,
		getSize: getSize,
		peek: peek,
		isEmpty: isEmpty,
		clear: clear
	};

	return publicApi;

})();

module.exports = Queue;