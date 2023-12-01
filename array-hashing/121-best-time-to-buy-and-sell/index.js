/**
 * @param {number[]} prices
 * @return {number}
 */

/* Time O(N) | Space O(1)*/
var maxProfit = function (prices) {
  let max = 0,
    leftIndex = 0,
    rightIndex = 1;

  while (rightIndex < prices.length) {
    if (prices[leftIndex] < prices[rightIndex]) {
      let profit = prices[rightIndex] - prices[leftIndex];
      max = Math.max(max, profit);
    } else leftIndex = rightIndex;

    rightIndex++;
  }

  return max;
};
