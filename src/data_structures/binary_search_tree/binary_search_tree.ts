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

	isBinarySearchTree(tree: Node<T> | null) {
		let currentNode = tree;

		function isBinarySearchTreeHelper(currentNode: Node<T> | null) {
			const currentValue = currentNode?.value as T;
			const leftValue = currentNode?.left?.value as T;
			const rightValue = currentNode?.right?.value as T;

			if (!(leftValue < currentValue && currentValue < rightValue)) {
				console.log('not a tree');
				return false;
			}
			const leftNode = currentNode?.left ?? null;
			const rightNode = currentNode?.right ?? null;

			isBinarySearchTreeHelper(leftNode);
			isBinarySearchTreeHelper(rightNode);
		}

		isBinarySearchTreeHelper(currentNode);
	}

	/**
	 * Helper to print the Linked List
	 * @return {void}
	 */
	print(): void {
		console.log(JSON.stringify(this.root, null, 2));
	}
}

export default BinarySearchTree;
