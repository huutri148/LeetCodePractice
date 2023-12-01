/**
 * @param {string} s
 * @return {boolean}
 */

/* Time O(N) | Space O(n)*/
var isPalindrome = function (s) {
  const handleString = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "");
  let leftIndex = 0,
    rightIndex = handleString.length - 1;

  while (leftIndex < rightIndex) {
    if (handleString[leftIndex++] !== handleString[rightIndex--]) return false;
  }

  return true;
};
