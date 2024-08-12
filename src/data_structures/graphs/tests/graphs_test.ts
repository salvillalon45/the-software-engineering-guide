// import { Graph } from '../graphs';

const exBFSGraph = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[0, 0, 0, 0]
];
const startingNode = 1;
// const graph = new Graph(exBFSGraph, 0);
// graph.bfs();

function bfsHelper(exBFSGraph: Array<Array<number>>, startingNode: number) {
	const queue = [startingNode];
	const graph = exBFSGraph;
	const visitedNodes = new Set();
	const distances = {};
	exBFSGraph.map((array, index) => (distances[index] = Infinity));
	console.log({ distances });

	while (queue.length > 0) {
		const currentNode = queue.shift() as number;
		console.log({ currentNode });
		visitedNodes.add(currentNode);

		graph[currentNode].forEach((node, index: number) => {
			console.log({ node, index });
			if (node === 1 && !visitedNodes.has(index)) {
				console.log('going to push to queue');
				queue.push(index);
				console.log({ queue });
			}
		});
	}

	console.log({ queue, visitedNodes });
}

bfsHelper(exBFSGraph, startingNode);
