import DynamicArray from '../dynamic_array';

console.log('---------------------------------');
console.log('');
console.log('Testing DynamicArray Implementation');
console.log('');
console.log('---------------------------------');
console.log('');

console.log('Creating new DynamicArray');
console.log('---------------------------------');
const dynamicArray = new DynamicArray(1);
console.log(dynamicArray);

console.log('');
console.log('Testing pushback method');
console.log('---------------------------------');
// Push an element
console.log('going to pushback(1)');
dynamicArray.pushback(1);
console.log(dynamicArray);
console.log('');

console.log('going to pushback(2)');
dynamicArray.pushback(2);
console.log(dynamicArray);
console.log('');

console.log('');
console.log('Testing popback method');
console.log('---------------------------------');
console.log('going to popback()');
console.log(dynamicArray.popback());
console.log(dynamicArray);
console.log('');
