/**
  * Implementation of the graph using JavaScript
  * The graph is represented in the form of adjecency list
  *
  * author: Przemyslaw Jazlo <przemek@devrunner.pl>
  *
  */
var Graph = function(s){

	"use strict";

	// graph settings
	var settings = {};

	// default settings
	var default_settings = {
		directed: true, multiedge: false, selfloops: false, weighted: false,
	};

	// initialize settings
	(function init_settings(){
		if(typeof s === 'undefined') {
			settings = default_settings;
		} else {
			settings['directed'] = (typeof s['directed'] === 'undefined') ? default_settings['directed'] : s['directed'];
			settings['multiedge'] = (typeof s['multiedge'] === 'undefined') ? default_settings['multiedge'] : s['multiedge'];
			settings['selfloops'] = (typeof s['selfloops'] === 'undefined') ? default_settings['selfloops'] : s['selfloops'];
			settings['weighted'] = (typeof s['weighted'] === 'undefined') ? default_settings['weighted'] : s['weighted'];
		}
	})();

	// hashmap of vertices
	var vertices = {};

	// vertex constructor function
	function Vertex(key, data){
		this.key = key;
		this.data = data;
		this.neighbours = {}; // adjecency list for the vertex
	}
	Vertex.prototype = {
		getKey: function(){
			return this.key;
		},
		addNeighbour: function(vKey, weight){
			this.neighbours[vKey] = weight;
		}
	};


	/** 
	  * Returns number of vertices in the graph
	  */
	function numVertices(){
		return Object.keys(vertices).length;
	}


	/**
	  * Returns number of edges in the graph
	  */
	function numEdges(){
		var vertexCount = 0;

		for(let vKey in vertices){
			vertexCount += Object.keys(vertices[vKey].neighbours).length;
		}
		if (settings['directed'] === false){
			vertexCount /= 2;
		}
		return vertexCount;
	}


	/**
	  * Checks if the given vertex exists
	  */
	function vertexExists(vKey){
		if(typeof vertices[vKey] !== 'undefined') return true; 
		return false;
	}


	/**
	  * Checks if the edge from v1 to v2 exists
	  */
	function edgeExists(v1Key, v2Key){
		if(!vertexExists(v1Key) || !vertexExists(v2Key)) return false;

		if(typeof vertices[v1Key].neighbours[v2Key] !== 'undefined'){
			return true;
		}
		return false;
	}


	/**
	  * Returns degree (number of edges connected) of the given vertex
	  */
	function degree(vKey){
		if( !vertexExists(vKey) ) throw "Vertex " + vKey + " does not exist.";
		
		return Object.keys(vertices[vKey].neighbours).length;
	}


	/**
	  * Clears the graph (removes all vertices and edges)
	  */
	function clear(){
		vertices = {};
	}


	/**
	  * Returns the string representation of the graph's adjecency list
	  */
	function toString(){
		var s = '';
		for(let vKey in vertices){
			let v = vertices[vKey];
			var numEdges = Object.keys(v.neighbours).length, i=0;
			s += vKey;
			s += ' --> [';
			for (let eKey in v.neighbours){
				s += eKey;
				++i;
				if(i < numEdges) s += ', ';
			}
			s += ']\n';
		}
		return s;
	}


	/**
	  * Inserts new vertex to the graph, key must be unique
	  */
	function addVertex(key, data){

		// check if key is provided
		if(typeof key === 'undefined'){
			throw "Vertex must have a unique key.";
		}

		// check if vertex already exists
		if( vertexExists(key) ) {
			throw "Vertex " + key + "' already exists.";
		}

		// push to the vertices hash map
		vertices[key] = new Vertex(key, data);
		return true;
	}


	/**
	  * Removes vertex from the graph
	  */
	function deleteVertex(vKey){
		
		if(typeof vKey === 'undefined'){
			throw "Must privide vertex key.";
		}
		if( !vertexExists(vKey) ) throw "Vertex " + vKey + " does not exist.";

		// delete vertex from vertices object
		delete vertices[vKey];

		// delete all edges where vKey was an end vertex
		for(let v in vertices){
			delete vertices[v].neighbours[vKey];
		}
	}


	/**
	  * Inserts new edge connecting two vertices given by the key
	  */
	function addEdge(v1Key, v2Key, weight){

		if( !vertexExists(v1Key) ) throw "Vertex " + v1Key + " does not exist.";
		
		if( !vertexExists(v2Key) ) throw "Vertex " + v2Key + " does not exist.";

		// handle selfloops
		if(v1Key === v2Key && settings['selfloops'] === false){
			throw "Self-loops are not allowed.";
		}

		// handle multiedges
		if(edgeExists(v1Key, v2Key) && settings['multiedge'] === false){
			throw "Multiedges are not allowed.";
		}

		// handle missing weights
		if(typeof weight === 'undefined' && settings['weighted'] === true){
			throw "Edges must have weights.";
		}

		// set weights
		weight = (settings['weighted'] === true) ? weight : true;

		// set v2 as v1's neighbour
		vertices[v1Key].addNeighbour(v2Key, weight);

		// for undirected graph add edge from v2 to v1 as well
		if(settings['directed'] === false){
			vertices[v2Key].addNeighbour(v1Key, weight);
		}
	}


	/**
	  * Deletes an edge
	  */
	function deleteEdge(v1Key, v2Key){
		
		if( !vertexExists(v1Key) ) throw "Vertex " + v1Key + " does not exist.";
		if( !vertexExists(v2Key) ) throw "Vertex " + v2Key + " does not exist.";

		if(typeof vertices[v1Key].neighbours[v2Key] !== 'undefined'){
			
			// remove connection from v1 to v2
			delete vertices[v1Key].neighbours[v2Key];
		
			// for undirected graphs, remove connection from v2 to v1 as well
			if(settings['directed'] === false){
				delete vertices[v2Key].neighbours[v1Key];
			}
			return true;
		}
		return false;
	}


	/**
	  * Finds all adjacent vertices for the given vertex
	  */
	function getAdjacentVertices(vKey){

		if( !vertexExists(vKey) ) throw "Vertex " + vKey + " does not exist.";

		return vertices[vKey].neighbours;
	}


	/**
	  * Returns an array of graphs vertices' keys
	  */
	function getVertices(){
		return Object.keys(vertices);
	}


	/**
	  * Graph public API
	  */
	var publicApi = {
		numVertices: numVertices,
		numEdges: numEdges,
		vertexExists: vertexExists,
		edgeExists: edgeExists,
		degree: degree,
		clear: clear,
		toString: toString,
		addVertex: addVertex,
		deleteVertex: deleteVertex,
		addEdge: addEdge,
		deleteEdge: deleteEdge,
		getAdjacentVertices: getAdjacentVertices,
		getVertices: getVertices,
	};

	return publicApi;
};


