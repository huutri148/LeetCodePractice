/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 * and nums[i] + nums[j] + nums[k] == 0
 * Notice that the solution set must not contain duplicate triplets
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || nums[i] !== nums[i - 1]) {
          let leftIndex = i + 1, rightIndex = nums.length - 1, sum = 0 - nums[i];


          while (leftIndex < rightIndex) {

              if (nums[leftIndex] + nums[rightIndex] === sum) {
                  result.push([nums[i], nums[leftIndex], nums[rightIndex]]);

                  while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex + 1]) leftIndex++;
                  while (rightIndex > leftIndex && nums[rightIndex] === nums[rightIndex - 1]) rightIndex--;

                  leftIndex++;
                  rightIndex--;
              }
              else if (nums[leftIndex] + nums[rightIndex] < sum) leftIndex++;
              else if (nums[leftIndex] + nums[rightIndex] > sum) rightIndex--;
          }
      }
  }

  return result;
};
