class Node<T> {
	public data: T;
	public next: Node<T> | null;

	constructor(data: T, next: Node<T> | null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList<T> {
	private head: Node<T> | null;
	private tail: Node<T> | null;
	private length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	insertHead(val: T) {
		if (this.head === null) {
			const newNode = new Node(val, null);

			this.head = newNode;
			this.tail = newNode;

			this.length++;
		}
	}

	insertTail(val: T) {
		const newNode = new Node(val, null);
		console.log({ newNode });
		if (this.tail === null) {
			this.tail = newNode;
			this.head = newNode;
		} else {
			const previousNode = this.tail as Node<T>;
			console.log({ previousNode });
			previousNode.next = newNode;

			this.tail = newNode;
		}

		this.length++;
	}

	get(i: number): number | T {
		if (this.getLength() - 1 < i) {
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

	remove(i: number): boolean {
		if (this.getLength() - 1 < i) {
			// The i is out of bounds
			return false;
		}

		if (i === 0) {
			// if they are trying to remove the first node
			// All we need is to change this.head to point to the next one
			this.head = this.head?.next as Node<T>;
			this.length--;
			return true;
		}

		let currentNode = this.head;
		let previousNode = this.head as Node<T>;
		let searchIndex = 0;

		while (currentNode !== null) {
			if (searchIndex === i) {
				const nextNode = currentNode.next;
				previousNode.next = nextNode;
				this.length--;
				// Need to change this.tail to point to the first node, since there are not other nodes!
				const tail = this.tail;
				const head = this.head;

				console.log({
					currentNode,
					nextNode,
					previousNode,
					tail,
					head
				});

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

	getValues(): Array<T> {
		let currentNode = this.head;
		const linkedListArray: Array<T> = new Array();

		while (currentNode !== null) {
			const { data } = currentNode;
			linkedListArray.push(data);
			currentNode = currentNode.next;
		}

		return linkedListArray;
	}

	add(data: T) {
		let currentNode = this.head;

		// here the nullish coalesing and optional chaining are included
		// due to typescript error warnings, not really needed for LinkedList
		// functionality
		while (currentNode?.next !== null) {
			currentNode = currentNode?.next ?? null;
		}

		const newNode = new Node(data, null);
		currentNode.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	getLength() {
		return this.length;
	}

	print(): void {
		console.log('Printing the LinkedList');
		console.log('---------------------');

		let currentNode = this.head;
		let index = 0;

		while (currentNode !== null) {
			const { data } = currentNode;

			console.log({ index, data });
			const tail = this.tail;
			const head = this.head;

			console.log({
				currentNode,

				tail,
				head
			});

			currentNode = currentNode.next;
			index++;
		}

		console.log('');
		console.log('Current length of LinkedList:: ', this.getLength());

		console.log('---------------------');
	}
}

export default LinkedList;
