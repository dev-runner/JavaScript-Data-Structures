/**
  * Dictionary ADT implementation in JavaScript.
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
var Dictionary = function Dictionary(){
	
	"use strict";
	
	// using the regular js object literal as dictionary
	var dict = {};

	// size of the dictionary
	var count = 0;

	// add element to the collection
	function add(key, value){
		if(dict[key] != undefined){
			return undefined;
		}
		dict[key] = value;
		return ++count;
	}

	// removes item from the collection
	function remove(key){
		if(dict[key] == undefined){
			return undefined;
		}
		delete dict[key];
		return --count;
	}

	// returns item for the given key
	function get(key){
		return dict[key];
	}

	function getSize(){
		return count;
	}

	function isEmpty(){
		return (count === 0);
	}

	// enumerates through the entire collection
	function traverse(f){
		for(let key in dict){
			if(dict.hasOwnProperty(key)){
				f(dict[key]);
			}
		}
	}

	var publicApi = {
		add: add,
		remove: remove,
		get: get,
		getSize: getSize,
		isEmpty: isEmpty,
		traverse: traverse
	};

	return publicApi;

};

module.exports = Dictionary;