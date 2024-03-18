/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 */

// We can use reduce and map here
var runningSum = function (nums) {
  let preSum = 0,
    result = [];

  for (var i = 0; i < nums.length; i++) {
    preSum += nums[i];
    result[i] = preSum;
  }

  return result;
};

var runningSum2 = (nums) => {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};

console.log(runningSum2([3, 1, 2, 10, 1]));
