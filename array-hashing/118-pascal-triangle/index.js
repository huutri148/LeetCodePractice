/**
 * https://leetcode.com/problems/pascals-triangle/
 * Time O(n^2) || Space O(n)
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const res = [[1]];

  for (let i = 1; i < numRows; i++) {
    res[i] = [];
    for (let k = 0; k < i + 1; k++) {
      res[i][k] = (res[i - 1][k] || 0) + (res[i - 1][k - 1] || 0);
    }
  }

  return res;
};