/**
  * DFS path finder
  */
var DepthFirstPaths = function(graph, startVertex){

	"use strict";

	if(typeof graph === 'undefined' || typeof graph != 'object') throw "Provide a graph object.";
	if(typeof startVertex === 'undefined' || !graph.vertexExists(startVertex)) throw "Provide an existing vertex key.";

	var visited = {};
	var edgeTo = {};

	// run DFS to find the paths
	dfs(startVertex);


	/**
	  * Recursive DFS traversal
	  */
	function dfs(v){

		visited[v] = true;
		var adjList = graph.getAdjacentVertices(v);
		
		for(let w in adjList){
			if(typeof visited[w] === 'undefined'){
				dfs(w);
				edgeTo[w] = v;
			}
		}
	}


	/**
	  * Returns true if the given vertex is connected to the start vertex
	  */
	function isConnected(v){
		if( !graph.vertexExists(v) ) throw "Vertex " + v + " does not exist.";
		return (typeof visited[v] !== 'undefined' && visited[v] == true);
	}


	/**
	  * Returns a DFS path from start vertex to vertex v
	  */
	function pathTo(v){
		
		if( !isConnected(v) ) return null;

		var stack = [];
		for(let x=v; x != startVertex; x = edgeTo[x]){
			stack.push(x);
		}
		stack.push(startVertex);
		return stack;
	}


	var publicApi = {
		isConnected: isConnected,
		pathTo: pathTo,
	};

	return publicApi;
};


/**
  * Graph traversal algorithms
  */
var Traversal = function(graph){
	
	"use strict";


	/**
	  * Depth-First Search traversal of the graph
	  */
	function traverseDFS(vKey, f) {

		if( !vertexExists(vKey) ) throw "Vertex " + vKey + " does not exist.";
		f = (typeof f === 'function') ? f : function(v) { console.log(v.key); };

		// first, set all vertices and edges as unvisited
		for(let key in vertices){
			if(vertices.hasOwnProperty(key)){
				let v = vertices[key];
				v.visited = false;
				v.unvisitedEdges = Object.keys(v.neighbours);
			}
		}

		// visit the start vertex
		var startVertex = vertices[vKey];
		startVertex.visited = true;
		f(startVertex);

		if(startVertex.unvisitedEdges.length > 0){
			
			// stack keeps vertices that have been visited and which have unvisited neighbours
			var stack = [];
			stack.push(startVertex);

			while(stack.length > 0){
				
				// take vertex v from top of stack
				let v = stack[stack.length-1];

				// take next unvisited edge starting at vertex v
				let endVKey = v.unvisitedEdges.shift();
				let endVertex = vertices[endVKey];

				// all edges already visited? remove it from the stack
				if(v.unvisitedEdges.length === 0){
					stack.pop();
				}

				// if the end vertex was not previously visited
				if(endVertex.visited === false){
					f(endVertex); // visit the vertex
					endVertex.visited = true; // set as visited

					if(endVertex.unvisitedEdges.length > 0) {
						stack.push(endVertex);
					}
				}

			}
		}
	}

	var publicApi = {};
	return publicApi;

};


module.exports = {
	Graph: Graph,
	Traversal: Traversal,
	DepthFirstPaths: DepthFirstPaths,
};

