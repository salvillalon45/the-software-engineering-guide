# Problem 1: T9 Keyboard Combinations

A T9 keyboard (like on an old flip phone) has buttons 0-9 which each corresponds to a set of letters.

A person typing on the keyboard can be represented by a list of integers from 0-9.

## Task

Write a function that takes a list of integers (e.g., [4,3,9]) and returns a list of all possible letter combinations that could be represented by those button presses (e.g., ["idz", "hey", ...]).

```
t9Combos([4,3,9])
=> ['gdw', 'gdy', 'gdz', 'gdx', 'gew', ...]
```

## Notes

-   This problem was asked in an interview I had. I came back to redo it!
-   This is backtracking problem where you can use DFS, but you can solve this with BFS and treat like a graph

### My Implemenation

I treated this problem like a graph with using BFS.

```
combos = ['']
- Start with an empty array, this will serve as our queue

bfsTraversal(characters)
- For each set of characters corresponding to a T9 digit, I create new combinations. Push them to a newCombos array. Here we generate all possible combintations with that character before moving on to the next digit!
- This is nature of BFS!

New Combinations
- Once done doing all possible combination with that T9Character set, then overwrite combos array

This is BFS because
 For each digit in the input, you generate all possible combinations by appending each possible character for that digit to all existing combinations. This process ensures that all combinations of a certain length are completed before moving on to the next digit.

```
