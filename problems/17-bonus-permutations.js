/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(array){
  if (array.length <= 1) {
    return [array];
  }

  const result = []; // Store all permutations

  // Use .forEach() to iterate over the array
  array.forEach((current, index) => {
    // Get the remaining elements by excluding the current element
    const remaining = array.slice(0, index).concat(array.slice(index + 1));

    // Recursively calculate permutations of the remaining elements
    const remainingPermutations = permutations(remaining);

    // Add the current element to the front of each permutation
    remainingPermutations.forEach(perm => {
      result.push([current, ...perm]);
    });
  });

  return result;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
