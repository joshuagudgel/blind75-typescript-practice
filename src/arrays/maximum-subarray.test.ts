import { maximumSubarray, maximumSubarrayDandC } from './maximum-subarray';

const implementations = [
  { name: 'Kadane\'s Algo', fn: maximumSubarray },
  { name: 'Divide and Conquer', fn: maximumSubarrayDandC }
]

implementations.forEach(({ name, fn }) => {
  
  describe(`Maximum Subarray - ${name}`, () => {
    describe('Basic functionality', () => {
      test('should return correct sum for example with negative and positive numbers', () => {
        // Subarray [4,-1,2,1] has sum 6
        expect(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
      });
    
      test('should return element itself for single element array', () => {
        expect(fn([1])).toBe(1);
      });
    
      test('should return sum of entire array when all positive', () => {
        // Entire array [5,4,-1,7,8] sums to 23
        expect(fn([5, 4, -1, 7, 8])).toBe(23);
      });
    
      test('should handle simple positive array', () => {
        expect(fn([1, 2, 3, 4, 5])).toBe(15);
      });
    
      test('should find max subarray in middle of array', () => {
        // [3, 4, 5] = 12
        expect(fn([-1, -2, 3, 4, 5, -1, -2])).toBe(12);
      });
    });
  
    describe('Edge cases with single elements', () => {
      test('should handle single positive element', () => {
        expect(fn([5])).toBe(5);
      });
    
      test('should handle single negative element', () => {
        expect(fn([-5])).toBe(-5);
      });
    
      test('should handle single zero', () => {
        expect(fn([0])).toBe(0);
      });
    });
  
    describe('All negative numbers', () => {
      test('should return least negative number when all negative', () => {
        expect(fn([-3, -2, -5, -1, -4])).toBe(-1);
      });
    
      test('should handle all same negative numbers', () => {
        expect(fn([-2, -2, -2])).toBe(-2);
      });
    
      test('should handle two negative numbers', () => {
        expect(fn([-5, -3])).toBe(-3);
      });
    });
  
    describe('Arrays with zeros', () => {
      test('should handle array with zeros and positive numbers', () => {
        expect(fn([0, 1, 2, 3])).toBe(6);
      });
    
      test('should handle array with zeros and negative numbers', () => {
        expect(fn([-5, 0, -3, 0, -1])).toBe(0);
      });
    
      test('should handle zeros between positive subarrays', () => {
        expect(fn([1, 2, 0, 3, 4])).toBe(10);
      });
    
      test('should handle all zeros', () => {
        expect(fn([0, 0, 0, 0])).toBe(0);
      });
    
      test('should handle zero in middle of positive numbers', () => {
        expect(fn([5, 0, 5])).toBe(10);
      });
    });
  
    describe('Subarray position tests', () => {
      test('should find max subarray at beginning', () => {
        expect(fn([10, -5, -3, 2, 1])).toBe(10);
      });
    
      test('should find max subarray at end', () => {
        expect(fn([-5, -3, 2, 1, 10])).toBe(13);
      });
    
      test('should handle entire array as max subarray', () => {
        expect(fn([1, 2, 3, 4])).toBe(10);
      });
    
      test('should find max subarray spanning most of array', () => {
        expect(fn([-1, 2, 3, 4, 5, 6, -20, 1])).toBe(20);
      });
    });
  
    describe('Alternating and mixed patterns', () => {
      test('should handle alternating positive and negative', () => {
        expect(fn([5, -3, 5, -3, 5])).toBe(9);
      });
    
      test('should handle alternating with larger negatives', () => {
        expect(fn([5, -10, 5, -10, 5])).toBe(5);
      });
    
      test('should handle pattern with small negatives', () => {
        expect(fn([8, -1, 7, -1, 6])).toBe(19);
      });
    
      test('should handle large positive followed by small negative', () => {
        expect(fn([100, -1, 50, -1, 25])).toBe(173);
      });
    });
  
    describe('Boundary value testing', () => {
      test('should handle maximum positive value', () => {
        expect(fn([10000])).toBe(10000);
      });
    
      test('should handle maximum negative value', () => {
        expect(fn([-10000])).toBe(-10000);
      });
    
      test('should handle mix of boundary values', () => {
        expect(fn([10000, -10000, 10000])).toBe(10000);
      });
    
      test('should handle boundary values with small numbers', () => {
        expect(fn([10000, 1, 1, -10000, 10000])).toBe(10002);
      });
    
      test('should handle multiple max positive values', () => {
        expect(fn([10000, 10000, 10000])).toBe(30000);
      });
    });
  
    describe('Two element arrays', () => {
      test('should handle two positive numbers', () => {
        expect(fn([3, 5])).toBe(8);
      });
    
      test('should handle positive then negative', () => {
        expect(fn([5, -3])).toBe(5);
      });
    
      test('should handle negative then positive', () => {
        expect(fn([-3, 5])).toBe(5);
      });
    
      test('should handle two negative numbers', () => {
        expect(fn([-1, -5])).toBe(-1);
      });
    
      test('should handle large positive and small negative', () => {
        expect(fn([100, -1])).toBe(100);
      });
    });
  
    describe('Longer sequences', () => {
      test('should handle long positive sequence', () => {
        const nums = Array(100).fill(1);
        expect(fn(nums)).toBe(100);
      });
    
      test('should handle long sequence with one large positive', () => {
        const nums = Array(50).fill(-1);
        nums.push(1000);
        nums.push(...Array(49).fill(-1));
        expect(fn(nums)).toBe(1000);
      });
    
      test('should handle mixed long sequence', () => {
        expect(fn([2, -1, 2, -1, 2, -1, 2, -1, 2])).toBe(6);
      });
    });
  
    describe('Special mathematical cases', () => {
      test('should handle consecutive integers', () => {
        expect(fn([1, 2, 3, 4, 5])).toBe(15);
      });
    
      test('should handle descending positive integers', () => {
        expect(fn([5, 4, 3, 2, 1])).toBe(15);
      });
    
      test('should handle powers of 2', () => {
        expect(fn([1, 2, 4, 8, 16])).toBe(31);
      });
    
      test('should handle negative powers of 2', () => {
        expect(fn([-16, -8, -4, -2, -1])).toBe(-1);
      });
    });
  
    describe('Reset scenarios', () => {
      test('should reset and start new subarray after large negative', () => {
        expect(fn([5, -100, 10])).toBe(10);
      });
    
      test('should handle multiple reset points', () => {
        expect(fn([5, -10, 3, -10, 7, -10, 2])).toBe(7);
      });
    
      test('should handle gradual decline and recovery', () => {
        expect(fn([10, -2, -3, -4, 15])).toBe(16);
      });
    });
  
    describe('Kadane\'s algorithm specific cases', () => {
      test('should handle case where keeping negative improves later sum', () => {
        // Keep -1 to get [4, -1, 2, 1] = 6 instead of just [2, 1] = 3
        expect(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
      });
    
      test('should handle multiple small negatives within positive run', () => {
        expect(fn([10, -1, -1, -1, 10])).toBe(17);
      });
    
      test('should know when to drop previous sum', () => {
        expect(fn([5, -6, 10])).toBe(10);
      });
    
      test('should handle barely positive running sum', () => {
        expect(fn([1, -1, 1, -1, 1, -1, 5])).toBe(5);
      });
    });
  });

});