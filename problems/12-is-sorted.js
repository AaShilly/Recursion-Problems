/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(array, i = 0){
  // Base Case: If a previous element is greater than the next it is not sorted
  // If index reaches the array length the array is sorted
  if (array[i] > array[i + 1]){
    return false;
  } else if (i === array.length - 1){
    return true;
  }

  // Recursive Case: Checks next pair of array elements for Base Case
  return isSorted(array, i + 1);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
