import Queue from './queue';

console.log('Testing for Queue Class');
console.log('----------------------');
console.log('');
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

const frontElement = queue.front();
const queueSize = queue.size();
console.log(frontElement);
console.log(queueSize);

console.log(queue.getQueue());
console.log('----------------------');
console.log('');
