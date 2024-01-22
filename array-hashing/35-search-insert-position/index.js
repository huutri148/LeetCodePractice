/**
 * https://leetcode.com/problems/search-insert-position/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Using Binary Search with O(log n)
var searchInsert = function (nums, target) {
  let leftIndex = 0,
    rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (target == nums[middleIndex]) return middleIndex;
    else if (nums[middleIndex] < target) leftIndex = middleIndex + 1;
    else rightIndex = middleIndex - 1;
  }

  return leftIndex;
};
