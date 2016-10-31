/**
  * Algorithm that verifies if the given number is a prime number 
  *
  * author: Przemyslaw Jazlo <przemek@devrunner.pl>
  */
var VerifyPrime = function(num){

	"use strict";

	var n;
	setNumber(num);

	function setNumber(num){
		if(typeof(num) !== 'number') throw "Number value must be provided.";
		n = num;
	}

	function verify(){

		if(n <= 1) return false;

		// check factors of n until square root of n
		for (let i = 2, max = Math.sqrt(n); i <= max; ++i){
			if(n % i === 0) return false;
		}

		return true;
	}

	return {
		setNumber: setNumber,
		verify: verify,
	};

};

module.exports = VerifyPrime;