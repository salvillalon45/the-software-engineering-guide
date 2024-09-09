function islandsAndTreasure(grid: Array<Array<number>>) {
	const queue = [];
	const visitedMap = new Map();

	// Gather all possible treasure chest coordinates
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			const cell = grid[i][j];

			if (cell === 0) {
				queue.push([i, j]);
				visitedMap.set([i, j], [i, j]);
			}
		}
	}

	function addRoom(x: number, y: number) {
		const key = [x, y];

		if (
			x !== undefined &&
			y !== undefined &&
			x >= 0 &&
			y >= 0 &&
			x < grid.length &&
			y < grid[x].length &&
			visitedMap.has(key) === false &&
			grid[x][y] === 2147483647
		) {
			console.log('found an INF going ', [x, y]);
			queue.push([x, y]);
			visitedMap.set(key, [x, y]);
		} else {
			console.log('Found no room');
		}
	}

	console.log('what is queu', queue);
	let distance = 0;
	while (queue.length > 0) {
		for (let i = 0, len = queue.length; i < len; i++) {
			const coordinate = queue.shift() as Array<number>;
			console.log({ coordinate, queue, grid, distance });
			const x = coordinate[0] as number;
			const y = coordinate[1] as number;

			grid[x][y] = distance;

			// Check for all the other cells
			const up = [x - 1, y];
			const upX = up[0];
			const upY = up[1];

			const down = [x + 1, y];
			const downX = down[0];
			const downY = down[1];

			const left = [x, y - 1];
			const leftX = left[0];
			const leftY = left[1];

			const right = [x, y + 1];
			const rightX = right[0];
			const rightY = right[1];

			console.log('checking up', { upX, upY });
			addRoom(upX, upY);
			console.log('+++');

			console.log('checking down', { downX, downY });
			addRoom(downX, downY);
			console.log({ grid, distance });
			console.log('+++');

			console.log('checking left', { leftX, leftY });
			addRoom(leftX, leftY);
			console.log('+++');

			console.log('checking right', { rightX, rightY });
			console.log({ grid, distance });
			addRoom(rightX, rightY);
			console.log('+++');
		}

		console.log('+++++++++', 'going to update distance', { queue });
		distance += 1;
		console.log({ distance });
	}
}

let inputGrid = [
	[2147483647, -1, 0, 2147483647],
	[2147483647, 2147483647, 2147483647, -1],
	[2147483647, -1, 2147483647, -1],
	[0, -1, 2147483647, 2147483647]
];

islandsAndTreasure(inputGrid);
