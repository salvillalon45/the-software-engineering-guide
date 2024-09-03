/**
 * Checks if the given coordinate is an island. If the coordinate is one, then return true/
 * @param {Array<Array<string>>} grid - The grid of land to visit
 * @param {number} x - The coordinate to check for
 * @param {number} y - The coordinate to check for
 * @return {boolean}
 */
function isIslandNumberOfIslands(
	grid: Array<Array<string>>,
	x: number,
	y: number
): boolean {
	return (
		// Check if it is not undefined
		x !== undefined &&
		y !== undefined &&
		// The coordinate cannot be less than zero i.e -1
		x >= 0 &&
		y >= 0 &&
		// Check the coordinate is in bounds
		x <= grid.length - 1 &&
		y <= grid[x].length &&
		// Check if it an island
		grid[x][y] === '1'
	);
}

/**
 * Performs Breadth-First Search traversal on the island grid. This is an iterative approach.
 * For it to work we need a queue for our memory allocation
 * @param {Array<Array<string>>} grid - The grid of land to visit
 * @param {number} startingX - The coordinate to start traversing from
 * @param {number} startingY - The coordinate to start traversing from
 * @return {void}
 */
function bfsTraversalNumberOfIslands(
	grid: Array<Array<string>>,
	startingX: number,
	startingY: number
): void {
	const queue = [[startingX, startingY]];

	while (queue.length > 0) {
		const currentCellCoordinates = queue.shift() as Array<number>;
		const x = currentCellCoordinates[0];
		const y = currentCellCoordinates[1];

		const up = [x - 1, y];
		const down = [x + 1, y];
		const left = [x, y - 1];
		const right = [x, y + 1];

		const upX = up[0];
		const upY = up[1];
		const downX = down[0];
		const downY = down[1];
		const leftX = left[0];
		const leftY = left[1];
		const rightX = right[0];
		const rightY = right[1];

		if (isIslandNumberOfIslands(grid, upX, upY)) {
			queue.push([upX, upY]);
			grid[upX][upY] = '0';
		}
		if (isIslandNumberOfIslands(grid, downX, downY)) {
			queue.push([downX, downY]);
			grid[downX][downY] = '0';
		}
		if (isIslandNumberOfIslands(grid, leftX, leftY)) {
			queue.push([leftX, leftY]);
			grid[leftX][leftY] = '0';
		}
		if (isIslandNumberOfIslands(grid, rightX, rightY)) {
			queue.push([rightX, rightY]);
			grid[rightX][rightY] = '0';
		}
	}
}

/**
 * Counts the number of islands found for a given grid. It uses Breadth First Search traversal
 * to navigate the grid and count the number of islands.
 * @return {number}
 */
function countNumberOfIslands(grid: Array<Array<string>>): number {
	let islandCount = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			const cell = grid[i][j];

			if (cell === '1') {
				islandCount += 1;
				bfsTraversalNumberOfIslands(grid, i, j);
			}
		}
	}

	return islandCount;
}

let grid = [
	['0', '1', '1', '1', '0'],
	['0', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0']
];

console.log(countNumberOfIslands(grid));
