# Design a Singly Linked List

## Problem Description

In this assignment, you will be tasked with implementing a basic linked list data structure in TypeScript. Linked lists are fundamental data structures consisting of a sequence of elements (nodes), where each node points to the next node in the sequence. Your implementation should include functionalities to insert elements at the head and tail of the linked list, remove elements from specified positions, retrieve elements at given indices, and convert the linked list into an array.

## Class Structure:

### Node Class:

-   Create a Node class to represent individual elements in the linked list.
-   Each node should contain two properties: data, which stores the value of the node, and next, a reference to the next node in the sequence.

### Linked List Class:

-   Implement a LinkedList class to manage the linked list.
-   It should contain properties to keep track of the head and tail nodes, as well as the length of the linked list.
-   Implement methods to:
    -   **insertHead**: Insert a new node at the head of the linked list.
    -   **insertTail**: Insert a new node at the tail of the linked list.
    -   **insertAt**: Insert a new node at a given index.
    -   **remove**: Remove a node at a specified index.
    -   **get**: Retrieve the value of a node at a given index.
    -   **toArray**: Convert the linked list into an array.
    -   **length**: Get the length of the linked list.

## Requirements:

1. Implement the Node and LinkedList classes according to the provided specifications.
2. Ensure that the linked list behaves correctly when adding, removing, and retrieving elements.
3. Test your implementation thoroughly using various test cases to validate its functionality.
4. Use TypeScript syntax and adhere to best practices for code readability and maintainability.

## Example Usage:

```
// Sample usage of the implemented linked list

const list = new LinkedList<number>();

list.insertHead(10);

list.insertTail(20);

list.insertTail(30);

list.print(); // Output: 10 -> 20 -> 30

console.log(list.get(1)); // Output: 20

list.remove(1);

list.print(); // Output: 10 -> 30

console.log(list.toArray()); // Output: [10, 30]

console.log(list.getLength()); // Output: 2
```
