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

	inOrderTraversalCount(): Array<number> {
		const inorderNodes: Array<number> = [];

		// function inOrderTraversalHelper(node: Node<T> | null, count: number) {
		// 	if (node === null) {
		// 		return;
		// 	} else {
		// 		count += 1;
		// 		inOrderTraversalHelper(node.left, count);
		// 		const nodeValue = node.value as number;
		// 		inorderNodes.push(nodeValue);
		// 		inOrderTraversalHelper(node.right, count);
		// 	}
		// }

		function inOrderTraversalHelper(node: Node<number> | null): number {
			if (node === null) {
				return 0;
			} else {
				return (
					1 +
					inOrderTraversalHelper(node.left) +
					inOrderTraversalHelper(node.right)
				);
			}
		}

		inOrderTraversalHelper(this.root);
		console.log({ inorderNodes }, inorderNodes.length);

		return inorderNodes;
	}

	// findMaxHeight(): number {
	// 	if (this.root === null) {
	// 		// Return 0 if tree is empty
	// 		return -1;
	// 	} else {
	// 		const inorderNodes = this.inOrderTraversal();
	// 		const totalNodes = inorderNodes.length;
	// 		const maxHeight = totalNodes - 1;
	// 		return maxHeight;
	// 	}
	// }

	// findMinHeight(): number {
	// 	if (this.root === null) {
	// 		// Return 0 if tree is empty
	// 		return -1;
	// 	} else {
	// 		const inorderNodes = this.inOrderTraversal();
	// 		const totalNodes = inorderNodes.length;
	// 		const minimumHeight = Math.log2(totalNodes);
	// 		return minimumHeight;
	// 	}
	// }

	// isBalanced(): boolean {
	// 	const result = this.findMaxHeight() - this.findMinHeight();
	// 	return result <= 1;
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
			// not then return false
			return false;
		}

		return (
			valid(node.left, left, currentValue) &&
			valid(node.right, currentValue, right)
		);
	}

	return valid(tree, -Infinity, Infinity);
}

export default BinarySearchTree;
