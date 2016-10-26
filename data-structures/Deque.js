/**
 * Implementation of the double-ended queue using JavaScript
 * 
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 * 
 */
var Deque = function Deque(){

	"use strict";

	var deque = [];

	function pushFront(element){
		deque.unshift(element);
	}

	function pushBack(element){
		deque.push(element);
	}

	function popFront(){
		deque.shift();
	}

	function popBack(){
		deque.pop();
	}

	function peekFront(){
		return deque[0];
	}

	function peekBack(){
		return deque[deque.length-1];
	}

	function clear(){
		deque = [];
	}

	function getSize(){
		return deque.length;
	}

	function traverse(f){
		for(var i=0, l=deque.length; i<l; ++i){
			f(deque[i]);
		}
	}

	var publicApi = {
		pushFront: pushFront,
		pushBack: pushBack,
		popFront: popFront,
		popBack: popBack,
		peekFront: peekFront,
		peekBack: peekBack,
		clear: clear,
		getSize: getSize,
		traverse: traverse,
	};

	return publicApi;

};

module.exports = Deque;