var assert = require('chai').assert;

describe('Stack', function(){

	var stack = require('../data-structures/Stack')();

	describe('#isEmpty()', function(){
		
		it('should be empty on stack init', function(){
			assert.isTrue(stack.isEmpty());	
		});

		it('should not be empty after at least one element is added', function(){
			stack.push('a');
			assert.isFalse(stack.isEmpty());
		});

	});


	describe('#push()', function(){

		it('pushes the element at the top of stack', function(){
			stack.push('x');
			assert.equal('x', stack.peek());
		});

	});


	describe('#pop()', function(){

		it('should remove and return the top element from stack', function(){
			stack.push('z');
			var topElement = stack.pop();
			assert.equal('z', topElement);
		});

		it('should return undefined when stack is empty', function(){
			stack.clear();
			assert.isUndefined(stack.pop());
		});

	});


	describe('#peek()', function(){

		it('should return value that is currently at the top of stack', function(){
			stack.push('y');
			assert.equal('y', stack.peek());
		});

		it('should return undefined when the stack is empty', function(){
			stack.clear();
			assert.isUndefined(stack.peek());
		});

	});


	describe('#clear()', function(){

		it('should clear the stack', function(){
			
			stack.push('a');
			stack.push('b');
			stack.push('c');
			stack.clear();

			assert.equal(0, stack.getSize() );
		});

	});


	describe('#getSize()', function(){

		it('should return current size of stack', function(){
			stack.clear();
			stack.push(1);
			stack.push(2);
			stack.push(3);
			assert.equal(3, stack.getSize());
		});

		it('should return zero for empty stack', function(){
			stack.clear();
			assert.equal(0, stack.getSize());
		});

	});


});