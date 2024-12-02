/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(string){
  // Base case for an empty string or string length of 1
  if (string.length <= 1){
    return string;
  }

  // Recursive case / step, starts with last letter and concatenates reverse(string.slice(0, -1)
  // this calls the function with the end character removed.
  return string.slice(-1) + reverse(string.slice(0, -1));
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
