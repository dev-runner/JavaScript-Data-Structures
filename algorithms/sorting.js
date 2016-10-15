"use strict";


var Sorting = (function(){

	var data = [];
	var maxIndex = -1;

	function init(arr){
		data = arr;
		maxIndex = data.length-1;
	}

	/**
	  * Selection sort algorithm
	  * Time complexity: O(n^2)
	  */
	function selectionSort(){

		for(let i = 0; i < maxIndex-1; ++i){
			let iMin = i;
			for(let j = i+1; j < maxIndex; ++j){
				if(data[j] < data[iMin]){
					iMin = j;
				}
			}
			let tmp = data[i];
			data[i] = data[iMin];
			data[iMin] = tmp;
		}
	}


	/**
	  * Bubble sort algorithm
	  * Time complexity: O(n^2)
	  */
	function bubbleSort(){

		for(let j = 0; j < maxIndex; ++j){
			let flag = 0;
			for(let i=0; i < maxIndex-j; ++i){
				if(data[i] > data[i+1]){
					let tmp = data[i];
					data[i] = data[i+1];
					data[i+1] = tmp;
					flag = 1;
				}
			}
			if(flag === 0) break; // no swaps = array already sorted
		}
	}

	/**
	  * Insertion sort algorithm
	  * Time complexity: O(n) - best case, O(n^2) - worst case
	  */
	function insertionSort(){

		for(let i = 1; i < maxIndex; ++i){
			let value = data[i], hole = i;

			while(hole > 0 && data[hole-1] > value){
				data[hole] = data[hole-1];
				--hole;
			}
			data[hole] = value;
		}
	}


	// print the data
	function printData(){
		console.log(data);
	}

	var publicApi = {
		init: init,
		selectionSort: selectionSort,
		bubbleSort: bubbleSort,
		insertionSort: insertionSort,
		printData: printData,
	};

	return publicApi;

})();

module.exports = Sorting;