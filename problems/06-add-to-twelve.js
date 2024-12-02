/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

function addToTwelve(arr){
  // Base case: If array reaches length 1 return false as no adjacent values add to 12
  if (arr.length === 1){
    return false;
  }
  // True case: If two adjacent values adds to 12 program will exit recursion returning true
  if (arr[0] + arr[1] === 12){
    return true;
  }

  // Recursive case: function will return itself with the arr first value removed
  return addToTwelve(arr.slice(1));

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
