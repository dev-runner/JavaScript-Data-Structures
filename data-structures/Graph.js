/**
  * Implementation of the graph using JavaScript
  * The graph is represented in the form of a hashed adjecency list
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
		directed: true,
		multiedge: false,
		selfloops: false,
		weighted: false,
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
	  * Inserts new vertex to the graph, key must be unique
	  */
	function addVertex(key, data){

		// check if key is provided
		if(typeof key === 'undefined'){
			throw "Vertex must have a unique key.";
		}

		// check if vertex already exists
		if(key in vertices){
			throw "Vertex with key = '" + key + "' already exists.";
		}

		// push to the vertices hash map
		vertices[key] = new Vertex(key, data);
	}


	/**
	  * Removes vertex from the graph
	  */
	function deleteVertex(vKey){
		if(typeof vKey === 'undefined'){
			throw "Must privide vertex key.";
		}
		if((vKey in vertices) === false){
			throw "Vertex " + vKey + " does not exist.";
		}

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

		if(typeof vertices[v1Key] === 'undefined'){
			throw "Vertex " + v1Key + " does not exist.";
		}
		if(typeof vertices[v2Key] === 'undefined'){
			throw "Vertex " + v2Key + " does not exist.";
		}

		// handle selfloops
		if(v1Key === v2Key && settings['selfloops'] === false){
			throw "Self-loops are not allowed.";
		}

		// handle multiedges
		if(areConnected(v1Key, v2Key) && settings['multiedge'] === false){
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
		if(typeof vertices[v1Key] === 'undefined'){
			throw "Vertex " + v1Key + " does not exist.";
		}
		if(typeof vertices[v2Key] === 'undefined'){
			throw "Vertex " + v2Key + " does not exist.";
		}

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
	  * Checks if two nodes are connected with an edge
	  */
	function areConnected(v1Key, v2Key){

		if(typeof vertices[v1Key] === 'undefined'){
			throw "Vertex " + v1Key + " does not exist.";
		}
		if(typeof vertices[v2Key] === 'undefined'){
			throw "Vertex " + v2Key + " does not exist.";
		}

		if(typeof vertices[v1Key].neighbours[v2Key] !== 'undefined'){
			return true;
		}
		return false;
	}


	/**
	  * Finds all adjacent vertices for the given vertex
	  */
	function getAdjacentVertices(vKey){
		
		if(typeof vertices[vKey] === 'undefined'){
			throw "Vertex " + vKey + " does not exist.";
		}

		return vertices[vKey].neighbours;
	}


	var publicApi = {
		addVertex: addVertex,
		deleteVertex: deleteVertex,
		addEdge: addEdge,
		deleteEdge: deleteEdge,
		areConnected: areConnected,
		getAdjacentVertices: getAdjacentVertices,
	};
	
	return publicApi;

};

module.exports = Graph;