/*
    ----------------------------------  
    MY STEPS
    ----------------------------------

    REACTO
    REREAD & EXAMPLES
    - Return a lit of all possible letter combintations that could be represented by those button presses
    - So I need to understand the relationship between the numbers and the keys
    {
        0: '',
        1: ' ',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    input = [4,3,9]
    4: ghi
    3: def
    9: wxyz
    possibleCombos = gdw, gdx, gdy, gdz...

    APPROACH
    - I know I need to use BFS, is a traversal algo that visits the surrounding neighbors of where we are starting from
    How can I represent this as an adjancy matrix
        4 3 9
    4   g h i
    3   d e f
    9   w x y z
    We will start at index 0 (4) and then go to each one and create a possible combo
    Actually not the adjancy matrix approach since there is no connections between the letters

    But Maybe I can do on letter at time instead like going through each cell in the grid
    g, get the neighbors of g which are h and d
    - put them in a queue = [h, d]
    - create combos of them ghd, gdh, hdg,... and put them in a set, so that we have them recorded and visited
    
    once finshed, dequeue the next item, h
    h, get the neighbords which are g, e, i
    - check for queueSet = {g} put them in a queue = [d, e, i], but before you put them in queue, first have a set that checks the letters/node you have already visited
    - create combos with hgei, hgie, heig,... 
*/

// ----------------------------------
// MY SOLUTION
// ----------------------------------
const t9CombosInput = [4, 3, 9];

interface T9ComboMap {
	[x: string]: string;
}

const t9ComboMap: T9ComboMap = {
	'0': '',
	'1': ' ',
	'2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz'
};

/**
 * Performs Breadth-First Search to find all possible T9 combos
 * @param {Array<number>} t9CombosInput - Array of t9 combinations. Ex. t9Combos([4,3,9])
 * @return {void}
 */
export function t9Combos(t9CombosInput: Array<number>): void {
	// Stores all the combinations we will create
	let combosQueue = [''];

	/**
	 * Performs Breadth-First Search on the given character. Ex. ghi. Here we use the
	 * @param {string} characters - A string contain the characters to traverse. Ex.ghi
	 * @return {void}
	 */
	function bfsTraversal(characters: string): void {
		// newCombosQueue is used to keep track of the character combination
		// that we get looping through the given characters
		const newCombosQueue: Array<string> = [];
		const t9Characters = [...characters];

		t9Characters.forEach((t9Character) => {
			combosQueue.forEach((combo) => {
				const newCombo = combo + t9Character;
				newCombosQueue.push(newCombo);
				console.log({ newCombosQueue, newCombo, combo, t9Character });
			});
		});

		// Then overwrite combosQueue to get the new combinations we created
		combosQueue = newCombosQueue;
		console.log({ combosQueue });
		console.log('-------------');
	}

	t9CombosInput.forEach((t9Combo) => {
		const characters = t9ComboMap[t9Combo.toString()];
		bfsTraversal(characters);
	});

	console.log({ combosQueue });
}

t9Combos(t9CombosInput);

/*
    --------------------------------------------------------
    --------------------------------------------------------
    This was my original attempt at the problem 
    --------------------------------------------------------
    --------------------------------------------------------
*/
/*
    each index of the input has a list a of characters
    {   
        4 -> ghi
        3 -> def
        9 -> wxyz
    }
    
    4 -> ghi
    loop through ghi
        loop through def
            loop through wxyz
                gdw, gdx, gdy, gdz
                gew, gex, gey, gez
                gf
    t9Combos([4,3,9])
    t9Combos([4,3,9,5, 6, 7])
    => ['gdw', 'gdy', 'gdz', 'gdx', 'gew', ...]            

    Recurisve approach
    t9Combos([4,3,9])
    - If i reach the lenght of the input, then push string combo to array, ex return gdw
    - else {
        Go through string combination
    }      
    
    depth first search
    [gdw, gdy, ...]
    
     {   
        4 -> ghi
        3 -> def
        9 -> wxyz
    }
    breadth first search
    [g, h, i]
    [gd, ge, gf, hd, he, hf, id, ie, if]
    [gdw, gdx, gdy, gdz, gex, gfy ] 
    
    loop through the first index of the input [4,3,9] -> 4
        combos = [g, h, i]
    loop through the second index of hthe input 4,3,9 -> 3
        look at current combos and make combination with them 
        combos =  [gd, ge, gf, hd, he, hf, id, ie, if]
    loop through the third index of hte iput 4,3,9 -> 9
        look at the current combos and make comob of them
        combos =  [gdw, gdx, gdy, gdz, gex, gfy ] 
        

                     0   1.    2.     3.    4.      5.     6.     7.      8.      9
let t9map: string[] = [
	'',
	' ',
	'abc',
	'def',
	'ghi',
	'jkl',
	'mno',
	'pqrs',
	'tuv',
	'wxyz'
];

    function t9Combos(t9Keys: Array<number>) {
    let combos = ['']; // combos = [g, h, i]

        function bfs(t9Chars: string) {
            let new_combos = [];
            for (let i = 0; i < t9Chars.length; i++) {
                const t9Char = t9Chars[i];
                
                for (let j = 0; j < combos.length; j++) {
                /*
                    0 < 1 yes
                    j = 0
                    curr = ''
                    currentCombo += t9Char 
                    "" + g
                    
                    result will be = g
                    -------
                    
                */
// const currentCombo = combos[j];
// let temp = currentCombo + t9Char;
// new_combos.push(temp);
// [g ,h ,i]
// ['', 'g', h', i, gd, ge]
// console.log({temp})
/*
                    first loop at g
                    new_combos = [g,h,i]
                    --- 
                    at 3 which is def
                    t9Char = d
                    combos = g,h,i
                    currentCombo = g
                    currentCombo + t9Char -> gd
                    new_combos = [gd]
        
                */
// 			}
// 		}

// 		combos = new_combos;
// 	}

// 	for (let i = 0; i < t9Keys.length; i++) {
// i = 0 -> 4
// 		const t9Key = t9Keys[i];
// 		const t9Chars = t9map[t9Key];
// 		bfs(t9Chars);
// 	}

// 	return combos;
// }
// console.log(t9Combos([4, 3]));
