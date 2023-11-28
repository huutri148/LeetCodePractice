/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueIndex = 1;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      nums[uniqueIndex] = nums[i + 1];
      uniqueIndex++;
    }
  }

  return uniqueIndex;
};
