# The module pattern - Immediately Invoking Function Expression (IIFEs)

IIFEs are very similar to Factory functions! The main idea of IIFEs is that you wrapped your Factory function in parantheses and immediately calling/invoking it!

```
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```

This pattern also helps hide variables and functions as private, wrap sections of code together

The Module Pattern uses the idea of **encapsulation**
Encapsulation helps to not expose everything! We can hide variables and functions that are needed.

Encapsulation leads to **namespacing** which helps to avoid naming collisions in our programs. For example, if we look at the calculator example above, we might there might be more than on function called `add`. The code will get confused on which `add` to use. You will have to be careful and know which `add` you are using!

With Module Patterns we can use **encapsulation** to create a IIFE called `calculator`. This creates an object `calculator` that we can use to call the `add` functions

## My Understanding

Immediately Invoking Function Expression is just using a Factory Function wrapped in parenthesis. You can achieve the same thing with both of them. It depends on the team and what they use! For example

**Factory Function Example**

```
function createCalculator() {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  return { add, sub, mul, div };
}

const calculator = createCalculator();

calculator.add(3, 5);    // 8
calculator.sub(6, 2);    // 4
calculator.mul(14, 5534); // 77476
```

**IIFE Example**

```
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```

## IMPORTANT NOTE Intro to ES6 Modules

With the introduction of ES6 Modules, the module pattern (IIFEs) is not needed anymore, though you might still encounter them!

With ES6 Modules, we can create code in a file/module and export what we want. We tell it what we want to export which helps clean the code and keep different parts of the code separate. Make it easy to maintain the code! It helps because you also know where each function is coming from.

When using ES6 modules, only what is exported can be accessed in other modules by importing.
