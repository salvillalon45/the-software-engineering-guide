import { bfs, dfsIterative, dfsRecursion } from '../graphs';
import { t9Combos } from '../sample_problems';

const exBFSGraph1 = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 0],
	[0, 0, 0, 0]
];
const exBFSGraph2 = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[0, 0, 1, 0]
];
const bfsStartingNode = 1;

// console.log('bfs result:: ', bfs(exBFSGraph1, bfsStartingNode));

const exDFSGraph1 = [
	[0, 1, 0, 0],
	[1, 0, 0, 0],
	[0, 0, 0, 1],
	[0, 0, 1, 0]
];
const exDFSGraph2 = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[0, 0, 1, 0]
];
const dfsStartingNode = 3;
console.log(
	'dfsRecursion results:: ',
	dfsRecursion(exDFSGraph1, dfsStartingNode)
);
console.log(
	'dfsIterative results:: ',
	dfsIterative(exDFSGraph1, dfsStartingNode)
);
