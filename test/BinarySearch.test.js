var expect = require('chai').expect;
var BinarySearch = require('../algorithms/BinarySearch');


describe("Binary Search", function(){

	var bs = null;
	
	before(function(){
		var data = [3, 5, 9, 12, 17, 22, 31, 44, 45, 67, 77, 100, 121];
		bs = BinarySearch(data);
	});

	it("should return index of the found element", function(){
		expect(bs.search(3)).to.equal(0);
		expect(bs.search(12)).to.equal(3);
		expect(bs.search(100)).to.equal(11);
	});


	it("should return -1 if the element is not found", function(){
		expect(bs.search(7)).to.equal(-1);
	});

});