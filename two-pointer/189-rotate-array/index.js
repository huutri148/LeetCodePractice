/**
 * https://leetcode.com/problems/rotate-array/
 * Time(O(n))
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  k = k % nums.length;

  nums.reverse();
  reversePositionOfArray(nums, 0, k - 1);
  reversePositionOfArray(nums, k, nums.length - 1);

  return nums;
};

const reversePositionOfArray = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
