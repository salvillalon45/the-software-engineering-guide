import Stack from './stack';

console.log('Testing for Stack Class');
console.log('----------------------');
console.log('');
const stack = new Stack();
stack.push('1');
console.log({ stack });
stack.push('2');
stack.push('3');
stack.pop();
// stack.print();
console.log('----------------------');
console.log('');

console.log(stack.getStack());
