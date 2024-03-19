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
	private root: Node<T> | null;

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

	/**
	 * Helper to print the Linked List
	 * @return {void}
	 */
	print(): void {
		console.log(JSON.stringify(this.root, null, 2));
	}
}

export default BinarySearchTree;
