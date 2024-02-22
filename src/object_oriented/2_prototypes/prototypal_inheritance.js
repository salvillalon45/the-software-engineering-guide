// @ts-nocheck
/*
    In this file we are doing prototypal inheritance. Created a Person class and we make
    Player class inherit from it by changing Player prototype to Person! 

    Now I have access to Person functions
*/
function Person(name) {
	this.name = name;
}

Person.prototype.sayName = function () {
	console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
	this.name = name;
	this.marker = marker;
	// this.getMarker = function () {
	// 	console.log(`My marker is '${this.marker}'`);
	// };
}

Player.prototype.getMarker = function () {
	console.log(`My marker is '${this.marker}'`);
};

// It returns "Object.prototype"
console.log(
	'What is Player prototype:: ',
	Object.getPrototypeOf(Player.prototype)
);

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(
	'What is Player prototype after inheriting from Person:: ',
	Object.getPrototypeOf(Player.prototype)
);

const player3 = new Player('steve', 'X');
const player4 = new Player('also steve', 'O');

player3.sayName(); // Hello, I'm steve!
player4.sayName(); // Hello, I'm also steve!

player3.getMarker(); // My marker is 'X'
player4.getMarker(); // My marker is 'O'

console.dir(player3.hasOwnProperty('getMarker'));
