export class Graph<T> {
	private graph: Array<Array<T>>;
	private root: number;

	constructor(graph: Array<Array<T>>, root: number) {
		this.graph = graph;
		this.root = root;
	}

	bfsTravesal(cell: T, x: number, y: number) {
		const queue = [cell];

		while (queue.length > 0) {
			const currentCell = queue.shift();

			// Check all directions
			const up = [x + 1, y];
			const down = [x - 1, y];
			const left = [x, y - 1];
			const right = [x, y + 1];
		}
	}

	bfs() {
		const { graph } = this;

		for (let i = 0; i < graph.length; i++) {
			for (let j = 0; j < graph[i].length; j++) {
				this.bfsTravesal(graph[i][j], i, j);
			}
		}
	}
}
