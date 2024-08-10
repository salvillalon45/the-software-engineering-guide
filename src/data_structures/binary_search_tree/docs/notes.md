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

A balanced tree is a type of binary tree in which the height difference
between the left and right subtrees of any node is no more than one.
This mean you need to check the height difference at each node and their subtree! (This is something that I did not know, and had to debug to understand!)

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

**Let's go through the tree**

Node 10 has children

-   left child, node 2, height = 1
    -   No children
    -   Left, null, return 0
    -   Right, null, return 0
    -   Height Difference = |0 - 0| = 0, which is ≤ 1, balanced ✅.
    -   Height = 1 + max(0,0) = 1
-   right child, node 40, height = 2
    -   Has children
    -   Left, 20
    -   At Node 20, height = 1
        -   Left, null, return 0
        -   Right, null, return 0
        -   Height Difference = |0 - 0| = 0, which is ≤ 1, balanced ✅.
        -   Height = 1 + max(0,0) = 1
    -   Right, 70
    -   At Node 70, height = 1
        -   Left, null, return 0
        -   Right, null, return 0
        -   Height Difference = |0 - 0| = 0, which is ≤ 1, balanced ✅.
        -   Height = 1 + max(0,0) = 1
    -   Height Difference = |1 - 1| = 0, which is ≤ 1, balanced ✅.
    -   Height = 1 + max(1, 1) = 2 for node 40
-   Height Difference = |1 - 1| = 0, which is ≤ 1, balanced ✅.
-   height = 1 + max(1,2) = 3 for node 10

**As a Result**

-   Height of the BST: 2
-   Balanced: Yes, the tree is balanced because the height difference between the left and right subtrees of each node is at most 1.

## Real Life Examples

<div style='display: flex; gap: 1rem;'>
    <img src="../images/file_explorer.jpg" alt="A visual of the window's file explorer" width="300"/>
    <p>A File Explorer is an example of a Binary Search Tree!
</div>

Imagine you have a directory structure like this:

```
Documents
│
├── Projects
│   ├── ProjectA
│   └── ProjectB
│
├── Photos
│   ├── 2023
│   │   ├── January
│   │   └── February
│   └── 2022
│       ├── Summer
│       └── Winter
│
└── Music
    ├── Rock
    └── Jazz
```

-   Each folder or file will be a node
-   Folders containing other folders or files are parent nodes, while the folders or files inside them are child nodes.
-   The tree structure is organized so that, for example, searching for a specific file or folder involves navigating through the tree from the root (e.g., "Documents") down through its branches.

**This resembles a BST**

-   Search Efficiency: The structure allows efficient searches. For example, if you want to find the "Winter" folder, you start at "Documents," go to "Photos," then "2022," and finally "Winter."
    -   The search time is proportional to the height of the tree, making it faster than searching through a linear list of all files and folders.

## Implementation

-   Implemented a generic Binary Search Tree and Node class using TypeScript!
-   Learned how to setup a TypeScript project with nodemon!
-   Includes the following methods:

    -   **add**: Adds a new node into the bst.
    -   **findMin**: Finds the minimum value in the bst.
    -   **findMax**: Finds the maximum value in the bst.
    -   **isPresent**: Determines if the value you are searching for exists in the bst.
    -   **isBalanced**: Determines if the given tree is balanced.
    -   **findMinHeight**: Find the minimum height of a bst.
    -   **findMaxHeight**: Find the maximum height of a bst.
    -   **print**: Helper to print the bst

-   Includes the following tree traversal methods:

    -   **inorder**: Perform a In Order traversal of the bst tree.
    -   **preorder**: Perform a Pre Order traversal of the bst tree.
    -   **postorder**: Perform a Post Order traversal of the bst tree.
    -   **levelOrder**: Performs a Level Order (Breadth First Search of the tree).
    -   **reverseLevelOrder**:Perform a Reverse Level Order traversal of the bst tree.

-   Includes the following private methods:

    -   **findMinHeightHelper**: Helper to find the minimum height of a bst.
    -   **findMaxHeightHelper**: Helper to find the maximum height of a bst.

-   Time & Space Complexity
    -   **add**:
        -   Time O(log n): If the tree is balanced, insertion requires traversing down a path, which is proportional to the height of the tree.
        -   SpaceO(1): no new space created
    -   **findMin**:
        -   Time O(h): Depends on the height of the tree, you follow the left side of the tree
        -   Space O(1): now new space created
    -   **findMax**:
        -   Time O(h): Depends on the height of the tree, you follow the right side of the tree
        -   Space O(1): now new space created
    -   **isPresent**:
        -   Time O(log n): searching requires traversing down a path proportional to the height of the tree.
        -   Space O(1): now new space created
    -   **isBalanced**:
        -   Time O(n): Checks the height of each node and height checking itself is O(h)
        -   Space O(h): The function uses stack space for recursive calls, where h is the height of the tree.
    -   **findMinHeight**:
        -   Time O(N): Must traverse the entire tree to find the minimum height, as it might require visiting all nodes.
        -   Space O(h): The function uses stack space for recursive calls, where h is the height of the tree.
    -   **findMaxHeight**:
        -   Time O(1): Must traverse the entire tree to find the maximum height, as it might require visiting all nodes.
        -   Space O(h): The function uses stack space for recursive calls, where h is the height of the tree.
    -   **inorder**:
        -   Time O(n): Visit each node
        -   Space O(h): The function uses stack space for recursive calls, where h is the height of the tree.
    -   **preorder**:
        -   Time O(n): Visit each node
        -   Space O(h): The function uses stack space for recursive calls, where h is the height of the tree.
    -   **postorder**:
        -   Time O(n): Visit each node
        -   Space O(h): The function uses stack space for recursive calls, where h is the height of the tree.
    -   **levelOrder**:
        -   Time O(n): Visit each node
        -   Space O(n): Create a queue that holds all nodes in the bst
    -   **reverseLevelOrder**:
        -   Time O(n): Visit each node
        -   Space O(n): Creates a queue that holds all nodes in the bst
    -   **print**:
        -   Time O(N): looping through each node
        -   Space O(1): now new space created
