interface Distances {
	[x: string]: number;
}

export function bfs(exBFSGraph: Array<Array<number>>, startingNode: number) {
	const queue = [startingNode];
	const graph = exBFSGraph;
	const visitedNodes = new Set<number>();
	const distances: Distances = {};

	exBFSGraph.forEach((_, index) => (distances[index.toString()] = Infinity));
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
