import LinkedList from '../linked_list';

const linkedList = new LinkedList();

linkedList.insertHead(1);
linkedList.insertHead(2);
linkedList.insertTail(3);
linkedList.insertTail(4);
linkedList.insertHead(5);

console.log('What is index 4:: ', linkedList.get(4));

console.log(linkedList.length);

console.log('LinkedList Value in an Array:: ', linkedList.toArray());
