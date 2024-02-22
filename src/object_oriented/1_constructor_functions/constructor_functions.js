// @ts-ignore

/*
    Both achieve the same code! Both approaches achieve the same goal of 
    creating objects with shared properties and methods.
    
    Classes were introduced in ES6 (2015) as a
    syntactical sugar over constructor functions. Provides a way to define
    object-oriented structures for those that come from Java or C++ backgrounds

    In both syntax you will have to use the new Keyword
*/

// Constructor Function
// @ts-ignore
function Player(name, marker) {
	this.name = name;
	this.marker = marker;

	this.sayName = function () {
		console.log(this.name);
	};
}

// ES6 Classes
// @ts-ignore
class Player {
	constructor(name, marker) {
		this.name = name;
		this.marker = marker;
	}

	sayName() {
		console.log(this.name);
	}
}

// @ts-ignore
const player1 = new Player('steve', 'X');
