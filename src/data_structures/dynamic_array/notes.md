# Dynamic Array in TypeScript/JavaScript

# Summary and Implementation

-   Implemented a Dynamic Array class using TypeScript!
-   Includes the following member variables

    -   **capacity**: reprsents how many elements can fit in the array
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
 
## Notes on Implementation on Methods
### resize & pushback relationship
pushback uses resize to work properly. Pushback cannot work if resize is not ready. Every time you have an array you will push back a new element. First, check if the array is full. To do that you
do a check of `this.size === this.capacity` If both are equal it means that you need to resize! `resize` will create a new array for your with double the current capacity.

This is interesting because it puts it into perspective how the JavaScript dynamic array implementation works. Every time you do a `.push()` it probably does a `resize` of the array to create a new array that can hold the
new element you are trying to push

But I can see that the JavaScript array implementation is different from the DynamicArray class I build.

### Differences 
When you `pop` element in the JS array, it will remove the element from the array. When you console.log your array you will no longer see the element and you will see the array has been reduced in size. In the Dynamic Array impmlementation the index of the element you pop will still be there. For example
```
// In JS
const arr = [1, 2]
arr.pop()
console.log(arr) -> [1]
// In Dynamic Array class
const arr = [1, 2]
arr.popback()
console.log(arr) -> [1, ]
```
This tells me that the `pop()` method probably also does something like `resize` does. 

It will 
