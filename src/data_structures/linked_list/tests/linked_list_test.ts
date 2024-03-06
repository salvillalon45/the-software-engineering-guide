import LinkedList from '../linked_list';

const linkedList = new LinkedList();

linkedList.insertTail(1);
linkedList.insertTail(2);
// linkedList.print();

console.log('node at position 1:: ', linkedList.get(1));

console.log('Going to remove at 1:: ', linkedList.remove(1));

// linkedList.insertTail(2);

// console.log(linkedList.get(1));
// console.log(linkedList.get(0));

linkedList.print();

console.log('LinkedList Value in an Array:: ', linkedList.getValues());

// console.log('Get Node at index 3:: ', linkedList.get(3));
