import BinarySearchTree from '../binary_search_tree';

const bst = new BinarySearchTree<number>();
bst.add(10);
bst.add(2);
bst.add(90);
// console.log('What is the min value of tree:: ', bst.findMin());
// console.log('What is the min value of tree:: ', bst.isPresent(0));
console.log(bst.isBinarySearchTree(bst.root));
// bst.print();
