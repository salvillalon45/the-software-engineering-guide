/**
 * A class representing a Node in the Linked List
 * @class
 * @template T - The type of data stored in the node.
 */
class Node<T> {
	public data: T;
	public next: Node<T> | null;

	constructor(data: T, next: Node<T> | null) {
		this.data = data;
		this.next = next;
	}
}

/**
 * A class representing a Linked List
 * @class
 * @template T - The type of data stored in the linked list.
 */
class LinkedList<T> {
	private head: Node<T> | null;
	private tail: Node<T> | null;
	private _length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this._length = 0;
	}

	/**
	 * Insert a new node in the head/start of the Linked List
	 * @param {T} val - the element to be added to head/start of the Linked List
	 * @return {void}
	 */
	insertHead(val: T): void {
		const newNode = new Node(val, null);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const previousHead = this.head;
			this.head = newNode;
			newNode.next = previousHead;
		}

		this._length++;
	}

	/**
	 * Insert a new node in the tail/end of the Linked List
	 * @param {T} val - the element to be added to tail/end of the Linked List
	 * @return {void}
	 */
	insertTail(val: T): void {
		const newNode = new Node(val, null);

		if (this.tail === null) {
			this.tail = newNode;
			this.head = newNode;
		} else {
			const previousNode = this.tail as Node<T>;
			previousNode.next = newNode;
			this.tail = newNode;
		}

		this._length++;
	}

	/**
	 * Remove a node at a specified index. If the index is out of bounds, it will return a false
	 * @param {number} i - Index to remove node
	 * @return {boolean} A boolean checking if the operation was successful or not
	 */
	remove(i: number): boolean {
		if (this._length - 1 < i || i < 0) {
			// The i is out of bounds
			return false;
		}

		if (i === 0) {
			// if they are trying to remove the first node
			// All we need is to change this.head to point to the next one
			this.head = this.head?.next as Node<T>;

			if (this._length === 1) {
				/*
					If the node that we removed was the only node in the list
					update the tail to null
				*/
				this.tail = null;
			}

			this._length--;

			return true;
		}

		let currentNode = this.head;
		let previousNode = this.head as Node<T>;
		let searchIndex = 0;

		while (currentNode !== null) {
			if (searchIndex === i) {
				const nextNode = currentNode.next;
				previousNode.next = nextNode;
				this._length--;
				// Need to change this.tail to point to the first node, since there are not other nodes!

				if (previousNode.next === null) {
					this.tail = this.head;
				}

				return true;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
			searchIndex++;
		}

		return false;
	}

	/**
	 * Get a node at a specified index. If the index is out of bounds,
	 * it will return a negative one
	 * @param {number} i - Index to search for
	 * @return {number | T} Either a negative one for index out of bounds,
	 *  or the data that the node stores at the index
	 */
	get(i: number): number | T {
		if (this._length - 1 < i || i < 0) {
			// The i is out of bounds
			return -1;
		}

		let currentNode = this.head;
		let searchIndex = 0;

		while (currentNode !== null) {
			const { data } = currentNode;

			if (searchIndex === i) {
				return data;
			}

			currentNode = currentNode.next;
			searchIndex++;
		}

		return -1;
	}

	/**
	 * Convert the Linked List into an Array
	 * @return {Array<T>} An Array representing the Linked List
	 */
	toArray(): Array<T> {
		const linkedListArray: Array<T> = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			const { data } = currentNode;
			linkedListArray.push(data);
			currentNode = currentNode.next;
		}

		return linkedListArray;
	}

	/**
	 * Get the length of the Linked List
	 * @return {number} Total count of nodes in the Linked List
	 */
	get length(): number {
		return this._length;
	}

	/**
	 * Helper to print the Linked List
	 * @return {void}
	 */
	print(): void {
		console.log('Printing the LinkedList');
		console.log('---------------------');

		let currentNode = this.head;
		let index = 0;

		while (currentNode !== null) {
			const { data } = currentNode;
			console.log({ index, data });
			currentNode = currentNode.next;
			index++;
		}

		console.log('');
		console.log('Current length of LinkedList:: ', this._length);
		console.log('---------------------');
	}
}

export default LinkedList;
