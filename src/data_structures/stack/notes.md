# Stack in TypeScript/JavaScript

# Summary and Implementation

-   A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. In a stack, the last element added is the first one to be removed. Think of it like a stack of plates in a cafeteria, where you can only take the top plate off the stack.

-   Implemented a Stack class using TypeScript!
-   Learned how to setup a TypeScript project with nodemon!
-   Includes the following **private** member variables

    -   **index**: represents the current index for the next element to be pushed
    -   **size**: variable represents the number of elements in the stack
    -   **stack**: represents the data structure we will do the operations on

-   Includes the following methods:
    -   **push**: Adds an element to the stack and increments the index and size
    -   **pop**: Removes and returns the top element of the stack.
    -   **clear**: Clears the stack and resets the size and index.
    -   **peek**: Return the element at the top of the stack without removing it.
    -   **isEmpty**: Check if the stack is empty.

## Notes

-   To work with the stack I used an array. Instead of viewing the array from left to right, I viewed it from right to left. Where the rightmost position is the top of the stack!
-   By following that pattern, I did all the operations correctly
-   Also instead of using the built in methods of push and pop from Array JS class, I decided to use an index variable. The index represents the current index for the next element to be pushed.
-   Then to avoid have to use the `.length` method,
