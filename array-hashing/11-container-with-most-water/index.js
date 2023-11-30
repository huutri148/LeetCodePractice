/**
 * height = [1,8,6,2,5,4,8,3,7]
 * return 49
 * @param {number[]} height
 * @return {number}
 */

/**
 * Using two sliding window pointer
 * O(n)
 */
var maxArea = function (height) {
  let largestArc = 0,
    leftIndex = 0,
    rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const lowerHeight = Math.min(height[leftIndex], height[rightIndex]);
    const width = rightIndex - leftIndex;

    largestArc = Math.max(largestArc, lowerHeight * width);
    height[leftIndex] <= height[rightIndex] ? leftIndex++ : rightIndex--;
  }

  return largestArc;
};
