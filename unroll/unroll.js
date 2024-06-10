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
  const unrolled = [];
  const xIdx = squareArray.length;
  const yIdx = squareArray.length;
  const maxIdx = (squareArray.length - 1) ** 2; //this is the maximum amount of values within the squareArray to loop through

  const traverseHorizontal = (arrayOfArrays, goingRightToLeft = false) => {
    let toConcat = !goingRightToLeft ? arrayOfArrays.pop() : arrayOfArrays.shift();
    unrolled = unrolled.concat(toConcat);
    yIdx -= 1; //reflect the change in square height
    maxIdx -= toConcat.length;
  };

  const traverseVertically = (arrayOfArrays, goingUp = false) => {
    if (!goingUp) {
      //going up => down
      //loop to emulate going downwards on side of square
      for (const array of arrayOfArrays) {
        //going down always removes the last value on the "right" side of the square, therefore use .pop()
        const numSpliced = array.pop();
        unrolled.push(numSpliced);
      }
    } else if (goingUp) {
      //going down => up
      //loop from reverse to emulate going upwards on side of square
      for (let idx = (yIdx - 1); (idx = 0); --idx) {
        let array = array[idx];
        const numSpliced = array.shift(); //going up always removes the first value on the "left" side of the square, therefore use .shift()
        unrolled.push(numSpliced);
      }
    }
    xIdx -= 1; //reflect the change in horizontal width
    maxIdx -= yIdx;
  };

  while (maxIdx > 0) {
    traverseHorizontal(squareArray, false); //traverse top array left => right
    traverseVertically(squareArray, false); //traverse right values top => down
    traverseHorizontal(squareArray, true); //traverse bottom array right => left
    traverseVertically(squareArray, true); //traverse left values down => top
  }
  return unrolled;
};

module.exports = unroll;
