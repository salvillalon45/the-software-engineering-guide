# Stack in TypeScript/JavaScript

# Summary

-   A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. In a stack, the last element added is the first one to be removed. Think of it like a stack of plates in a cafeteria, where you can only take the top plate off the stack.

Examples

<div style='display: flex; gap: 1rem'>
    <img src="../images/stack.png" alt="A visual of a stack with methods" width="300"/>
    <img src="../images/plates.jpeg" alt="A stack of plates" width="200"/>
</div>

## Implementation

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
    -   **getStack**: Get the current stack.

-   Time & Space Complexity
    -   **push**:
        -   Time O(1): since we are using the `this.index` to place the element in the stack
        -   SpaceO(1): no new space created
    -   **pop**:
        -   Time O(1): since we are using the `this.index` to get the top element and using the `this.index` pointer to move the position of the stack
        -   Space O(1): now new space created
    -   **clear**:
        -   Time O(1): reseting everything which is constant
        -   Space O(1): now new space created
    -   **peek**:
        -   Time O(1): it uses the `this.index` to return the first element in the stack
        -   Space O(1): now new space created
    -   **isEmpty**:
        -   Time O(1): it is constant since it use the `this.size` variable to check if it zero
        -   Space O(1): now new space created
    -   **getStack**:
        -   Time O(N): Loop through the stack with N amount of elements
        -   Space O(N): creates a new array with the elements of the stack

## Notes

-   To work with the stack I used an array. Instead of viewing the array from left to right, I viewed it from right to left. Where the rightmost position is the top of the stack!
-   Also instead of using the built in methods of push and pop from Array JS class, I decided to use an index variable. The index represents the current index for the next element to be pushed.

## Interesting facts

### Removing data from the stack

As I was implementing the `pop` method, I wanted to also affect the stack and make sure that when I printed the stack the data was reflect.

I will look at other implementations, but many did not physically remove the element.
All they did was decrease the index (the index is used to know where to place the element in the stack)

I realized that I can use the index to determine when to start printing! I do not need to remove an element, I can use the index to help! I used to have `this.stack.splice(topIndex);` and this will work, but it will make the `pop` operation `O(n)`

This Stack class creates an abstraction. Were we really are not removing elements, instead just moving a pointer to help us show the elements in the stack

In the case a user ever wants to get all the values from the Stack. I created the `getStack` function that will return an array of the stack values
