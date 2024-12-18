/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end){
  // Base case: if the end is less than or equal to start, return an empty array
  if (end <= start) {
    return [];
  }

  // Recursive case: Add the current start to the result of range(start + 1, end)
  return [start, ...range(start + 1, end)];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
