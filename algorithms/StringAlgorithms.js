/**
  * String processing algorithms implemented in JavaScript.
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
