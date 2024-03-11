/**
 * https://leetcode.com/problems/intersection-of-two-arrays/?envType=daily-question&envId=2024-03-10
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let result = [];

  for (const ch of s1) {
    if (s2.has(ch)) result.push(ch);
  }

  return result;
};
