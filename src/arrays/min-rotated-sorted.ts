

/**
 * Problem: Find Minimum in Rotated Sorted Array
 * 
 * Description:
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * 
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.

 * You must write an algorithm that runs in O(log n) time.
 * 
 * Examples:
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 * 
 * Input: nums = [4,5,6,7,0,1,2]
 * Output: 0
 * Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
 * 
 * Example 3:
 * Input: nums = [11,13,15,17]
 * Output: 11
 * Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5000
 * -5000 <= nums[i] <= 5000
 * All the integers of nums are unique.
 * nums is sorted and rotated between 1 and n times.
 * 
 * @param {number[]} nums - list of rotated ascending nums  
 * @returns {number} Min value
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
export function findMin(nums: number[]): number {
  // binary search
  // note min value is always at the index after the greatest value

  // step 1: track min value, start in middle
  let low: number = 0;
  let high: number = nums.length - 1;
  let minValue: number = nums[0];

  // step 2: compare far left and far right to middle until 
  // leaf reached
  while (low <= high) {
    // step 3: compute mid
    let mid: number = Math.floor(low + (high - low) / 2);
    
    // step 4: check which part is sorted
    // case 1: left is sorted
    if(nums[low] <= nums[mid]){
      minValue = minValue < nums[low] ? minValue : nums[low];
      low = mid + 1;
    }
    // case 2: left is not sorted
    else {
      minValue = minValue < nums[mid] ? minValue : nums[mid];
      high = mid - 1;
    }
  }
  
  return minValue;
}