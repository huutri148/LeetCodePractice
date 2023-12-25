/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Time O(N) | Space O(1)
 * @param {number[]} prices
 * @return {number}
 */

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
