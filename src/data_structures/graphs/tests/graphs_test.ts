import {
	bfsAdjacencyMatrix,
	dfsIterativeAdjacencyMatrix,
	dfsRecursionAdjacencyMatrix
} from '../graphs';
import { t9Combos } from '../sample_problems/t9Combos';
import '../sample_problems/number_of_islands';

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

// console.log('bfsAdjacencyMatrix result:: ', bfsAdjacencyMatrix(exBFSGraph1, bfsStartingNode));

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
	'dfsRecursionAdjacencyMatrix results:: ',
	dfsRecursionAdjacencyMatrix(exDFSGraph1, dfsStartingNode)
);
console.log(
	'dfsIterativeAdjacencyMatrix results:: ',
	dfsIterativeAdjacencyMatrix(exDFSGraph1, dfsStartingNode)
);
