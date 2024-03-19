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

	add(newData: T): boolean {
		const newNode = new Node(newData);

		function addHelper(currentNode: Node<T> | null) {
			console.log('inside addHelper');
			const currentNodeValue = currentNode?.value as T;
			console.log({ currentNode, currentNodeValue });

			if (currentNode === null) {
				console.log('currentNode is null');
				currentNode = newNode;
				return true;
			}
			if (newData < currentNodeValue) {
				console.log(currentNode);
				const leftNode = currentNode?.left as Node<T>;
				addHelper(leftNode);
			}
		}

		if (this.root === null) {
			this.root = newNode;
			return true;
		} else {
			addHelper(this.root);
		}

		return false;
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
