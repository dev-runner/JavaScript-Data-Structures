/**
 * Implementation of the stack (LIFO) using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
module.exports = (function Stack(){

	var stack = [];

	// inserts new element to the stack
	function push(newElement){
		stack.push(newElement);
	}

	// removes and returns the top element
	function pop(){
		return stack.pop();
	}

	// returns the top element (without removing it from the stack)
	function peek(){
		return stack[stack.length-1];
	}

	// returns the stack size
	function getSize(){
		return stack.length;
	}

	// returns true if stack is empty
	function isEmpty(){
		return (stack.length === 0);
	}

	// clears the stack
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