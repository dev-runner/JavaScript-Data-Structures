/**
  * String processing algorithms
  *
  * author: Przemyslaw Jazlo <przemek@devrunner.pl>
  */
var StringReverse = function(str){

	"use strict";

	var s;
	setString(str);

	/**
	  * Sets the string value
	  */
	function setString(str){
		if(typeof(str) !== 'string') throw "String parameter must be provided.";
		s = str;
	}


	/**
	  * Reverses the string using built-in functions: split, reverse, join
	  */
	function arrayReverse(){
		var reversed_str = s.split('').reverse().join('');
		return reversed_str;
	}


	/**
	  * Reverses the string using the iterative algorithm
	  */
	function iterativeReverse(){
		var reversed_str = '';
		for(let i = s.length-1; i >= 0; --i){
			reversed_str += s[i];
		}
		return reversed_str;
	}


	/**
	  * Reverses the string using stack
	  */
	function stackReverse(){
		
		var stack = require('../data-structures/Stack')();
		var reversed_str = '';

		// first, push all characters into the stack
		for(let i=0, l=s.length; i<l; ++i){
			stack.push(s[i]);
		}
		// take characters from stack until empty
		while( !stack.isEmpty() ){
			reversed_str += stack.pop();
		}
		return reversed_str;
	}


	/**
	  * Reverses the string using recursion
	  */
	function recursiveReverse(){
		function recursiveStringReverse(s){
			return (s === '') ? '' : recursiveStringReverse(s.substr(1)) + s.charAt(0);
		}
		return recursiveStringReverse(s);
	}

	var publicApi = {
		setString: setString,
		arrayReverse: arrayReverse,
		iterativeReverse: iterativeReverse,
		stackReverse: stackReverse,
		recursiveReverse: recursiveReverse,		
	};

	return publicApi;

};


/**
  * Checks if parentheses are balanced correctly in the given string value.
  * Examples:
  * [()()]{} - is correctly balanced
  * []() - is correctly balanced
  * [(()]{{} - is not correctly balanced
  * [)) - is not correctly balanced
  */
var ParenthesesBalance = function(str){
	
	"use strict";

	var s;
	setString(str);

	/**
	  * Sets the string value
	  */
	function setString(str){
		if(typeof(str) !== 'string') throw "String parameter must be provided.";
		s = str;
	}

	/**
	  * Algorithm implementation using stack
	  */
	function checkBalance(){

		var stack = require('../data-structures/Stack')();

		for(let i=0, len=s.length; i<len; ++i){

			if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
				stack.push(s[i]);
			}
			else if(s[i]===')' && stack.pop() !== '(' ) return false;
			else if(s[i]===']' && stack.pop() !== '[' ) return false;
			else if(s[i]==='}' && stack.pop() !== '{' ) return false;
		}

		return stack.isEmpty() ? true : false;
	}


	var publicApi = {
		setString: setString,
		checkBalance: checkBalance,
	};

	return publicApi;
};


module.exports = {
	StringReverse: StringReverse,
	ParenthesesBalance: ParenthesesBalance,
};