# Dynamic Array in TypeScript/JavaScript

# Summary and Implementation

-   Implemented a Dynamic Array class using TypeScript!
-   Learned how to setup a TypeScript project with nodemon!
-   Includes the following member variables

    -   **capacity**: represents how many elements can fit in the array
    -   **size**: represents the total elements the array has
    -   **array**: represents the data structure we will do the operations on

-   Includes the following methods:
    -   **get**: Get the value at the i-th index
    -   **set**: Set a value at the i-th index
    -   **pushback**: Insert a value in the last position of the array
    -   **popback**: Remove the last element in the array
    -   **resize**: Resize the array to double its current capacity
    -   **getSize**: Get the current size of the array
    -   **getCapacity**: Get the current capacity of the array
 
## Notes on Implementation of Methods
### resize & pushback relationship
pushback uses `resize` to work properly. `pushback` cannot work if `resize` is not ready. When you push back a new element.
- First, check if the array is full.
- To do that you do a check of `this.size === this.capacity`
    - If both are equal it means that you need to `resize`!
    - `resize` will create a new array with double the current capacity
- Then use the `this.size` to place the element at the last spot in the array
- Then increase the `this.size` by one 

This is interesting because it puts into perspective how the JavaScript dynamic array implementation works. Every time you do a `.push()` it probably does a `resize` of the array to create a new array that can hold the
new element you are trying to push

However, I can see that the JavaScript array implementation is different from the DynamicArray class I built.

### Differences from JS Array Implementation
When you `pop` an element in the JS array, it will remove the element from the array. When you `console.log` your array you will no longer see the element and you will see the array has been reduced in size. In the Dynamic Array implementation, the index of the element you pop will still be there. For example
```
// In JS
const arr = [1, 2]
arr.pop()
console.log(arr) -> [1]
// In the Dynamic Array class
const arr = [1, 2]
arr.popback()
console.log(arr) -> [1, ]
```
This tells me that the `pop()` method probably does the following:
- It will reduce the capacity and reduce the size
- Then it will create a new array with the new capacity
- Then it will place any element from the current array and put it on the new array 

