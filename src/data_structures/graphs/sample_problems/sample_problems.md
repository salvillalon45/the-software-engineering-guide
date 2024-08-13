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

-   This is backtracking problem where you can use DFS, but you can solve this with BFS and treat like a graph
