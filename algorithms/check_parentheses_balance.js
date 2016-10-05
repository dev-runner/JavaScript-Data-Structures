"use strict";

// the algorithm uses the stack
var stack = require('../data-structures/Stack.js');


/**
  * Checks if parentheses are balanced correctly in the given string value.
  * Examples:
  * [()()]{} - is correctly balanced
  * []() - is correctly balanced
  * [(()]{{} - is not correctly balanced
  * [)) - is not correctly balanced
  */
function check_parentheses_balance(s){

	for(let i=0, len=s.length; i<len; ++i){

		if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
			stack.push(s[i]);
		}
		else if(s[i]===')' && stack.pop() !== '(' ) return false;
		else if(s[i]===']' && stack.pop() !== '[' ) return false;
		else if(s[i]==='}' && stack.pop() !== '{' ) return false;

	}

	// the stack must be empty for properly balanced string
	return stack.isEmpty() ? true : false;
}

var str = '(({}{}[]))';
var balanced = check_parentheses_balance(str);
console.log(balanced);