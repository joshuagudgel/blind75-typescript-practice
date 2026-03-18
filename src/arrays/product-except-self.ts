/**
 * Problem: Product of Array Except Self
 * 
 * Description:
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Examples:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Input: nums = [-1,1,0,-3,3]
 * OUtput: [0,0,9,0,0]
 * 
 * Constraints:
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * 
 * @param {number[]} nums - Array of numbers  
 * @returns {number[]} array of products except self at answer[i]
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// running products left and running products right
// combine for answer[]
export function productExceptSelf(nums: number[]): number[] {
  // calculate left product at each index
  const leftProducts: number[] = new Array(nums.length).fill(1);
  for (let i: number = 1; i < nums.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // calculate right product at each index
  const rightProducts: number[] = new Array(nums.length).fill(1);
  for (let i: number = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  const answer: number[] = new Array(nums.length).fill(1);
  for ( let i: number = 0; i < nums.length; i++ ) {
    answer[i] = leftProducts[i] * rightProducts[i];
  } 
  return answer;
}

export function productExceptSelfOptimal(nums: number[]): number[] {
  let n = nums.length;
  const answer: number[] = new Array(n);

  answer[0] = 1;
  // calculate prefix products in answer space
  for( let i = 1; i < n; i++ ) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let prevSuffix: number = 1;
  // calculate suffix products and update answer array
  for (let i = n - 2; i >= 0; i--) {
    prevSuffix *= nums[i + 1];
    answer[i] *= prevSuffix;
  }
  
  return answer;
}