# Singly Linked List in TypeScript/JavaScript

## Summary

A Linked List is a linear data structure consisting of a sequence of elements, called nodes. Each node contains a reference (or link) to the next node in the sequence. Unlike arrays, linked list do not store elements in contiguous memory locations. They use pointers to connect node together.

Examples

<a href='https://stackoverflow.com/a/644297'>A train can be a good real life example of a Linked List!</a>

-   Train cars are linked in a specific order so that they may be loaded, unloaded, transferred, dropped off, and picked up in the most efficient manner possible.
-   The cars are loaded on the train in order so that a whole chunk of it can be detached, and the remainder of the train moves on.
-   The end of the train is easier to detach than a portion in the middle, and vastly easier than detaching a few cars in one spot, and a few cars in another spot.
-   If needed, however, you can insert and remove items at any point in the train.

<div style='display: flex; gap: 1rem'>
    <img src="../images/linked_list.png" alt="A visual of a linked list with pointers" width="300"/>
    <a href='https://stackoverflow.com/a/644297' target='_blank'>
        <img src="../images/train.jpeg" alt="A train" width="200"/>
    </a>
</div>

## Implementation

-   Implemented a generic Singly Linked List and Node class using TypeScript!
-   Learned how to setup a TypeScript project with nodemon!
-   Includes the following **private** member variables

        -   **tail**: represents the last element in the linked list
        -   **head**: represents the first element in the linked list
        -   **_length**: represents total nodes in the linked list

-   Includes the following methods:

    -   **insertHead**: Insert a new node at the head of the linked list.
    -   **insertTail**: Insert a new node at the tail of the linked list.
    -   **remove**: Remove a node at a specified index.
    -   **get**: Retrieve the value of a node at a given index.
    -   **toArray**: Convert the linked list into an array.
    -   **length**: Get the length of the linked list.
    -   **print**: Helper to print the linked list

-   Time & Space Complexity
    -   **insertHead**:
        -   Time O(1): moving the pointers to point at different nodes
        -   SpaceO(1): no new space created
    -   **insertTail**:
        -   Time O(1): moving the pointers to point at different nodes
        -   Space O(1): now new space created
    -   **remove**:
        -   Time O(N): looping through the list until we reach the designated node
        -   Space O(1): now new space created
    -   **get**:
        -   Time O(N): looping through the list until we reach the designated node
        -   Space O(1): now new space created
    -   **toArray**:
        -   Time O(N): looping through each node in the list and pushing the data property on each node and pushing it into an array
        -   Space O(1): now new space created
    -   **length**:
        -   Time O(1): returning the total length of the list
        -   Space O(1): now new space created
    -   **print**:
        -   Time O(N): looping through each node
        -   Space O(1): now new space created

## Notes && Interesting facts

This was a good exercise to remember how Linked List work. A good reminder on pointers and
