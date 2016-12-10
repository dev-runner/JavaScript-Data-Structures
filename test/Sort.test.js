var expect = require('chai').expect;
var Sort = require('../algorithms/Sort');


describe("Sort", function(){

	var data = null, sort = null;

	beforeEach(function(){
		data = [13, 3, 8, 4, 10, 15, 7];
		sort = Sort(data);
	});

	describe("Selection sort", function(){
		it("should sort the array", function(){
			var sorted = sort.selectionSort();
			expect(sorted).to.deep.equal([3,4,7,8,10,13,15]);
		});
	});

	describe("Bubble sort", function(){
		it("should sort the array", function(){
			var sorted = sort.bubbleSort();
			expect(sorted).to.deep.equal([3,4,7,8,10,13,15]);
		});
	});

	describe("Insertion Sort", function(){
		it("should sort the array", function(){
			var sorted = sort.insertionSort();
			expect(sorted).to.deep.equal([3,4,7,8,10,13,15]);
		});
	});

	describe("Quick Sort", function(){
		it("should sort the array", function(){
			var sorted = sort.quickSort();
			expect(sorted).to.deep.equal([3,4,7,8,10,13,15]);
		});
	});

});