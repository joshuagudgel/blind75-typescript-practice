/**
 * Problem: Contains Duplicate
 * 
 * Description:
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * Examples:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^5
 * 
 * @param {number[]} nums - array of numbers
 * @returns {boolean} Description of return value
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function containsDuplicate(nums: number[]): boolean {
  
  // create map to track counts
  const numberCounts: Map<number, number> = new Map();

  // insert elements, if a duplicate is detected then return false
  for (let i = 0; i < nums.length; i++ ){
    if (numberCounts.get(nums[i]) === 1) return true;
    numberCounts.set(nums[i], 1);
  }

  return false;
}