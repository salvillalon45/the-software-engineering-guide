# Design a Queue

## Problem Description

You are tasked with implementing a basic queue data structure in TypeScript/JavaScript of your choice. The queue should support the following operations:

1.  Enqueue: Add an element to the end of the queue.
2.  Dequeue: Remove and return the element from the front of the queue.
3.  Front: Return the element at the front of the queue without removing it.
4.  isEmpty: Return true if the queue is empty, false otherwise.
5.  Size: Return the number of elements currently in the queue.

Additionally, you need to implement a `print` method to display the elements of the queue.

## Requirements

1.  The implementation should be in a class named `Queue`.
2.  Use an array to store the elements internally.
3.  Pay attention to efficient handling of edge cases, such as attempting to dequeue from an empty queue.
4.  Write a series of test cases to validate the correctness of your implementation.

## Example

```
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Front:", myQueue.front()); // Should print 1
console.log("Size:", myQueue.size()); // Should print 3

console.log("Dequeue:", myQueue.dequeue()); // Should print 1
console.log("Size:", myQueue.size()); // Should print 2

myQueue.print(); // Should print the remaining elements in the queue
```
