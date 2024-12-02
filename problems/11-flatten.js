/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

//
function flatten(arr){
  //Base Case: When arr length is 0 it returns an empty array
  if (arr.length === 0) {
    return [];
  }

  // Recursive Case: If First element is array
  if (Array.isArray(arr[0])){
    return [...flatten(arr[0]) , ...flatten(arr.slice(1))]

  }

  // Recursive Case: If First element is not an array
  return [arr[0] , ...flatten(arr.slice(1))]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
