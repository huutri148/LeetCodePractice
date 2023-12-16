/**
 * https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let [l, i, r] = [0, 0, nums.length - 1];

  while (i <= r) {
    const num = nums[i];

    if (num === 0) {
      swapNums(nums, i, l);
      i++;
      l++;
    } else if (num === 2) {
      swapNums(nums, i, r);
      r--;
    } else if (num === 1) {
      i++;
    }
  }
};

const swapNums = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);

console.log(arr);
