// Notes from the Odin Project
// https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern

/*
    Factory Functions
    - Factory functions set up and return the new object when you call the function
    - They do not use the prototype (where in the class they do), this incurs a performance penalty, 
      this penalty is not significant unless you are creating thousands of objects
*/

// Examples from class to factory function

// ES6 Class
class User {
	// This code below creates a private variable
	// #reputation = 0;

	constructor(name) {
		this.name = name;
		this.discordName = `@${name}`;
		// We can run this code but it will make so that others can access reputation publicly
		this.reputation = 0;
		// We can make the reputation variable private by putting everything inside the constructor, but it does not seem like a good idea
	}
	// when you uncomment the code below notice how we cannot set variables?
	// let reputation = 0;

	getReputation() {
		return this.reputation;
	}

	giveReputation() {
		this.reputation++;
	}
}

// Factory function
function createUser(name) {
	const discordName = `@${name}`;

	let reputation = 0;

	// Here getReputation and giveReputation are examples of closures!
	/*
    	Small, dedicated functions within the factory function itself
    	that use the surrounding state (lexical env)!

    	It "closes over" the reputation variable in its containing function (createUser), allowing it to retain access to that variable even after the function has completed execution.
  	*/
	const getReputation = () => reputation;
	const giveReputation = () => reputation++;

	/* 
        Notice how we do not expose the reputation variable? 
        With a factory function we decided what to expose. 
        We can expose variables with functions such as the getReputation()
        By doing this we prevent the reputation from being updated by mistake!
    */
	return {
		name,
		discordName,
		getReputation,
		giveReputation
	};
}

/*
    Class example
    The problem is that now we have access to the reputation
*/
const joshClass = new User('josh');

// Factory functions example
const josh = createUser('josh');
josh.giveReputation();
josh.giveReputation();
const joshRep = josh.getReputation();

const sal = createUser('sal');
sal.giveReputation();
const salRep = sal.getReputation();

console.log({
	joshDiscordName: josh.discordName,
	joshRep,
	salDiscordName: sal.discordName,
	salRep
});

/*
	Factory function example
	Create a new user, and only get the important things from it
	Then return the what we want!  
	Everything else is hidden as private variable or functions
 */
function createPlayer(name, level) {
	const { getReputation, giveReputation } = createUser(name);

	const increaseLevel = () => level++;
	const getLevel = () => level;
	return {
		name,
		getReputation,
		giveReputation,
		increaseLevel,
		getLevel
	};
}
