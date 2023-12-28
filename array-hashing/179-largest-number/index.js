/**
 * https://leetcode.com/problems/largest-number/
 * Time(O(n)) || Space(O(1))
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) =>
  nums
    .map((n) => n.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
