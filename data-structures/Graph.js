"use strict";


/**
  *
  */
var Graph = function(s){

	var settings;

	var default_settings = {
		directed: true,
		weighted: false,
	};

	settings = (typeof s !== 'object') ? default_settings : s;

	// list of vertices
	var vertices = [];

	// adjacency list
	var adjList = [];


	function addVertex(data){
		var v = { data: data };
		
		// push to vertices array
		var vIndex = (vertices.push(v) - 1);

		// push to adjacency list
		adjList[vIndex] = [];

		return vIndex;
	}


	function addEdge(v1, v2){
		adjList[v1].push(v2);
		adjList[v2].push(v1);
	}

	var publicApi = {
		addVertex: addVertex,
		addEdge: addEdge,
		vertices: vertices,
		adjList: adjList,
	};

	return publicApi;

};

module.exports = Graph;