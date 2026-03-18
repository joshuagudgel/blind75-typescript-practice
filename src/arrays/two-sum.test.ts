import { twoSum, twoSumBruteForce } from './two-sum';

describe('Two Sum', () => {
  describe('twoSum (Hash Map Approach)', () => {
    test('should return correct indices for basic case', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('should return correct indices when target requires different positions', () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('should handle negative numbers', () => {
      expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });

    test('should handle duplicate numbers', () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('should work with zero', () => {
      expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });

    test('should handle minimum array size', () => {
      expect(twoSum([1, 2], 3)).toEqual([0, 1]);
    });

    test('should handle larger arrays', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(twoSum(nums, 19)).toEqual([8, 9]); // 9 + 10 = 19
    });
  });

  describe('twoSumBruteForce', () => {
    test('should return correct indices for basic case', () => {
      expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('should return correct indices when target requires different positions', () => {
      expect(twoSumBruteForce([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('should handle negative numbers', () => {
      expect(twoSumBruteForce([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });
  });

  describe('Edge Cases', () => {
    test('both approaches should give same results', () => {
      const testCases = [
        { nums: [2, 7, 11, 15], target: 9 },
        { nums: [3, 2, 4], target: 6 },
        { nums: [-1, -2, -3, -4, -5], target: -8 },
      ];

      testCases.forEach(({ nums, target }) => {
        const result1 = twoSum([...nums], target);
        const result2 = twoSumBruteForce([...nums], target);
        
        // Both should return valid indices that sum to target
        expect(nums[result1[0]] + nums[result1[1]]).toBe(target);
        expect(nums[result2[0]] + nums[result2[1]]).toBe(target);
      });
    });
  });
});