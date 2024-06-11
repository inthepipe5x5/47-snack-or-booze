/*
***unroll***, which takes in a square array of arrays 
squareArray = an array of arrays to emulate a grid with *n* rows and *n* columns). 

An input could look like this:

```jsx
const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
```

***unroll*** should take in such a square array and return a single array containing the values in the square. 
It should obtain the values by traversing the square in a spiral: 
    * 1. from the top-left corner, move all the way to the right => [1, 2, 3, 4],
    * 2. then all the way down => [8, 12,16]
    * 3. then all the way to the left => [15,14,13]
    * 4. then all the way up => [9, 5]
    * 5. and repeat. => [6, 7] => [11, 10]

For the above example, ***unroll*** should return:
 `[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]`.

*/
const unroll = (squareArray) => {
  let unrolled = [];
  let copiedArray = squareArray.map(row => [...row])

  const traverseHorizontal = (arrayOfArrays, goingRightToLeft = false) => {
    if (arrayOfArrays.length === 0) return unrolled;
    else if (!goingRightToLeft) {
      // left to right
      unrolled = unrolled.concat(arrayOfArrays.shift());
    } else {
      // right to left
      unrolled = unrolled.concat(arrayOfArrays.pop().reverse());
    }
  };

  const traverseVertically = (arrayOfArrays, goingUp = false) => {
    if (arrayOfArrays.length === 0) return unrolled;
    else if (!goingUp) {
      // top to bottom
      for (let i = 0; i < arrayOfArrays.length; i++) {
        unrolled.push(arrayOfArrays[i].pop());
      }
    } else {
      // bottom to top
      for (let i = arrayOfArrays.length - 1; i >= 0; i--) {
        unrolled.push(arrayOfArrays[i].shift());
      }
    }
  };

  while (copiedArray.length > 0) {
    if (copiedArray.length === 0) return unrolled;
    traverseHorizontal(copiedArray, false); // left to right
    if (copiedArray.length > 0) {
      traverseVertically(copiedArray, false); // top to bottom
    }
    if (copiedArray.length > 0) {
      traverseHorizontal(copiedArray, true); // right to left
    }
    if (copiedArray.length > 0) {
      traverseVertically(copiedArray, true); // bottom to top
    }
  }

  return unrolled;
};

console.log(
  unroll([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

module.exports = unroll;
