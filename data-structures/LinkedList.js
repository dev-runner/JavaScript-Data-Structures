/**
 * Implementation of the single-linked list using JavaScript
 *
 * author: Przemyslaw Jazlo <przemek@devrunner.pl>
 *
 */
module.exports = (function LinkedList(){

	var root = null;

	function createNode(data){
		return {
			data: data,
			next: null,
		};
	}

	// inserts new node that holds data at the end of list
	function insert(data){

		var newNode = createNode(data);

		if(root === null){
			root = newNode;
			return;
		}else{
			var current = root;
			while(current.next != null){
				current = current.next;
			}
			current.next = newNode;
			return;
		}
	}

	// inserts new node holding data at the beginning of the list 
	function insertBeginning(data){
		var newNode = createNode(data);
		newNode.next = root;
		root = newNode;
	}

	// removes element from the list that holds data
	function deleteElement(data){
		var current = root, previous = null;

		while(current != null){
			if(current.data === data){
				if(previous === null){
					root = current.next;
				}else{
					previous.next = current.next;
				}
				current = null;
				return true;
			}
			previous = current;
			current = current.next;
		}
		return false;
	}

	// finds element that holds specified data
	function find(data){
		var current = root;
		while(current != null){
			if(current.data === data){
				return current;
			}
			current = current.next;
		}
		return null;
	}

	// traverse the list applying function f to each element
	function traverse(f){
		var current = root;
		while(current != null){
			f(current);
			current = current.next;
		}
	}


	var publicApi = {
		insert: insert,
		insertBeginning: insertBeginning,
		deleteElement: deleteElement,
		find: find,
		traverse: traverse
	};

	return publicApi;

})();