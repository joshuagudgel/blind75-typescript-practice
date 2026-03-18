/**
 * Problem: Maximum Product Subarray
 * 
 * Description:
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * 
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 * 
 * Note that the product of an array with a single element is the value of that element.
 * 
 * Examples:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -10 <= nums[i] <= 10
 * 
 * @param {number[]} nums - integer array
 * @returns {number} return the subarray with the largest product 
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
// split by 0s
// calc each and find maximumProduct
// also compare maxproduct to current value
export function maximumProductSubarray(nums: number[]): number {
  let maximumProduct: number = nums[0];
  let runningProduct: number = 1;

  // length of 1
  if (nums.length === 1) return maximumProduct;

  // check max products forwards
  for (let i = 0; i < nums.length; i++) {
    // update running product
    runningProduct *= nums[i];

    // replace maxProduct if needed
    if (runningProduct > maximumProduct) {
      maximumProduct = runningProduct;
    }

    if (runningProduct == 0) {
      runningProduct = 1;
    }
  }

  // reset runningProd for 2nd loop
  runningProduct = 1;
  // check max product going backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    // update running product
    runningProduct *= nums[i];

    // replace maxProduct if needed
    if (runningProduct > maximumProduct) {
      maximumProduct = runningProduct;
    }

    if (runningProduct == 0) {
      runningProduct = 1;
    }
  }

  return maximumProduct;
}
