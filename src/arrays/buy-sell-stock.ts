/**
 * Problem: Best Time to Buy and Sell Stock
 * 
 * Description:
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Examples:
 * Input:  prices = [7,1,5,3,6,4]
 * Output: 5
 * 
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * 
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 * 
 * 
 * @param {number[]} prices - prices[i] is the price of a given stock on the ith day
 * @returns {number} - the maximum profit you can achieve from this transaction
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */
export function maxProfit(prices: number[]): number {
  let maximumProfit: number = 0;
  let minPrice: number = prices[0];

  for (let i = 0; i < prices.length; i++) {
    // update minPrice
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // update maximumProfit
    if(prices[i] - minPrice > maximumProfit) {
      maximumProfit = prices[i] - minPrice;
    }
  }
  return maximumProfit;
}