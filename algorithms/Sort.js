/**
  * Sorting algorithms implemented in JavaScript
  *
  * author: Przemyslaw Jazlo <przemek@devrunner.pl>
  */
var Sort = function(arr){

	"use strict";

	var data = [];
	var maxIndex = -1;

	setData(arr);

	/**
	  * Sets the data array
	  */
	function setData(arr){
		if(typeof(arr) === 'undefined' || !Array.isArray(arr))
			throw "Array of numbers must be provided";
		data = arr;
		maxIndex = arr.length-1;
	}


	/**
	  * Selection sort algorithm
	  * Time complexity: O(n^2)
	  */
	function selectionSort(){

		for(let i = 0; i <= maxIndex-1; ++i){
			let iMin = i;
			for(let j = i+1; j <= maxIndex; ++j){
				if(data[j] < data[iMin]){
					iMin = j;
				}
			}
			let tmp = data[i];
			data[i] = data[iMin];
			data[iMin] = tmp;
		}
		return data;
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
		return data;
	}


	/**
	  * Insertion sort algorithm
	  * Time complexity: O(n) - best case, O(n^2) - worst case
	  */
	function insertionSort(){

		for(let i = 1; i <= maxIndex; ++i){
			let value = data[i], hole = i;

			while(hole > 0 && data[hole-1] > value){
				data[hole] = data[hole-1];
				--hole;
			}
			data[hole] = value;
		}
		return data;
	}


	// partitioning function for quick sort
	// all elements to the left of pivot are lesser than pivot element
	// all elenments to the right of pivot are greater than pivot element
	function partition(start, end){
		
		var pivot = data[end];
		var pIndex = start; // initial pivot index

		for(let i = start; i < end; ++i){
			if(data[i] <= pivot){
				let tmp = data[i];
				data[i] = data[pIndex]
				data[pIndex] = tmp;
				++pIndex;
			}
		}
		// swap elements at pIndex and end positions
		let tmp = data[pIndex];
		data[pIndex] = data[end];
		data[end] = tmp;
		return pIndex;
	}

	// recursive function for quick sort
	function quickSortRecursive(start, end){
		if(start < end){
			var pIndex = partition(start, end);
			quickSortRecursive(start, pIndex-1);
			quickSortRecursive(pIndex+1, end);
		}
	}

	/**
	  * Quick sort algorithm
	  * Time complexity: O(nlogn)
	  */
	function quickSort(){
		quickSortRecursive(0, maxIndex);
		return data;
	}


	// print the data
	function printData(){
		console.log(data);
	}

	var publicApi = {
		setData: setData,
		selectionSort: selectionSort,
		bubbleSort: bubbleSort,
		insertionSort: insertionSort,
		quickSort: quickSort,
		printData: printData,
	};

	return publicApi;

};

module.exports = Sort;