import { bfs } from '../graphs';
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
const startingNode = 1;

console.log('bfs result:: ', bfs(exBFSGraph1, startingNode));
