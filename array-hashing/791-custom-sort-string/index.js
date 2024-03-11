/**
 * https://leetcode.com/problems/custom-sort-string/?envType=daily-question&envId=2024-03-11
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const mapIndex = {};

  for (const [index, c] of [...order].entries()) {
    mapIndex[c] = index;
  }

  const getIndex = (ch) => mapIndex[ch] ?? -1;

  return [...s].sort((a, b) => getIndex(a) - getIndex(b)).join("");
};

console.log(customSortString("cba", "abcd"));
