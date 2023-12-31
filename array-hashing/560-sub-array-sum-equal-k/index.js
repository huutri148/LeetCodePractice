/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * Time(O(n)) || Space(O(n))
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const subarraySum = (nums, k) => {
  let count = 0,
    sum = 0,
    map = new Map();
  map.set(0, 1);

  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
