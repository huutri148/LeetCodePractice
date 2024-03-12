/**
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scoresd
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const isEdgeCase = k === 1;
  if (isEdgeCase) return 0;

  nums = nums.sort((a, b) => a - b);

  let i = 0;
  let j = k - 1;
  let minDiffrence = Infinity;

  while (j < nums.length) {
    minDiffrence = Math.min(Math.abs(nums[i] - nums[j]), minDiffrence);
    j++;
    i++;
  }

  return minDiffrence;
};

console.log(minimumDifference([9, 4, 1, 7], 2));
