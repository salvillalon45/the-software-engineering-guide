interface DynamicArrayInterface {
	capacity: number;
	array: Array<number | undefined>;
	size: number;
}

class DynamicArray implements DynamicArrayInterface {
	capacity: number;
	array: Array<number | undefined>;
	size: number;

	/**
	 * @constructor
	 * @param {number} capacity
	 */
	constructor(capacity: number) {
		this.capacity = capacity;
		this.array = new Array(capacity);
		this.size = 0;
	}

	/**
	 * @param {number} i
	 * @returns {number}
	 */
	get(i: number) {
		return this.array[i];
	}

	/**
	 * @param {number} i
	 * @param {number} n
	 * @returns {void}
	 */
	set(i: number, n: number) {
		this.array[i] = n;
	}

	/**
	 * @param {number} n
	 * @returns {void}
	 * when you add an element using the pushBack method, you place the new
	 * element at the position indicated by the current size of the array.
	 * After adding an element, you increment the size to reflect
	 * the new total number of elements in the array.
	 * We use the size to tell us how many elements are in the array
	 * And we use the size to place the element at the end of the array!
	 * Once we do it, then we increment size!
	 */
	pushback(n: number) {
		if (this.size === this.capacity) {
			// there are more elements than available for capacity!
			// so we must resize
			this.resize();
		}

		this.array[this.size] = n;
		this.size++;
	}

	/**
	 * @returns {number}
	 */
	popback() {
		const lastIndex = this.size - 1;
		const lastElement = this.array[lastIndex];

		// Optinal if you want to include a marker saying that the element has
		// been removed
		// this.array[lastIndex] = undefined;

		this.size--;

		return lastElement;
	}

	/**
	 * @returns {void}
	 */
	resize() {
		this.capacity = this.capacity * 2;

		const lastIndex = this.capacity - 1;
		const newArray = new Array(this.capacity);

		this.array.forEach((element, index) => {
			newArray[index] = element;
		});

		this.array = newArray;
	}

	/**
	 * @returns {number}
	 */
	getSize() {
		return this.size;
	}

	/**
	 * @returns {number}
	 */
	getCapacity() {
		return this.capacity;
	}
}

export default DynamicArray;
