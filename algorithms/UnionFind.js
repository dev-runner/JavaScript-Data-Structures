/**
  * Implementation of the union find (connectivity problem) algorithms in JavaScript.
  *
  * Copyright (c) 2016 Przemek Jażło <przemek@devrunner.pl>
  *
  * Permission is hereby granted, free of charge, to any person obtaining 
  * a copy of this software and associated documentation files (the "Software"),
  * to deal in the Software without restriction, including without limitation the
  * rights to use, copy, modify, merge, publish, distribute, sublicense,
  * and/or sell copies of the Software, and to permit persons to whom the Software
  * is furnished to do so, subject to the following conditions:
  * 
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
  * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

/**
  * QuickFind - find operation is O(1) and union operation is O(n) for a single union operation
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
		if(typeof x !== 'number' || x >= n){
			throw "First argument is not valid.";
		}
		if(typeof y !== 'number' || y >= n){
			throw "Second argument is not valid.";
		}
		// two  objects are connected only if they have the same component ID
		return (cId[x] === cId[y]);
	}


	var publicApi = {
		union: union,
		areConnected: areConnected,
	};

	return publicApi; 
};

/** 
  * QuickUnion - all operations are O(n) in the worst case
  */
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
