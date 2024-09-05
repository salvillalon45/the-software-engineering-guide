/*
        REACTO
        APPROACH
        - This looks like a bfs since I will need to look through all the neighbors
        - I will need a queue for memory 
        - I will need a visited set as well
        Given a node, the node has the value and its neighbors
        Node 1
            val = 1
            neighbors = [Node 2]
        So I am given one node, from that node I need to traverse the graph. As I am traversing 
        I will find neighbors (from the neighbors list) and I will be creating an adjancy list

        So I always going to be given the first node which has index 1
        Start
        Node 1, neighbors [2]
        - Add to result list = [[2]]
        - Add neighbors to queue [2]
        - Add Node 1 to visited set
        --
        Node 2, neighbors [1,3]
        - Pop 2 from queue
        - Add to result list = [[2], [1,3]]
        - Add Node 2 to visited set
        - Add neighbors to queue [3]
        (I am going to visit 3, since I already visited Node 1)
        --
        Node 3, neighbors [2]
        - Pop 3 from queue
        - Add to result list = [[2], [1,3], [2]]
        - Add node 3 to visited set
        - We dont add to queue since we already visited Node 2

        Queue is empty, loop stop

        return result list = [[2], [1,3], [2]]
*/

// Definition for a Node.
class CloneGraphNode {
	public val;
	public neighbors: Array<CloneGraphNode>;

	constructor(val = 0, neighbors: Array<CloneGraphNode> = []) {
		this.val = val;
		this.neighbors = neighbors;
	}
}

function cloneGraph(node: CloneGraphNode): CloneGraphNode | null {
	const cloneMap = new Map();

	function dfsTraversal(currentNode: CloneGraphNode): null | CloneGraphNode {
		if (cloneMap.has(currentNode)) {
			return cloneMap.get(currentNode);
		}

		const cloneNode = new CloneGraphNode(currentNode.val);
		cloneMap.set(currentNode, cloneNode);

		for (let i = 0; i < currentNode.neighbors.length; i++) {
			const neighborNode = currentNode.neighbors[i];
			cloneNode.neighbors.push(
				dfsTraversal(neighborNode) as CloneGraphNode
			);
		}

		return cloneNode;
	}

	if (node === null) {
		return null;
	}

	return dfsTraversal(node);
}

const node1 = new CloneGraphNode(1);
const node2 = new CloneGraphNode(2);
const node3 = new CloneGraphNode(3);
node1.neighbors = [node2];
node2.neighbors = [node1, node3];
node3.neighbors = [node2];

const cloneGraphResult = cloneGraph(node1);
console.log(cloneGraphResult);
