/**
 * Problem: Two Sum (Leetcode #1)
 * 
 * Description:
 * Given an array of integers nums and an integer target, return indices of 
 * the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you 
 * may not use the same element twice.
 * 
 * Examples:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1] (Because nums[0] + nums[1] == 9)
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists
 * 
 * @param nums Array of integers
 * @param target Target sum value
 * @returns Array containing indices of the two numbers that sum to target
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
  // Use a hash map to store number -> index mapping
  const numToIndex = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    // Check if complement exists in our map
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i];
    }
    
    // Store current number and its index
    numToIndex.set(nums[i], i);
  }
  
  // This should never be reached based on problem constraints
  throw new Error('No solution found');
}

/**
 * Brute force approach
 * 
 * @param nums Array of integers  
 * @param target Target sum value
 * @returns Array containing indices of the two numbers that sum to target
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  
  throw new Error('No solution found');
}