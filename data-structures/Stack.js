/**
 * Implementation of the stack (LIFO) using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
module.exports = (function Stack(){

	var stack;

	function init(){
		stack = [];
	}

	function push(newElement){
		stack.push(newElement);
	}

	function pop(){
		return stack.pop();
	}

	function peek(){
		return stack[stack.length-1];
	}

	function isEmpty(){
		return (stack.length === 0);
	}

	var publicApi = {
		init: init,
		push: push,
		pop: pop,
		isEmpty: isEmpty,
		peek: peek
	};

	return publicApi;

})();