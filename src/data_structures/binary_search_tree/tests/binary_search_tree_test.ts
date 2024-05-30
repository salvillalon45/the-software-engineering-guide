import BinarySearchTree, { isBinarySearchTree } from '../binary_search_tree';

const bst = new BinarySearchTree<number>();
bst.add(10);
bst.add(2);
bst.add(40);
bst.add(20);
bst.add(70);

// let tree = {
// 	root: {
// 		value: 10,
// 		left: {
// 			value: 2,
// 			left: null,
// 			// left: {
// 			// 	value: 1,
// 			// 	left: null,
// 			// 	right: null
// 			// },
// 			right: {
// 				value: 3,
// 				left: null,
// 				right: null
// 			}
// 		},
// 		right: {
// 			value: 90,
// 			left: null,
// 			right: null
// 		}
// 	}
// };
// let tree = {
// 	root: {
// 		value: 1,
// 		left: null,
// 		right: {
// 			value: 5,
// 			left: {
// 				value: 3,
// 				left: {
// 					value: 2,
// 					left: null,
// 					right: null
// 				},
// 				right: {
// 					value: 4,
// 					left: null,
// 					right: null
// 				}
// 			},
// 			right: null
// 		}
// 	}
// };

// let tree = {
// 	root: {
// 		value: 1,
// 		left: null,
// 		right: {
// 			value: 5,
// 			left: {
// 				value: 3,
// 				left: {
// 					value: 2,
// 					left: null,
// 					right: null
// 				},
// 				right: {
// 					value: 4,
// 					left: null,
// 					right: null
// 				}
// 			},
// 			right: null
// 		}
// 	}
// };

// let tree = {
// 	root: {
// 		value: 1,
// 		left: {
// 			value: 1,
// 			left: null,
// 			right: null
// 		},
// 		right: null
// 	}
// };

// let tree = {
// 	root: {
// 		value: 5,
// 		left: {
// 			value: 1,
// 			left: null,
// 			right: null
// 		},
// 		right: {
// 			value: 4,
// 			left: {
// 				value: 3,
// 				left: null,
// 				right: null
// 			},
// 			right: {
// 				value: 6,
// 				left: null,
// 				right: null
// 			}
// 		}
// 	}
// };

// let tree = {
// 	root: {
// 		value: 1,
// 		left: null,
// 		right: {
// 			value: 1,
// 			left: null,
// 			right: null
// 		}
// 	}
// };
// let tree = {
// 	root: {
// 		value: 5,
// 		left: {
// 			value: 4,
// 			left: null,
// 			right: null
// 		},
// 		right: {
// 			value: 6,
// 			left: {
// 				value: 3,
// 				left: null,
// 				right: null
// 			},
// 			right: {
// 				value: 7,
// 				left: null,
// 				right: null
// 			}
// 		}
// 	}
// };

// console.log(isBinarySearchTree(tree.root));
bst.print();
bst.inOrderTraversalCount();
// console.log('Max height:: ', bst.findMaxHeight());
// console.log('Min Height:: ', bst.findMinHeight());
// console.log('Is It Balanced:: ', bst.isBalanced());
