/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/* Time O(N) | Space O(1)*/
var twoSum = function (numbers, target) {
  let leftIndex = 0,
    rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex];
    if (sum === target) return [leftIndex + 1, rightIndex + 1];
    else if (sum < target) leftIndex++;
    else if (sum > target) rightIndex--;
  }

  return [-1, -1];
};
