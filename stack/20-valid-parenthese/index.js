/**
 * @param {string} s
 * @return {boolean}
 */

/* Time O(N) | Space O(n)*/
var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (const index in s) {
    const char = s[index];
    const isBracket = char in map;

    if (!isBracket) {
      stack.push(char);
      continue;
    }

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};
