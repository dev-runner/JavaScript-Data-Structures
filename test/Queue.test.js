var chai = require('chai');
var expect = chai.expect;

describe('Queue', function(){

	var queue = require('../data-structures/Queue')();

	describe('#isEmpty()', function(){

		it('should be empty on Queue init', function(){
			expect( queue.getSize() ).to.equal(0);
		});

		it('should not be empty if elements are added', function(){
			queue.enqueue('a');
			expect( queue.getSize() ).to.be.at.least(1);
		});

	});

	describe('#clear()', function(){

		it('should empty the queue', function(){
			queue.enqueue('a');
			queue.enqueue('b');
			queue.enqueue('c');
			queue.clear();

			expect(queue.getSize()).to.equal(0);
			expect(queue.peek()).to.be.undefined;
		});

	});

	describe('#enqueue()', function(){

		it('should enqueue new element', function(){
			var beforeSize = queue.getSize();
			queue.enqueue('x');
			var afterSize = queue.getSize();

			// check if size of the queue increases by exactly one
			expect(afterSize-beforeSize).to.equal(1);
			
			var elem = null;
			while(!queue.isEmpty()){
				elem = queue.dequeue();
			}
			// last element should be the inserted element
			expect(elem).to.equal('x');
		});

	});

	describe('#dequeue()', function(){

		it('should dequeue and return the first element in the queue', function(){
			var nextElement = queue.peek();
			expect(queue.dequeue()).to.equal(nextElement);
		});
	});

	describe('#getSize()', function(){
		it('should return the number of elements in the queue', function(){
			var size = queue.getSize();
			var count = 0;
			while(!queue.isEmpty()){
				queue.dequeue();
				++count;
			}
			expect(size).to.equal(count);
		});

		it('should return zero if queue is empty', function(){
			queue.clear();
			expect(queue.getSize()).to.equal(0);
		});

	});

});