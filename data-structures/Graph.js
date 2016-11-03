/**
  * Graph implementation in JavaScript. The graph is represented internally in the form of adjecency list.
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
		return true;
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
		return true;
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
	  * Returns an array of keys of graph vertices
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

	if(typeof graph === 'undefined' || typeof graph != 'object')
		throw "Provide a graph object.";

	var visited, edgeTo;

	run(startVertex);

	/** Run the algorithm
	  */
	function run(v){
		if(typeof v === 'undefined' || !graph.vertexExists(v))
			throw "Provide an existing vertex key.";
		visited = {};
		edgeTo = {};
		dfs(v);	
	}


	/**
	  * Recursive DFS
	  */
	function dfs(v){

		visited[v] = true;
		var adjList = graph.getAdjacentVertices(v);
		
		for(let w in adjList){
			if(!visited[w]){
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
		run: run,
		isConnected: isConnected,
		pathTo: pathTo,
	};

	return publicApi;
};


/**
  * BFS path finder
  */
var BreadthFirstPaths = function(graph, startVertex){

	"use strict";

	if(typeof graph === 'undefined' || typeof graph != 'object')
		throw "Provide a graph object.";

	var visited, edgeTo;

	// initially find paths from start vertex
	run(startVertex);

	/**
	  * Run the algorithm
	  */
	function run(v){
		if(typeof v === 'undefined' || !graph.vertexExists(v))
			throw "Provide an existing vertex key.";
		visited = {};
		edgeTo = {};
		bfs(v);
	}


	/**
	  * BFS traversal using queue
	  */
	function bfs(s) {

		var queue = [];
		
		// mark source vertex as visited and add it to the queue
		queue.push(s);
		visited[s] = true;

		while(queue.length > 0){

			let v = queue.shift();
			let adj = graph.getAdjacentVertices(v);

			for(let w in adj){
				if(!visited[w]){
					queue.push(w);
					visited[w] = true;
					edgeTo[w] = v;
				}
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
		run: run,
		isConnected: isConnected,
		pathTo: pathTo,
	};

	return publicApi;
};


// export module
module.exports = {
	Graph: Graph,
	DepthFirstPaths: DepthFirstPaths,
	BreadthFirstPaths: BreadthFirstPaths,
};