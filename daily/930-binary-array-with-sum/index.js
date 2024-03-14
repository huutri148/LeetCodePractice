/**
 * https://leetcode.com/problems/binary-subarrays-with-sum
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let sum = 0,
    count = 0;
  const map = new Map();

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - goal)) count += map.get(sum - goal);

    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }

  return count;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1]));
