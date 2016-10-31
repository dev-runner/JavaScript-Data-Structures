/**
  * Implementation of the union find (connectivity problem) algorithms
  * 
  * QuickFind - find operation is O(1) and union operation is O(n) for a single union operation
  * QuickUnion - all operations are O(n) in the worst case
  *
  * author: Przemyslaw Jazlo <przemek@devrunner.pl>
  */
var QuickFind = function(n){

	"use strict";

	if(typeof n === 'undefined' || typeof  n !== 'number'){
		throw "Number of elements is required.";
	}

	var cId = [];

	// initialize the component ID array
	(function init(){
		for(let i = 0; i < n; ++i){
			cId[i] = i;
		}
	})();


	/**
	  * Makes a connection between two objects: x and y
	  */
	function union(x,y){

		// check parameters
		if(typeof x !== 'number' || x >= n){
			throw "First argument is not valid.";
		}
		if(typeof y !== 'number' || y >= n){
			throw "Second argument is not valid.";
		}

		for(let i = 0; i < n; ++i){
			if(cId[i] === cId[y]) cId[i] = cId[x];
		}

	}

	/**
	  * Checks if two objects are connected (belong to the same component)
	  */
	function areConnected(x,y){
		// check parameters
		if(typeof x !== 'number' || x >= n){
			throw "First argument is not valid.";
		}
		if(typeof y !== 'number' || y >= n){
			throw "Second argument is not valid.";
		}
		return (cId[x] === cId[y]);
	}


	var publicApi = {
		union: union,
		areConnected: areConnected,
	};

	return publicApi; 
};


var QuickUnion = function(n){

	"use strict";

	if(typeof n === 'undefined' || typeof  n !== 'number'){
		throw "Number of elements is required.";
	}

	var roots = [];

	// initialize the component ID array
	(function init(){
		for(let i = 0; i < n; ++i){
			roots[i] = i;
		}
	})();


	// find root of element i
	function root(i){
		while(roots[i] !== i) i = roots[i];
		return i;
	}


	/**
	  * Connects objects x and y
	  */
	function union(x,y){
		// check parameters
		if(typeof x !== 'number' || x >= n){
			throw "First argument is not valid.";
		}
		if(typeof y !== 'number' || y >= n){
			throw "Second argument is not valid.";
		}

		var i = root(x);
		var j = root(y);
		roots[i] = j;
	}


	/**
	  * Checks if x and y are connected (belong to the same component)
	  */
	function areConnected(x,y){
		// check parameters
		if(typeof x !== 'number' || x >= n){
			throw "First argument is not valid.";
		}
		if(typeof y !== 'number' || y >= n){
			throw "Second argument is not valid.";
		}

		// two objects are connected if they have the same root
		return ( root(x) === root(y) );
	}


	var publicApi = {
		union: union,
		areConnected: areConnected,
	};

	return publicApi;
};


module.exports = {
	QuickFind: QuickFind,
	QuickUnion: QuickUnion,
};
