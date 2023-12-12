/**
 * https://leetcode.com/problems/container-with-most-water/
 * Time O(N)
 * @param {number[]} height
 * @return {number}
 */

const maxArea = (height) => {
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
