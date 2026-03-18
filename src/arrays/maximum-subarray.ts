/**
 * Problem: Maximum Subarray
 * 
 * Description:
 * Given an interger array nums, find the subarry with the largest sum, and return its sum
 * 
 * Examples:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 * 
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 * @param {number[]} nums - Description of parameter  
 * @returns {type} Description of return value
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function maximumSubarray(nums: number[]): number {
  let runningSum: number = nums[0];
  let maxSum: number = nums[0];
  
  // track 0 index as maxSum: if length is 1 then return
  if (nums.length == 1) return maxSum;

  for ( let i = 1; i < nums.length; i++ ){
    const currNum: number = nums[i];
    // compare 3 values: the before, the currNum and the after
    // if the before < currNum
    // replace the runningSum with currNum and maxSum with currNum
    if ( runningSum < 0 ) {
      runningSum = currNum;
    } else {
      runningSum += currNum;
    }

    // replace maxSum when runningSum > maxSum
    if( runningSum > maxSum ) {
      maxSum = runningSum;
    }
    // continue on through list to check after
  }

  return maxSum
}


// divide an conquer can use a recursive approach
export function maximumSubarrayDandC(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  return divideAndConquer(nums, 0, nums.length - 1);
}

function divideAndConquer(nums: number[], left: number, right: number) {
    // Base case: single element
  if (left === right) {
    return nums[left];
  }
  
  const mid: number = Math.floor((left + right) / 2);
  
  // Maximum subarray in left half
  const leftMax: number = divideAndConquer(nums, left, mid);
  
  // Maximum subarray in right half
  const rightMax: number = divideAndConquer(nums, mid + 1, right);
  
  // Maximum subarray crossing the midpoint
  const crossMax: number = maxCrossingSum(nums, left, mid, right);
  
  // Return the maximum of the three
  return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(nums: number[], left: number, mid: number, right: number): number {
  // Find max sum starting from mid and going left
  let leftSum: number = -Infinity;
  let sum: number = 0;
  
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }
  
  // Find max sum starting from mid+1 and going right
  let rightSum: number = -Infinity;
  sum = 0;
  
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }
  
  // Return sum of both sides
  return leftSum + rightSum;
}