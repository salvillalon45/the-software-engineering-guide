import BinarySearchTree, {
	Node,
	isBinarySearchTree
} from '../binary_search_tree';

const bst = new BinarySearchTree<number>();
// Example 1
// const node7 = new Node(7);
// const node1 = new Node(1);
// node7.left = node1;
// const node0 = new Node(0)
// node1.left = node0;
// node1.right =
// const node7_ = new Node(7);
// const node87 = new Node(87);
// const node10_ = new Node(10);

// bst.root = node10;
// bst.root = node4;
bst.add(7);
bst.add(1);
bst.add(0);
bst.add(3);
bst.add(9);
bst.add(8);
bst.add(10);
bst.print();
console.log('levelOrderNode:: ', bst.levelOrder());
console.log('reversalLeverlOrderNodes:: ', bst.reverseLevelOrder());

// { value: 7,
// 	left:
// 	 { value: 1,
// 	   left: { value: 0, left: null, right: null },
// 	   right: { value: 3, left: [Object], right: [Object] } },
// 	right:
// 	 { value: 9,
// 	   left: { value: 8, left: null, right: null },
// 	   right: { value: 10, left: null, right: null } } }
