/**
 * Implementation of the dictionary abstract data type using JavaScript
 *
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
**/
module.exports = (function Dictionary(){

	var dict = {};
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

	// enumerates through the entire collection
	function traverse(f){
		for(key in dict){
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
		traverse: traverse
	};

	return publicApi;

})();