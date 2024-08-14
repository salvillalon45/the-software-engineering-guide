# Graphs in TypeScript/JavaScript

## Summary

### Intro

A graph is a fundamental data structure in computer science and mathematics used to represent relationships or connections between pairs of objects. It consists of two main components:

-   Nodes: These are the objects or entities in the graph. They can represent various things, such as cities in a map, people in a social network, or states in a state machine.

-   Edges (or Links): These are the connections between the nodes. An edge between two nodes indicates a relationship or connection between those two nodes. In a graph, edges can be either directed or undirected:

    -   Directed Edge: The connection has a direction, going from one node to another (e.g., A → B).
    -   Undirected Edge: The connection is bidirectional, meaning it goes both ways (e.g., A — B).

## Applications of Graphs

<figure style='text-align: center';>
  <img src="../images/social_network.jpg" alt="Social Network" width="300"/>
  <figcaption>Social Network are graphs similar to how Facebook and LinkedIn work</figcaption>
</figure>

Graphs are used to model various real-world problems, including:

-   Social Networks: Representing people as nodes and friendships as edges.
-   Maps and Navigation: Representing locations as nodes and roads as edges.
-   Computer Networks: Representing computers or routers as nodes and the connections between them as edges.
-   Task Scheduling: Representing tasks as nodes and dependencies between tasks as directed edges.
-   Webpages and Links: Representing webpages as nodes and hyperlinks as directed edges.

## Graph Traversals

There are two ways to traverse graphs efficiently

### Breadth-First Search (BFS)

Breadth-First Search (BFS) is an algorithm used to explore or traverse graphs or tree data structures. It visits all the nodes of a graph by exploring all the neighbors at the present depth before moving on to nodes at the next depth level.

#### Key Characteristics of BFS:

-   **It performs a layer by layer exploration:** It starts at a source node (root). It is visits all the neighbors close to the source node before moving on to nodes that are further away.
-   **Uses a queue:** It uses a queue to keep track of the nodes that need to be visited. Nodes are enqueded as they are discovered. They are dequeued when they have been visited
-   **Shortest Path:** It helps find the shortest path. This is possible because it explores all available nodes at the level before moving on

#### Where is BFS used?

-   **Shortest Path:** BFS is used to find the shortest path in unweighted graphs.
-   **Level Order Traversal:** In trees, BFS is used to perform level-order traversal.
-   **Connected Components:** In undirected graphs, BFS can help identify connected components.
-   **Web Crawlers:** BFS is used by web crawlers to explore links on web pages, starting from a seed page and visiting all reachable pages.

### Depth-First Search (DFS)

Depth-First Search (DFS) is an algorithm used to traverse or explore a graph or tree data structure. DFS explores as far as possible along each branch before backtracking. This approach follows one path from the start node to the deepest node before exploring other branches.

#### Key Characteristics of BFS:

-   **Explores Deeply:** DFS explores deep down as possible along a route/branch before backtracking/returning to explore a different branch
-   **Use a Stack:** When doing an iterative approach of DFS, it uses a stack to keep track of the nodes that it will visit. When doing a recursive approach, it uses the function call stack

#### Where is DFS used?

-   **Pathfinding:** DFS can be used to explore all possible paths in a maze or graph.
-   **Topological Sorting:** In directed acyclic graphs (DAGs), DFS helps determine a linear order of vertices.
-   **Cycle Detection:** DFS is used to detect cycles in both directed and undirected graphs.
-   **Connected Components:** In undirected graphs, DFS can identify connected components.
-   **Solving Puzzles:** DFS can be used in puzzles like Sudoku or n-queens, where the solution requires exploring all possible configurations.

#### There are two ways to implement DFS

-   **Recursive DFS:** It relys on the call stack to keep track of the nodes to explore. It’s simpler to implement but can lead to stack overflow in deep graphs!
-   **Iterative DFS:** This approach uses an explicit stack to simulate the call stack, making it more suitable for large graphs where recursion depth might be an issue.
    -   **SAL's Recommendation: I recommend to do the iterative approach of DFS!**

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

// let res = distances[neighborNodeIndex];
// res += 1;
// distances[neighborNodeIndex] = res;
