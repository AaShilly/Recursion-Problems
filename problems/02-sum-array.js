/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// Uses a paramter i to set initial index number
function sumArray (arr, i = 0){
  if (i === arr.length) return 0; // Base case for recursion

  // Recursive step - Adds the number and iterates the index with each recursive call
  return arr[i] + sumArray (arr, i+1);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
