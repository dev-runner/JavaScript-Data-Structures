"use strict";


/**
  * Reverses the string using built-in functions: split, reverse, join
  */
function string_reverse(s){
	var reversed_str = s.split('').reverse().join('');
	return reversed_str;
}


/**
  * Reverses the string using the iterative algorithm
  */
function string_reverse_iterative(s){
	var reversed_str = ''; // strings in JS are immutable, must create a separate sting literal
	for(let i=s.length-1; i>=0; --i){
		reversed_str += s[i];
	}
	return reversed_str;
}


/**
  * Reverses the string using stack
  */
function string_reverse_stack(s){
	
	var stack = require('../data-structures/Stack');
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



var s = 'ABCDEFGHIJK';

console.log('Given string: ' + s);

console.log('Reversed using the built-in functions: ' + string_reverse(s));

console.log('Reversed using the iterative algorithm: ' + string_reverse_iterative(s));

console.log('Reversed using the stack: ' + string_reverse_stack(s));