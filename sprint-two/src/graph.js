

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.obj = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.obj[node] = {}
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if(this.obj[node]){
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.obj[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.obj[fromNode][toNode]){
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.obj[fromNode][toNode] = true;
  this.obj[toNode][fromNode] = true;

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  this.obj[fromNode][toNode] = false;
  this.obj[toNode][fromNode] = false;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.obj){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode = O(1)
 * contains = O(1)
 * removeNode = O(1)
 * hasEdge = O(1)
 * addEdge = O(1)
 * removeEdge = O(1)
 * forEachNode = O(n)
 */



