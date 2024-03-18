/**
 * https://leetcode.com/problems/product-of-array-except-self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    console.log(result[i], postfix);
    result[i] *= postfix;
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
