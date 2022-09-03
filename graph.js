// Edge List
const edgeListGraph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const adjacentListGraph = [[2], [2,3], [0,1,3], [1,2]];

// Adjacent Matrix
const adjacentMatrixGraph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        // undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnenctions() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let connections = "";
            let nodeConnections = this.adjacentList[node];
            for (let vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + '--->' + connections);
        }
    }
}

const myGraph = new Graph();


myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '4');
myGraph.addEdge('1', '2');
myGraph.addEdge('5', '6');
myGraph.addEdge('1', '4');
myGraph.addEdge('1', '5');
myGraph.showConnenctions();
