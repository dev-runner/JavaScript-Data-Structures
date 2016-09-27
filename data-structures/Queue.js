/**
 * Implementation of the queue (FIFO) using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 * 
 */
module.exports = (function Queue(){

	var queue = [];

    function enqueue(newElement){
    	queue.push(newElement);
    }

    function dequeue(){
    	return queue.shift();
    }

    function getSize(){
		return queue.length;
	}

	function peek(){
		return queue[0];
	}

	function isEmpty(){
		return (queue.length === 0);
	}

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