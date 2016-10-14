"use strict";

/**
  * Algorithm verifies if the given number n is a prime number
  */
function verify_prime(n){

	if(typeof n !== 'number') return false;

	if(n <= 1) return false;

	// check factors of n until square root of n
	for (let i = 2, max = Math.sqrt(n); i <= max; ++i){
		if(n % i === 0) return false;
	}

	return true;
}


var prompt = require("prompt");

prompt.start();

var schema = {
	properties: {
		number: {
			pattern: /^[0-9]+$/,
			message: 'Please enter a valid number.',
			required: true
		},
	}
};

prompt.get(schema, function (err, result) {
	
	if (err) { 
		console.log(err);
		return 1;
	}
	var n = parseInt(result.number);
	
	if(verify_prime(n) === true){
		console.log(n + ' IS A PRIME NUMBER');
	}
	else {
		console.log(n + ' IS NOT A PRIME NUMBER');
	}

});