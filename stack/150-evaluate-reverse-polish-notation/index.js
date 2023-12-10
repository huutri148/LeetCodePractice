/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 * Time O(N) | Space O(n)
 * @param {string[]} tokens
 * @return {number}
 */

const evalRPN = (tokens, stack = []) => {
  for (const char of tokens) {
    const isOperation = char in OPERATION;

    if (isOperation) {
      const value = performOperation(char, stack);
      stack.push(value);

      continue;
    }

    stack.push(char);
  }

  return stack.pop();
};

const OPERATION = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
};

const performOperation = (char, stack) => {
  const [rightNum, leftNum] = [+stack.pop(), +stack.pop()];
  const operation = OPERATION[char];

  return operation(leftNum, rightNum);
};
