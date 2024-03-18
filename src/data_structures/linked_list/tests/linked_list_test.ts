import LinkedList from '../linked_list';

const linkedList = new LinkedList();
linkedList.insertAt(0, 1);
// console.log('result of remove:: ', linkedList.get(1));
linkedList.insertAt(0, 2);
// linkedList.insertAt(1, 3);
console.log('can I insert at index 2?:: ', linkedList.insertAt(2, 8));
// linkedList.insertAt(2, 90);
linkedList.print();
console.log('LinkedList Value in an Array:: ', linkedList.toArray());
