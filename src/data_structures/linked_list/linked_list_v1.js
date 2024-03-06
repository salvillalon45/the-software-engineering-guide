// class Node {
// 	constructor(data, next) {
// 		this.data = data;
// 		this.next = next;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.length = 0;
// 	}

// 	insertHead(val) {
// 		if (this.head === null) {
// 			const newNode = new Node(val, null);

// 			this.head = newNode;
// 			this.tail = newNode;

// 			this.length++;
// 		}
// 	}

// 	insertTail(val) {
// 		const previousNode = this.tail;
// 		const newNode = new Node(val, null);

// 		previousNode.next = newNode;

// 		this.tail = newNode;

// 		this.length++;
// 	}

// 	get(i) {
// 		if (this.getLength() - 1 < i) {
// 			return -1;
// 		}

// 		let currentNode = this.head;
// 		let searchIndex = 0;

// 		while (currentNode !== null) {
// 			const { data } = currentNode;

// 			if (searchIndex === i) {
// 				return data;
// 			}

// 			currentNode = currentNode.next;
// 			searchIndex++;
// 		}

// 		return -1;
// 	}

// 	remove(i) {
// 		if (this.getLength() - 1 < i) {
// 			return false;
// 		}

// 		if (i === 0) {
// 			this.head = this.head.next;
// 			this.length--;
// 		}

// 		let currentNode = this.head;
// 		let previousNode = this.head;
// 		let searchIndex = 0;

// 		while (currentNode !== null) {
// 			if (searchIndex === i) {
// 				const nextNode = currentNode.next;
// 				previousNode.next = nextNode;
// 				this.length--;

// 				return true;
// 			}

// 			previousNode = currentNode;
// 			currentNode = currentNode.next;
// 			searchIndex++;
// 		}

// 		return false;
// 	}

// 	getValues() {
// 		let currentNode = this.head;
// 		const linkedListArray = [];

// 		while (currentNode !== null) {
// 			const { data } = currentNode;
// 			linkedListArray.push(data);
// 			currentNode = currentNode.next;
// 		}

// 		return linkedListArray;
// 	}

// 	add(data) {
// 		let currentNode = this.head;

// 		while (currentNode?.next !== null) {
// 			currentNode = currentNode?.next ?? null;
// 		}

// 		const newNode = new Node(data, null);
// 		currentNode.next = newNode;
// 		this.tail = newNode;
// 		this.length++;
// 	}

// 	getLength() {
// 		return this.length;
// 	}

// 	print() {
// 		console.log('Printing the LinkedList');
// 		console.log('---------------------');

// 		let currentNode = this.head;
// 		let index = 0;

// 		while (currentNode !== null) {
// 			const { data } = currentNode;

// 			console.log({ index, data });

// 			currentNode = currentNode.next;
// 			index++;
// 		}
// 		console.log('');
// 		console.log('Current length of LinkedList:: ', this.getLength());

// 		console.log('---------------------');
// 	}
// }

// module.exports = LinkedList;
