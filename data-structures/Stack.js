/**
 * Implementation of the stack (LIFO) using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
module.exports = (function Stack(){

	var stack = [];

	function push(newElement){
		stack.push(newElement);
	}

	function pop(){
		return stack.pop();
	}

	function peek(){
		return stack[stack.length-1];
	}

	function getSize(){
		return stack.length;
	}

	function isEmpty(){
		return (stack.length === 0);
	}

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

})();