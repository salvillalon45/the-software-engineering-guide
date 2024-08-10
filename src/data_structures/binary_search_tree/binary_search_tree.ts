/**
 * A class representing a Node in the Binary Search Tree
 * @class
 * @template T - The type of data stored in the node.
 */
export class Node<T> {
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

	/**
	 * Adds a new node into the bst. It will correctly insert in the left or right subtree.
	 * @param {T} element - the element to be added to the bst
	 * @return {boolean} False if value already exists, true if added successfully
	 */
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
	 * Finds the minimum value in the bst.
	 * @return {T | null} The minimum value
	 */
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

	/**
	 * Finds the maximum value in the bst.
	 * @return {T | null} The maximum value
	 */
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

	/**
	 * Determines if the value you are searching for exists in the bst.
	 * @return {boolean} False if value does not exist, True if value does exist
	 */
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

	/**
	 * Determines if the given tree is balanced.
	 * A balanced tree is a type of binary tree in which the height difference
	 * between the left and right subtrees of any node is no more than one.
	 * This mean you need to check the height difference at each node and their subtree
	 * @return {boolean} Boolean - if the tree is balanced or not
	 */
	isBalanced(): boolean {
		function checkBalance(node: Node<T> | null) {
			if (node === null) {
				return 0;
			} else {
				const leftResult = checkBalance(node.left) as number;
				const rightResult = checkBalance(node.right) as number;

				const heightDifference = Math.abs(leftResult - rightResult);

				if (heightDifference <= 1) {
					// Balanced
					return 1 + Math.max(leftResult, rightResult);
				} else {
					// Not Balanced
					return -1;
				}
			}
		}

		const result = checkBalance(this.root);
		return result !== -1;
	}

	/**
	 * Helper to find the minimum height of a bst.
	 * @return {number} The minimum height of the bst
	 */
	private findMinHeightHelper(node: Node<T> | null): number {
		if (node === null) {
			return 0;
		}

		const leftHeight = this.findMinHeightHelper(node.left) as number;
		const rightHeight = this.findMinHeightHelper(node.right) as number;

		return 1 + Math.min(leftHeight, rightHeight);
	}

	/**
	 * Find the minimum height of a bst.
	 * @return {number} The minimum height of the bst
	 */
	findMinHeight(root: Node<T> | null): number {
		const height = this.findMinHeightHelper(root) - 1;
		return height;
	}

	/**
	 * Helper to find the maximum height of a bst
	 * @return {number} The maximum height of the bst
	 */
	private findMaxHeightHelper(node: Node<T> | null) {
		if (node === null) {
			// If the node is null, it contributes 0 to the height
			return 0;
		}

		// Recursively find the height of the left subtree
		const leftResult = this.findMaxHeightHelper(node.left) as number;

		// Recursively find the height of the right subtree
		const rightResult = this.findMaxHeightHelper(node.right) as number;

		// Return the height of the tree rooted at this node
		// The height is 1 (for the current node) plus the maximum of the heights of the left and right subtrees
		return 1 + Math.max(leftResult, rightResult);
	}

	/**
	 * Find the maximum height of a bst
	 * @return {number} The maximum height of the bst
	 */
	findMaxHeight(root: Node<T> | null): number {
		/*
			Why subtract minus 1? Because the height of a node is defined as the number of edges on the longest
			path from the node to a leaf
			    4
			   /
			  2
			Here there are two nodes and one edge. 2 - 1 = 1. This is the height
		*/
		const height = this.findMaxHeightHelper(root) - 1;
		return height;
	}

	/**
	 * Perform a In Order traversal of the bst tree.
	 * In-order: Begin the search at the left-most node and end at the right-most node
	 * If the bst is empty, return null
	 * @return {Array<T> | null} Array of the nodes visited in inorder traversal or null
	 */
	inorder(): Array<T> | null {
		const inorderNodes: Array<T> = [];

		function inorderTraversal(node: Node<T> | null) {
			if (node === null) {
				return;
			}

			inorderTraversal(node.left);
			inorderNodes.push(node.value);
			inorderTraversal(node.right);
		}

		if (this.root === null) {
			return null;
		}

		inorderTraversal(this.root);
		return inorderNodes;
	}

	/**
	 * Perform a Pre Order traversal of the bst tree.
	 * Pre-order: Explore all the roots before the leaves.
	 * If the bst is empty, return null
	 * @return {Array<T> | null} Array of the nodes visited in preorder traversal or null
	 */
	preorder() {
		const preorderNodes: Array<T> = [];

		function preorderTraversal(node: Node<T> | null) {
			if (node === null) {
				return;
			}

			preorderNodes.push(node.value);
			preorderTraversal(node.left);
			preorderTraversal(node.right);
		}

		if (this.root === null) {
			return null;
		}

		preorderTraversal(this.root);
	}

	/**
	 * Perform a Post Order traversal of the bst tree.
	 * Pre-order: Explore all the leaves before the root.
	 * If the bst is empty, return null
	 * @return {Array<T> | null} Array of the nodes visited in postorder traversal or null
	 */
	postorder() {
		const postorderNodes: Array<T> = [];

		function postorderTraversal(node: Node<T> | null) {
			if (node === null) {
				return;
			}

			postorderTraversal(node.left);
			postorderTraversal(node.right);
			postorderNodes.push(node.value);
		}

		if (this.root === null) {
			return null;
		}

		postorderTraversal(this.root);
		return postorderNodes;
	}

	/**
	 * Perform a Level Order traversal of the bst tree.
	 * Level Order: Level - Order is Breadth-First Search. It explores all the nodes in a given level
	 * within a tree before continuing on to the next level.
	 * If the bst is empty, return null
	 * @return {Array<T> | null} Array of the nodes visited in level order traversal or null
	 */
	levelOrder() {
		const queue = [this.root];
		const levelOrderNodes: Array<T> = [];

		function levelOrderTraversal() {
			while (queue.length > 0) {
				const node = queue.shift() as Node<T>;
				const nodeValue = node.value;

				levelOrderNodes.push(nodeValue);

				if (node.left !== null) {
					queue.push(node.left);
				}
				if (node.right !== null) {
					queue.push(node.right);
				}
			}
		}

		if (this.root === null) {
			return null;
		}

		levelOrderTraversal();
		return levelOrderNodes;
	}

	/**
	 * Perform a Reverse Level Order traversal of the bst tree.
	 * Level Order: Level - Order is Breadth-First Search. It explores all the nodes in a given level
	 * within a tree before continuing on to the next level.
	 * If the bst is empty, return null
	 * @return {Array<T> | null} Array of the nodes visited in reverse level order traversal or null
	 */
	reverseLevelOrder(): Array<T> | null {
		const queue = [this.root];
		const reverseLevelOrderNodes: Array<T> = [];

		function reverseLevelOrderTraversal() {
			while (queue.length > 0) {
				const node = queue.shift() as Node<T>;
				const nodeValue = node.value;

				reverseLevelOrderNodes.push(nodeValue);

				if (node.right !== null) {
					queue.push(node.right);
				}
				if (node.left !== null) {
					queue.push(node.left);
				}
			}
		}

		if (this.root === null) {
			return null;
		}

		reverseLevelOrderTraversal();
		return reverseLevelOrderNodes;
	}

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
