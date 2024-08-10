import { Graph } from '../graphs';

const exBFSGraph = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[0, 0, 1, 0]
];
const graph = new Graph(exBFSGraph, 3);
graph.bfs();
