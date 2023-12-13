/**
 * https://leetcode.com/problems/binary-search/
 * Time O(log(n))
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let [leftIndex, rightIndex] = [0, nums.length - 1];

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.trunc((leftIndex + rightIndex) / 2);
    const middleValue = nums[middleIndex];

    const isTarget = middleValue === target;
    if (isTarget) return middleIndex;

    const isTargetGreater = middleValue < target;
    if (isTargetGreater) leftIndex = middleIndex + 1;

    const isTargetLess = target < middleValue;
    if (isTargetLess) rightIndex = middleIndex - 1;
  }

  return -1;
};
