/**
 * Implementation of the double linked list (circular) using JavaScript
 *
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
var DoubleLinkedList = (function(){

	var head = null, tail = null;
	var size = 0;

	function getNode(data){
		return {
			data: data,
			prev: null,
			next: null
		};
	}

	function pushFront(data){

	}

	function pushBack(data){

	}

	function popFront(){

	}

	function popBack(){

	}

	function getSize(){

	}

	function isEmpty(){
		return (size === 0);
	}

	function reverse(){

	}

	var publicApi = {

	};

	return publicApi;

})();

module.exports = DoubleLinkedList;