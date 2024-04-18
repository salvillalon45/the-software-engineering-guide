/**
 * A class representing a Node in the Binary Search Tree
 * @class
 * @template T - The type of data stored in the node.
 */
class Node<T> {
	public value: T;
	public left: Node<T> | null;
	public right: Node<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/**
 * A class representing a Binary Search Tree
 * @class
 * @template T - The type of data stored in the Binary Search Tree.
 */
class BinarySearchTree<T> {
	public root: Node<T> | null;

	constructor() {
		this.root = null;
	}

	add(newValue: T): boolean {
		const newNode = new Node(newValue);

		if (this.root === null) {
			// First node in tree
			this.root = newNode;
			return true;
		}

		// If there is already a node in the tree
		let currentNode = this.root;

		while (currentNode !== null) {
			const { value: currentNodeValue } = currentNode;

			if (currentNodeValue === newValue) {
				// Value already exists
				return false;
			} else if (newValue < currentNodeValue) {
				// Go Left
				if (currentNode.left === null) {
					currentNode.left = newNode;
					break;
				} else {
					currentNode = currentNode.left;
				}
			} else if (newValue > currentNodeValue) {
				// Go Right
				if (currentNode.right === null) {
					currentNode.right = newNode;
					break;
				} else {
					currentNode = currentNode.right;
				}
			}
		}

		return true;
	}

	findMin(): T | null {
		// loop all the way to the left.
		// Once that currentNode.left is null, we found the leaf in the tree so we return the value
		if (this.root === null) {
			// Return null if tree is empty
			return null;
		}

		let currentNode = this.root;

		while (currentNode?.left !== null) {
			currentNode = currentNode?.left ?? null;
		}

		return currentNode.value;
	}

	findMax(): T | null {
		if (this.root === null) {
			// Return null if tree is empty
			return null;
		}

		let currentNode = this.root;

		while (currentNode?.right !== null) {
			currentNode = currentNode?.right ?? null;
		}

		return currentNode.value;
	}

	isPresent(searchValue: T): boolean {
		let currentNode = this.root;

		while (currentNode !== null) {
			const currentValue = currentNode.value;

			if (currentValue === searchValue) {
				return true;
			} else if (searchValue < currentValue) {
				// Go left
				currentNode = currentNode.left;
			} else {
				// Go right
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	// isBinarySearchTree(tree: Node<T> | null): boolean {
	// 	let currentNode = tree;
	// 	let leftNode = currentNode?.left ?? null;
	// 	let rightNode = currentNode?.right ?? null;
	// 	// console.log({ currentNode, leftNode, rightNode });

	// 	if (leftNode !== null) {
	// 		let currentValue = currentNode?.value as T;
	// 		let leftValue = currentNode?.left?.value as T;
	// 		console.log({ currentValue, leftValue });
	// 		if (!(leftValue < currentValue)) {
	// 			// Not in order
	// 			return false;
	// 		} else {
	// 			let res = this.isBinarySearchTree(leftNode);
	// 			console.log(res);
	// 		}
	// 	}
	// 	if (rightNode !== null) {
	// 		let currentValue = currentNode?.value as T;
	// 		let rightValue = currentNode?.right?.value as T;
	// 		console.log({ currentValue, rightValue });

	// 		if (!(currentValue <= rightValue)) {
	// 			// Not in order
	// 			return false;
	// 		} else {
	// 			return this.isBinarySearchTree(rightNode);
	// 		}
	// 	}

	// 	return true;
	// }

	/**
	 * Helper to print the Linked List
	 * @return {void}
	 */
	print(): void {
		console.log(JSON.stringify(this.root, null, 2));
	}
}

interface TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

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

export function isBinarySearchTree(tree: TreeNode): boolean {
	function valid(
		node: TreeNode | null,
		left: number,
		right: number
	): boolean {
		if (node === null) {
			// An empty tree is a valid BST
			return true;
		}

		let currentValue = node.value;

		if (!(currentValue < right && currentValue > left)) {
			// Here check if the value are in correct order, if
			// not then return false!
			return false;
		}

		return (
			valid(node.left, left, node.value) &&
			valid(node.right, node.value, right)
		);
	}

	return valid(tree, -Infinity, Infinity);
}

export default BinarySearchTree;
