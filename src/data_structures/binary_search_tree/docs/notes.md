# Binary Search Tree in TypeScript/JavaScript

## Summary

### Intro

A Binary Search Tree (a.k.a BST) is a specialized type of binary tree that maintains sorted order among its elements.

-   This makes searching for an element more efficient! Better than searching in a regular binary tree

-   Key Characteristics

    -   Node Structure - Each node in BST has
        -   a value
        -   A reference to the left child
        -   A reference to the right child
    -   Ordering Property - For any node with value N:
        -   All values in the left subtree are less than N.
        -   All values in the right subtree are greater than N.

-   Traversing a BST

    -   In-order Traversal: Visit the left subtree, the node, and then the right subtree. This results in visiting the nodes in ascending order.
    -   Pre-order Traversal: Visit the node, the left subtree, and then the right subtree.
    -   Post-order Traversal: Visit the left subtree, the right subtree, and then the node.

-   Advantages:
    -   Efficiency: Searching, inserting, and deleting can be done in O(log n) time on average if the tree is **balanced**.
    -   Ordered Structure: The in-order traversal of a BST yields the elements in a sorted sequence.

### What is an Unbalanced Binary Search Tree?

If the tree becomes unbalanced (e.g., all elements are inserted in ascending order), the operations degrade to O(n) time complexity, which is inefficient.

An example of an unbalanced tree is when all elements are **inserted in either ascending or descending order**, creating a **degenerate tree (a tree where each parent node has only one child)**.

This essentially turns the tree into a linked list, where each node points to the next one in the sequence.

Example of Unbalanced Tree

```
1
 \
  2
   \
    3
     \
      4
       \
        5
```

This tree is unbalanced since:

-   All the nodes are aligned in a straight line, becoming a linked list
-   The height of the tree is n-1 where n is the number of nodes. In this case, the height is 5-1 = 4.
-   The time complexity for search, insertion, and deletion operations in this tree is O(n). Which is inefficient! A balanced tree will give us O(log n) time

### What is an Balanced Binary Search Tree?

A balanced tree is a type of binary tree in which the height difference between the left and right subtrees of any node is no more than one.

#### How to determine is a Binary Search Tree is balanced?

Look at the height of the tree and the difference between the left and right subtrees of each node. A tree is balanced if the height difference between the left and right is no more than one.

Example of Balanced Binary Search Tree

```
       10
     /    \
    2      40
          /  \
         20   70

```

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
    -   **insertAt**: Insert a new node at a given index.
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
    -   **insertAt**:
        -   Time O(N): if the node is between the head or tail, we will need to loop until the index is found
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
