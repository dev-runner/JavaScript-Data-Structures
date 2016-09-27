/**
 * Implementation of the queue (FIFO) using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 * 
 */
module.exports = (function Queue(){

	var queue;

	function init(){
		queue = [];
	}

    function enqueue(newElement){
    	queue.push(newElement);
    }

    function dequeue(){
    	return queue.shift();
    }

	var publicApi = {
		init: init,
		enqueue: enqueue,
		dequeue: dequeue,
	};

	return publicApi;

})();