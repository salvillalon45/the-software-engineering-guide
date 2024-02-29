# Queue in TypeScript/JavaScript

# Summary

A queue is a data structure that follows the **First In - First Out** principle. This means that the first element added to the queue will be the first one to be removed! Example: People waiting in line to pay for their groceries at a store! The person who arrives first will be served first!

Examples

<div style='display: flex; gap: 1rem'>
    <img src="./queue.png" alt="A visual of a queue with methods" width="300"/>
    <img src="./person_queue.jpg" alt="A line of people" width="200"/>
</div>

## Implementation

-   Implemented a generic Queue class using TypeScript!
-   Learned how to setup a TypeScript project with nodemon!
-   Includes the following **private** member variables

        -   **head**: represents the first element in the queue. The one to be dequeued
        -   **tail**: represents the last element in the queue. The one to be enqueued
        -   **queue**: represents the data structure we will do the operations on

-   Includes the following methods:

    -   **enqueue**: Adds an element to the back of the queue
    -   **dequeue**: Removes from the front of the queue.
    -   **front**: Returns the element in the front of the queue.
    -   **size**: Return totals element in the queue.
    -   **isEmpty**: Check if the queue is empty.
    -   **getQueue**: Get the current queue

-   Time & Space Complexity
    -   **enqueue**:
        -   Time O(1): since we are using the `this.tail` to place the element in the back of the queue
        -   SpaceO(1): no new space created
    -   **dequeue**:
        -   Time O(1): since we are using the `this.head` to get the front element. Not actually looping
        -   Space O(1): now new space created
    -   **front**:
        -   Time O(1): since we are using the `this.head` to get the front element. Not actually looping
        -   Space O(1): now new space created
    -   **size**:
        -   Time O(1): subtracting `this.tail - this.head` is constant
        -   Space O(1): now new space created
    -   **isEmpty**:
        -   Time O(1): it is constant
        -   Space O(1): now new space created
    -   **getQueue**:
        -   Time O(N): Loop through the queue with N amount of elements
        -   Space O(N): creates a new array with the elements of the queue

## Notes && Interesting facts

### Removing data from the queue

This happened in the stack as well. Instead of removing items from the queue, I can use the head pointer and move it to show where I want the queue to start printing.

I then created a `getQueue` function that will create a new array with all the values starting from where `this.head` points
