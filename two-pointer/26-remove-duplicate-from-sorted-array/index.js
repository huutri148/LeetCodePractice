/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(i = 0; i < nums.length; i++){
        if(nums[i] < nums[i+1]) {
            nums[index] = nums[i+1];
            index++
        }
    }

    return index;
};