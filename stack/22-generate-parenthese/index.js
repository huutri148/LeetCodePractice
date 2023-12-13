/**
 * https://leetcode.com/problems/generate-parentheses/
 * Time O(4*N/sqrt(n)) | Space O(n)
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = (n) => {
  const res = [];

  const generateRes = (left, right, str) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }

    if (left < n) generateRes(left + 1, right, str + "(");
    if (right < left) generateRes(left, right + 1, str + ")");
  };

  generateRes(0, 0, "");
  return res;
};
