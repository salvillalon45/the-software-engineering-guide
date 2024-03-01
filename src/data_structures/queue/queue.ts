class Queue<T> {
	private queue: Array<T>;
	private tail: number;
	private head: number;

	constructor() {
		this.queue = new Array();
		this.tail = 0;
		this.head = 0;
	}

	/**
	 * Pushes an element to the tail/back of the queue
	 * @param {T} element - the element to be added to the queue
	 * @return {void}
	 */
	enqueue(element: T): void {
		this.queue[this.tail] = element;
		this.tail++;
	}

	/**
	 * Removes an element to from the front/head of the queue
	 * @return {T} The element in the front of the queue
	 */
	dequeue(): T {
		const frontElement = this.front();
		this.head++;
		return frontElement;
	}

	/**
	 * Returns the element in the front of the queue
	 * @return {T} The element in the front of the queue
	 */
	front(): T {
		return this.queue[this.head];
	}

	/**
	 * Check if the queue is empty
	 * @return {boolean} true if the queue is empty, false otherwise
	 */
	isEmpty(): boolean {
		return this.size() === 0;
	}

	/**
	 * Total elements in the queue
	 * @return {number} Total elements in the queue
	 */
	size(): number {
		return this.tail - this.head;
	}

	/**
	 * Get the current queue
	 *
	 * @return {Array<T>} Array of T values
	 */
	/*
		Return an array with all the values in the queue! We use this.head
	 	to know where to start iterating from!
	*/
	getQueue(): Array<T> {
		const currentQueue = [];

		for (let i = this.head; i < this.queue.length; i++) {
			const element = this.queue[i];
			currentQueue.push(element);
		}

		return currentQueue;
	}

	/**
	 * Helper to print the queue
	 * @return {void}
	 */
	print(): void {
		console.log('Printing the queue');
		console.log('---------------------');
		for (let i = this.head; i < this.queue.length; i++) {
			const element = this.queue[i];
			console.log({ index: i, element });
		}
		console.log('---------------------');
	}
}

export default Queue;
