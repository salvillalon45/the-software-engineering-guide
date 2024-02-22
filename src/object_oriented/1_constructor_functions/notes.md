# Constructor Functions and ES6 Classes

Both achieve the same code! Both approaches achieve the same goal of
creating objects with shared properties and methods.

Classes were introduced in ES6 (2015) as a
syntactical sugar over constructor functions. ES6 Classes Provides a way to define object-oriented structures for those that come from Java or C++ backgrounds
**In both syntax you will have to use the new Keyword**

### Constructor Function

```
function Player(name, marker) {
	this.name = name;
	this.marker = marker;

	this.sayName = function () {
		console.log(this.name);
	};
}
```

### ES6 Classes

```
class Player {
	constructor(name, marker) {
		this.name = name;
		this.marker = marker;
	}

	sayName() {
		console.log(this.name);
	}
}
```

### Difference between putting methods on the class instance versus putting methods in the Prototype

#### Code Example

On the Class Instance

```
function Person(name) {
  this.name = name;

  // Method on the instance
  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}!`);
  };
}

const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.sayHello(); // Output: Hello, I'm Alice!
person2.sayHello(); // Output: Hello, I'm Bob!
```

-   Pros:
    -   Instance-specific behavior: Methods can access and modify instance-specific properties directly using this.
    -   Encapsulation: The method can encapsulate behavior specific to the instance.
-   Cons:
    -   Memory consumption: Each instance carries its own copy of the method, potentially leading to higher memory usage if there are many instances.

On the Prototype

```
function Person(name) {
  this.name = name;
}

// Method on the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.sayHello(); // Output: Hello, I'm Alice!
person2.sayHello(); // Output: Hello, I'm Bob!
```

-   Pros:
    -   Memory efficiency: Methods are shared among instances, leading to better memory usage.
    -   Consistency: All instances have access to the same set of methods.
-   Cons:
    -   Less instance-specific behavior: Methods cannot directly access instance-specific properties using this (unless those properties are also on the prototype).

### In my own words:

-   The big differentiator is the encapsulation part. By putting the method on the class instance itself, it will only be specific to that class. This is great for unique functionality of that class.

-   Then if you want something that can be shared with all the classes you will be putting methods on the prototype. For example lets say that for your class `Person` you want all of them to have a method called `sayHello`, then we can place this on the `prototype` because every person can `sayHello`. This makes sense because by having each class instance have a `sayHello` method will take up a lot of memory! You can just put it on the prototype and everyone will have access to it!

-   Then maybe you create a `Whale` class that inherits from `Animal` class. Now the `Whale` class that has the method `swim` that is specific to it. Then you create the `Bird` class that has the method `fly` that is specific to it. Since a whale cannot fly. Then you can have a method on the prototype `Animal` called `eat` since all animals need to eat!
