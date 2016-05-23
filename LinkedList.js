/**
 * Implementation of the single-linked list using JavaScript
 *
 * author: przemek@devrunner.pl
 *
 */
 
 
function Node(data, next){
	this.data = data;
	this.next = next || null;
}

function LinkedList(){
	this.root = null;
}

/**
 * Insert newNode at the end of the linked list
 */
LinkedList.prototype.insert = function(newNode){
	if(this.root === null){
		this.root = newNode;
		return;
	}
	var current = this.root;
	while(current.next != null){
		current = current.next;
	}
	current.next = newNode;
}


/**
 * Inserts node newNode at the beginning of the list
 */
LinkedList.prototype.insertBeginning = function(newNode){
	newNode.next = this.root;
	this.root = newNode;
}


/**
 * Deletes a node from the list with the specified data
 */
LinkedList.prototype.delete = function(data){
	var current = this.root;
	var previous = null;
	while(current != null){
		if(current.data == data){
			if(previous == null){
				this.root = current.next;
			}else{
				previous.next = current.next;
			}
			delete current;
			return;
		}
		previous = current;
		current = current.next;
	}
}

/**
 * Finds node with the given data
 */
LinkedList.prototype.find = function(data){
	var current = this.root;
	while(current != null){
		if(current.data == data){
			return current;
		}
		current = current.next;
	}
	return null;
}


/**
 * Insert newNode after node
 */
LinkedList.prototype.insertAfter = function(node, newNode){
	newNode.next = node.next;
	node.next = newNode;
}


/**
 * Traverse the list and apply function f to each element
 */
LinkedList.prototype.traverse = function(f){
	var current = this.root;
	while(current != null){
		f(current);
		current = current.next;
	}
}



// let's play with the list :)
var list = new LinkedList();

// insert some elements to the list
list.insert(new Node('A'));
list.insert(new Node('B'));
list.insert(new Node('C'));
list.insert(new Node('D'));
list.insert(new Node('E'));

// insert two more at the beginning of the list
list.insertBeginning(new Node('X'));
list.insertBeginning(new Node('Y'));

// try to find the node with 'A'
var found = list.find('A');
if(found){
  list.insertAfter(found, new Node('Z'));
  list.delete(found.data);
}

// shouldn't be able to find 'A' now
found = list.find('A');

// display the list
var f = function(e){ console.log(e.data); }
list.traverse(f);






