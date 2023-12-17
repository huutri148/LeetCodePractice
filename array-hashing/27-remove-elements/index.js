/**
 * https://leetcode.com/problems/remove-element/
 * Time(O(n))
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }

  return nums.length;
};
