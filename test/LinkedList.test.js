var chai = require('chai');
var expect = chai.expect;

describe('Singly Linked List', function(){

	var LinkedList = require('../data-structures/LinkedList'), list = null;

	beforeEach(function(){
		list = LinkedList();
		list.insert('a');
		list.insert('b');
		list.insert('c');
		// [a] --> [b] --> [c] --> null
	});


	describe("#traverse", function(){
		it("should traverse the linked list", function(){
			var s = '';
			list.traverse(function(node){
				s += node.data;
			});
			expect(s).to.equal('abc');
		});
	});


	describe("#insert()", function(){
		it("should insert new element at the end of list", function(){
			list.insert('d');
			var s = '';
			list.traverse(function(node){ s += node.data; });
			expect(s).to.equal('abcd');
		});
	});


	describe("#insertFront()", function(){
		it("should insert the new element at the front of list", function(){
			list.insertFront('x');
			var s = '';
			list.traverse(function(node){ s += node.data; });
			expect(s).to.equal('xabc');
		});
	});


	describe("#remove()", function(){
		it("should remove the element from linked list", function(){
			list.remove('b');
			var s = '';
			list.traverse(function(node){ s += node.data; });
			expect(s).to.equal('ac');
		});

		it("should not change the list if the element does not exist", function(){
			list.remove('x');
			var s = '';
			list.traverse(function(node){ s += node.data; });
			expect(s).to.equal('abc');
		});
	});


	describe("#find()", function(){
		it("should return the found node", function(){
			var a = list.find('a');
			expect(a).to.not.be.null;

			var b = list.find('b');
			expect(b).to.not.be.null;

			var c = list.find('c');
			expect(c).to.not.be.null;

		});

		it("should return null if the element does not exist in the linked list", function(){
			var x = list.find('x');
			expect(x).to.be.null;
		});
	});


	describe("#getSize()", function(){
		it("should return the size of linked list", function(){
			expect(list.getSize()).to.equal(3);
		});

		it("should return zero when the linked list is empty", function(){
			var newList = LinkedList();
			expect(newList.getSize()).to.equal(0);
	 	});
	});


	describe("#clear()", function(){
		it("should clear the linked list", function(){
			list.clear();
			var s = '';
			list.traverse(function(node){ s += node.data; });
			expect(s).to.be.empty;
		});
	});


	describe("#reverse()", function(){
		it("should reverse the order of the list", function(){
			list.reverse();
			var s = '';
			list.traverse(function(node){ s += node.data; });
			expect(s).to.equal('cba');
		});
	});

});