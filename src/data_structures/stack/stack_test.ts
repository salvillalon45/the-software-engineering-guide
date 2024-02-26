import Stack from './stack';

const stack = new Stack();
stack.push('1');
console.log({ stack });
stack.push('2');
stack.push('3');

console.log({ stack });

console.log(stack.isEmpty());
console.log(stack.peek());
stack.pop();
console.log({ stack });

stack.clear();
console.log({ stack });
console.log(stack.isEmpty());

console.log(stack.peek());
