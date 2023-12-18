/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const containsNearbyDuplicate = (nums, k) => {
  let [leftIndex, rightIndex] = [0, 1];
  let windows = new Map();

  while (rightIndex < nums.length) {
    const val = nums[rightIndex];

    if (windows.has(val)) return true;
    else windows.set(val, 1);
    rightIndex++;

    if (rightIndex - leftIndex > k) {
      let leftValue = windows.get(nums[leftIndex]);
      leftValue--;

      if (leftValue === 0) windows.delete(nums[leftIndex]);
      else windows.set(nums[leftIndex], leftValue);

      leftIndex++;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
