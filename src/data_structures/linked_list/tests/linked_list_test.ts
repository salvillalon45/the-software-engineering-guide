import LinkedList from '../linked_list';

const linkedList = new LinkedList();

linkedList.insertHead(1);
// linkedList.insertHead(2);
// linkedList.insertTail(3);

// console.log('What is index 4:: ', linkedList.get(1));
console.log('remove:: ', linkedList.remove(0));

console.log('LinkedList Value in an Array:: ', linkedList.toArray());
