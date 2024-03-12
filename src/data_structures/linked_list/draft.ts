// add(data: T) {
//     let currentNode = this.head;

//     // here the nullish coalesing and optional chaining are included
//     // due to typescript error warnings, not really needed for LinkedList
//     // functionality
//     while (currentNode?.next !== null) {
//         currentNode = currentNode?.next ?? null;
//     }

//     const newNode = new Node(data, null);
//     currentNode.next = newNode;
//     this.tail = newNode;
//     this.length++;
// }
