/**
 * This is a brute force approach that uses breadth first search
 * to check if a tree is BST. This approach ultimately does not work
 * because there might be trees who a valid sub bst, but that sub bst
 * is not structurally correct
 *
 */
// export function isBinarySearchTree(tree: TreeNode | null): boolean {
// 	let currentNode = tree;
// 	let leftNode = currentNode?.left ?? null;
// 	let rightNode = currentNode?.right ?? null;

// 	console.log({ currentNode, leftNode, rightNode });

// 	if (tree === null) {
// 		return true; // An empty tree is considered a valid BST
// 	}

// 	if (leftNode !== null) {
// 		console.log('going to check for left');
// 		let currentValue = currentNode?.value as number;
// 		let leftValue = currentNode?.left?.value as number;
// 		console.log({ currentValue, leftValue });

// 		if (!(leftValue < currentValue)) {
// 			// Not in order
// 			console.log('left node not in order!');
// 			return false;
// 		} else {
// 			console.log('go further on left node!');
// 			let res = isBinarySearchTree(leftNode);
// 			console.log('res is ', res);

// 			// return res;
// 		}
// 	}

// 	if (rightNode !== null) {
// 		console.log('going to check for right');
// 		let currentValue = currentNode?.value as Number;
// 		let rightValue = currentNode?.right?.value as Number;
// 		console.log({ currentValue, rightValue });

// 		if (!(currentValue <= rightValue)) {
// 			// Not in order
// 			return false;
// 		} else {
// 			console.log('go further on right node!');
// 			let res = isBinarySearchTree(rightNode);
// 			console.log('res is ', res);
// 			// return isBinarySearchTree(rightNode);
// 		}
// 	}

// 	console.log('In order, return true');
// 	return true;
// }
