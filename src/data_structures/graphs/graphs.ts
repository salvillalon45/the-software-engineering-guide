// export class Graph<T> {
// 	private graph: Array<Array<T>>;
// 	private root: number;
// 	private graphBound: number;

// 	constructor(graph: Array<Array<T>>, root: number) {
// 		this.graph = graph;
// 		this.root = root;
// 		this.graphBound = graph[0].length - 1;
// 	}

// 	bfsTravesal(cell: T, x: number, y: number) {
// 		const queue = [cell];
// 		const { graph, graphBound } = this;

// 		while (queue.length > 0) {
// 			const currentCell = queue.shift();

// 			// Check all directions
// 			const up = [x - 1, y];
// 			const down = [x + 1, y];
// 			const left = [x, y - 1];
// 			const right = [x, y + 1];

// 			const upX = up[0];
// 			const upY = up[1];
// 			const downX = down[0];
// 			const downY = down[1];
// 			const leftX = left[0];
// 			const leftY = left[1];
// 			const rightX = right[0];
// 			const rightY = right[1];
// 			// console.log(graph[upX][upY], { x, y, downX, downY });
// 			console.log('checking for::', { x, y, downX, downY, graphBound });
// 			if (
// 				graphBound >= upX &&
// 				upX >= 0 &&
// 				upY >= 0 &&
// 				graph[upX][upY] === 1
// 			) {
// 				console.log('Found one going up');
// 				console.log({ cell: graph[upX][upY], upX, upY });
// 				console.log('----');
// 			}
// 			if (
// 				graphBound >= downX &&
// 				downX >= 0 &&
// 				downY >= 0 &&
// 				graph[downX][downY] === 1
// 			) {
// 				console.log('Found one going down');
// 				console.log({ cell: graph[downX][downY], downX, downY });
// 				console.log('----');
// 			}
// 			if (
// 				graphBound >= leftX &&
// 				leftX >= 0 &&
// 				leftY >= 0 &&
// 				graph[leftX][leftY]
// 			) {
// 				console.log('Found one going left');
// 				console.log({ cell: graph[leftX][leftY], leftX, leftY });
// 				console.log('----');
// 			}
// 			if (
// 				graphBound >= rightX &&
// 				rightX >= 0 &&
// 				rightY >= 0 &&
// 				graph[rightX][rightY]
// 			) {
// 				console.log('Found one going left');
// 				console.log({ cell: graph[rightX][rightY], rightX, rightY });
// 				console.log('----');
// 			}
// 		}
// 	}

// 	bfs() {
// 		const { graph } = this;

// 		for (let i = 0; i < graph.length; i++) {
// 			for (let j = 0; j < graph[i].length; j++) {
// 				this.bfsTravesal(graph[i][j], i, j);
// 			}
// 		}
// 	}
// }
