/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Time O(N) | Space O(1)
 * @param {number[]} prices
 * @return {number}
 */
const maxProfix = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }

  return maxProfit;
};
