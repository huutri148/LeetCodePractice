/**
 * https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    nums[i + length] = nums[i];
  }

  return nums;
};

console.log(getConcatenation([1, 3, 2, 1]));
