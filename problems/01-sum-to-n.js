/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

function sumToN(num){
  if (num < 0) return null; //Returns null if num is a negative number
  if (num === 0) return 0; // base case for recursion
  // recursively calls sumTon with a decrement step to add all nums from num to 0
  return num + sumToN(num - 1); //recursive step to work towards base case
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
