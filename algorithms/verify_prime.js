"use strict";


/**
  * Algorithm verifies if the given number n is a prime number
  */
function verify_prime(n){

	if(typeof n !== 'number') return false;

	if(n <= 1) return false;

	for (var i = 2; i <= Math.sqrt(n); ++i){
		if(n%i === 0) return false;
	}
	
	return true;
}


console.log("4 is prime number: " + verify_prime(4) );
console.log("7 is prime number: " + verify_prime(7) );
console.log("13 is prime number: " + verify_prime(13) );
console.log("25 is prime number: " + verify_prime(25) );
console.log("2 is prime number: " + verify_prime(2) );
console.log("'xyz' is prime number: " + verify_prime('xyz') );