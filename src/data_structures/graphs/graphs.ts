interface Distances {
	[x: string]: number;
}

/**
 * Performs Breadth-First Search on an Adjacency Matrix Graph
 * @param {Array<Array<number>>} adjacencyMatrixGraph - The graph to traverse
 * @param {number} startingNode - The node to start traversing from
 * @return {Distances} JavaScript object key-value pairs with the node and its distance from the root.
 * 	If the node could not be reached, it should have a distance of Infinity.
 */
export function bfs(
	adjacencyMatrixGraph: Array<Array<number>>,
	startingNode: number
): Distances {
	const queue = [startingNode];
	const graph = adjacencyMatrixGraph;
	const visitedNodes = new Set<number>();
	const distances: Distances = {};

	graph.forEach((_, index) => (distances[index.toString()] = Infinity));
	distances[startingNode] = 0;

	while (queue.length > 0) {
		const dequeueNode = queue.shift() as number;

		visitedNodes.add(dequeueNode);
		const neighborNodes = graph[dequeueNode];

		neighborNodes.forEach((neighborNode, neighborNodeIndex: number) => {
			if (neighborNode === 1 && !visitedNodes.has(neighborNodeIndex)) {
				queue.push(neighborNodeIndex);

				// Update the distance for the neighbor
				distances[neighborNodeIndex.toString()] =
					distances[dequeueNode.toString()] + 1;
			}
		});
	}

	return distances;
}

/**
 * Performs Depth-First Search on an Adjacency Matrix Graph. This function is dfs but a recursive approach.
 * @param {Array<Array<number>>} adjacencyMatrixGraph - The graph to traverse
 * @param {number} startingNode - The node to start traversing from
 * @return {Array<number>} An array of all nodes reachable from startingNode/root.
 */
export function dfsRecursion(
	adjacencyMatrixGraph: Array<Array<number>>,
	startingNode: number
): Array<number> {
	const visitedSet = new Set();
	const traversalOrder: Array<number> = [];

	function dfsTraversal(node: number) {
		if (visitedSet.has(node)) {
			return;
		}

		visitedSet.add(node);
		traversalOrder.push(node);
		console.log({ currentNode: node, visitedSet });

		// Explore neighbors
		adjacencyMatrixGraph[node].forEach((isNeighbor, neighborIndex) => {
			if (isNeighbor === 1 && !visitedSet.has(neighborIndex)) {
				dfsTraversal(neighborIndex);
			}
		});
	}

	dfsTraversal(startingNode);

	return traversalOrder;
}

/**
 * Performs Depth-First Search on an Adjacency Matrix Graph. This function is dfs but an iterative approach.
 * @param {Array<Array<number>>} adjacencyMatrixGraph - The graph to traverse
 * @param {number} startingNode - The node to start traversing from
 * @return {Array<number>} An array of all nodes reachable from startingNode/root.
 */
export function dfsIterative(
	adjacencyMatrixGraph: Array<Array<number>>,
	startingNode: number
): Array<number> {
	const stack = [startingNode];
	const visitedSet = new Set();
	const traversalOrder: Array<number> = [];

	while (stack.length > 0) {
		const currentNode = stack.pop() as number;
		visitedSet.add(currentNode);
		traversalOrder.push(currentNode);

		const neighbors = adjacencyMatrixGraph[currentNode];
		neighbors.forEach((neighborNode, neighborIndex) => {
			if (neighborNode === 1 && !visitedSet.has(neighborIndex)) {
				// now push to stack
				stack.push(neighborIndex);
			}
		});
	}

	return traversalOrder;
}
