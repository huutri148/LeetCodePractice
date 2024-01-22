/**
 * https://leetcode.com/problems/two-sum/
 * Time(O(n)) || Space(O(n))
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = getMap(nums);

  return getSum(nums, target, map);
};

const getMap = (nums) => {
  const map = new Map();

  nums.forEach((num, index) => map.set(num, index));
  return map;
};

const getSum = (nums, target, map) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    const complement = target - nums[index];
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement) && map.get(complement) !== index;
    if (isTarget) return [index, sumIndex];
  }

  return [-1, -1];
};
