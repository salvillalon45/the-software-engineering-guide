// function isIsland(grid: Array<Array<string>>, x: number, y: number) {
// 	return (
// 		x !== undefined &&
// 		y !== undefined &&
// 		x >= 0 &&
// 		y >= 0 &&
// 		x <= grid.length - 1 &&
// 		y <= grid[x].length &&
// 		grid[x][y] === '1'
// 	);
// }

// function bfsTraversal(
// 	grid: Array<Array<string>>,
// 	startingX: number,
// 	startingY: number
// ) {
// 	const queue = [[startingX, startingY]];
// 	console.log({ startingX, startingY });
// 	while (queue.length > 0) {
// 		const currentCellCoordinates = queue.shift() as Array<number>;
// 		const x = currentCellCoordinates[0];
// 		const y = currentCellCoordinates[1];

// 		const up = [x - 1, y];
// 		const down = [x + 1, y];
// 		const left = [x, y - 1];
// 		const right = [x, y + 1];

// 		const upX = up[0];
// 		const upY = up[1];
// 		const downX = down[0];
// 		const downY = down[1];
// 		const leftX = left[0];
// 		const leftY = left[1];
// 		const rightX = right[0];
// 		const rightY = right[1];

// 		console.log({ up, down, left, right, x, y });

// 		if (isIsland(grid, upX, upY)) {
// 			console.log('found a 1, up dir');
// 			queue.push([upX, upY]);
// 			grid[upX][upY] = '0';
// 		}
// 		if (isIsland(grid, downX, downY)) {
// 			console.log('found a 1, down dir');
// 			queue.push([downX, downY]);
// 			grid[downX][downY] = '0';
// 		}
// 		if (isIsland(grid, leftX, leftY)) {
// 			console.log('found a 1, left dir');
// 			queue.push([leftX, leftY]);
// 			grid[leftX][leftY] = '0';
// 		}
// 		if (isIsland(grid, rightX, rightY)) {
// 			console.log('found a 1, right dir');
// 			queue.push([rightX, rightY]);
// 			grid[rightX][rightY] = '0';
// 		}
// 		console.log('ending queue:: ', queue);
// 		console.log('------');
// 	}
// }

// function numIslands(grid: Array<Array<string>>) {
// 	let islandCount = 0;

// 	for (let i = 0; i < grid.length; i++) {
// 		for (let j = 0; j < grid[i].length; j++) {
// 			const cell = grid[i][j];
// 			console.log({ cell });
// 			if (cell === '1') {
// 				islandCount += 1;
// 				bfsTraversal(grid, i, j);
// 			}
// 		}
// 	}

// 	console.log({ islandCount, grid });

// 	return islandCount;
// }

// let grid = [
// 	['0', '1', '1', '1', '0'],
// 	['0', '1', '0', '1', '0'],
// 	['1', '1', '0', '0', '0'],
// 	['0', '0', '0', '0', '0']
// ];

// grid = [
// 	['1', '1', '0', '0', '1'],
// 	['1', '1', '0', '0', '1'],
// 	['0', '0', '1', '0', '0'],
// 	['0', '0', '0', '1', '1']
// ];

// numIslands(grid);
