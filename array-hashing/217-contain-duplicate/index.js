/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = (nums, numsSet = new Set()) => {
  for (const num of nums) {
    /* Time O(N) */
    if (numsSet.has(num)) return true;

    numsSet.add(num); /* Space O(N) */
  }

  return false;
};
