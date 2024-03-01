import Stack from '../stack';

console.log('Testing for Stack Class');
console.log('----------------------');
console.log('');
const stack = new Stack();
stack.push('1');
console.log({ stack });
stack.push('2');
stack.push('3');
stack.pop();
stack.pop();
stack.print();
console.log('is the stack empty? ', stack.isEmpty());
console.log('----------------------');
console.log('');
