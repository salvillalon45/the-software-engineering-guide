# Factory Functions and the Module Pattern

## Block Scoped

-   scoping the variable to only be available within the closest set of curly braces {} in which it was defined! The braces can be those of a `for` loop, `if-else` condition.
-   **Global Scope:** Variables not defined within functions or curly braces are **`global scope`**
-   **Function Scope:** Variable defined within the function they are declared in
-   Example

```
let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);
```

## Closures

Refers to the combination of a function and the surrounding state in which the function was declared. The **surrounding state** is called **Lexical Scope**. The surrounding state consists of any local variable that were in the scope at the time the closure was created.

-   **This defintion is good**: In JavaScript, a closure is created when a function is defined inside another function, and the inner function retains access to the variables of the outer function even after the outer function has finished executing.

Example

```
function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7
```

-   Here the `add5` is a reference to the `resulting` function.
-   The `resulting` function get created when `makeAdding` function is called
-   So what happened is that the `resulting` function creates a `closure`. The `closure` has access to its **surrounding state/lexical environment**. It has access to the first variable!
-   NOTE: the state (including the variable first) is captured within the closure of the resulting function, allowing it to persist and be accessed when the inner function is later invoked

## Factory Functions

Factory functions use the power of closures. They set up and return the new object when you call the function

Factory functions do not use prototype!

Example:

```
function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;

  // Here getReputation and giveReputation are examples of closures!
  /*
    small, dedicated functions within the factory function itself
    that use the surrounding state (lexical env)!

    It "closes over" the reputation variable in its containing function (createUser), allowing it to retain access to that variable even after the function has completed execution.
  */
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}
```

Here the reputation variable is private. The functions getReputation and giveReputation use the variable but we never expose it!

-   Factory functions, a private variable or function uses **closures** to create smaller, dedicated variables and functions within a factory function itself - things that we do not need to return in the object itself.
-   This create neater code. We dont need to return everything from the object! We do not pollute the object!

## Use factory functions to create modules! Check the next directory!
