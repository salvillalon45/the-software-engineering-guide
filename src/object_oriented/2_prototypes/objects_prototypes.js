// @ts-nocheck
/*
    The prototype
    1. All objects in JavaScript have a prototype
    2. The prototype is another object that the original object inherits from, 
       and has access to all of its prototype’s methods and properties
*/

function Player(name, marker) {
	this.name = name;
	this.marker = marker;

	this.sayName = function () {
		console.log(this.name);
	};
}

/*
    Here we defined the function sayHello on the Player prototype object
    Now this function is available to all the instances of Player such as
    player1 and player2
*/
Player.prototype.sayHello = function () {
	console.log('Hello, I am a player!');
};

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

/*
    Accessing an objects prototype.
    Here we will get back the `.prototype` property of the Object constructor. 
    In this example, we will get the constructor for `Player`

    The Player proto will appear on each instance of Player!

    We can get an object protoype by doing Object.getPrototypeOf(<object>)

    This was the old way of accessing the object prototype --> player1.__proto__
*/
console.log(Object.getPrototypeOf(player1));
console.log(Object.getPrototypeOf(player2));
console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);
console.log(Player.prototype);

/*
    Now accessing the prototype of the prototype!

    Player.prototype is inheriting from Object.prototype! This is why you get access to:
    - valueOf, hasOwnProperty

*/
console.log(Object.getPrototypeOf(Player.prototype));

/*
    This returns false! Why because the hasOwnProperty check for properties that this object has as its own property, valueOf is inherited. It is not defined on the player1 object 
*/
console.log(player1.hasOwnProperty('valueOf'));

/*
    Now if you check on the Object.prototype, it returns true
    since it is defined on the Object.prototype
*/
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

/*
    This returns null since it is the end of the prototype chain
*/
console.log(Object.getPrototypeOf(Object.prototype));
