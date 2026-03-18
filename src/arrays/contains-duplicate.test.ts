import { containsDuplicate } from './contains-duplicate';

describe('Contains Duplicate', () => {
  describe('Basic functionality', () => {
    test('should return true when array has duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('should return false when array has no duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('should return true for consecutive duplicates', () => {
      expect(containsDuplicate([1, 1, 2, 3])).toBe(true);
    });

    test('should return true for multiple duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 1, 2])).toBe(true);
    });
  });

  describe('Edge cases', () => {
    test('should handle empty array', () => {
      expect(containsDuplicate([])).toBe(false);
    });

    test('should handle single element array', () => {
      expect(containsDuplicate([1])).toBe(false);
    });

    test('should handle two identical elements', () => {
      expect(containsDuplicate([5, 5])).toBe(true);
    });

    test('should handle two different elements', () => {
      expect(containsDuplicate([1, 2])).toBe(false);
    });
  });

  describe('Different data types', () => {
    test('should handle negative numbers', () => {
      expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
      expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
    });

    test('should handle zero values', () => {
      expect(containsDuplicate([0, 1, 2, 0])).toBe(true);
      expect(containsDuplicate([0, 1, 2, 3])).toBe(false);
    });

    test('should handle mix of positive and negative', () => {
      expect(containsDuplicate([-1, 0, 1, -1])).toBe(true);
      expect(containsDuplicate([-1, 0, 1, 2])).toBe(false);
    });
  });

  describe('Large arrays', () => {
    test('should handle large array with duplicates at end', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i);
      largeArray.push(999); // Add duplicate at end
      expect(containsDuplicate(largeArray)).toBe(true);
    });

    test('should handle large array without duplicates', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i);
      expect(containsDuplicate(largeArray)).toBe(false);
    });

    test('should handle large array with duplicates at beginning', () => {
      const largeArray = [1, 2, 3, 1];
      largeArray.push(...Array.from({ length: 1000 }, (_, i) => i + 1000));
      expect(containsDuplicate(largeArray)).toBe(true);
    });
  });

  describe('Pattern-based tests', () => {
    test('should handle all same elements', () => {
      expect(containsDuplicate([7, 7, 7, 7, 7])).toBe(true);
    });

    test('should handle alternating pattern with duplicates', () => {
      expect(containsDuplicate([1, 2, 1, 2, 3])).toBe(true);
    });

    test('should handle alternating pattern without duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
    });

    test('should handle reverse sorted array with duplicates', () => {
      expect(containsDuplicate([10, 9, 8, 7, 6, 5, 5])).toBe(true);
    });

    test('should handle reverse sorted array without duplicates', () => {
      expect(containsDuplicate([10, 9, 8, 7, 6, 5, 4])).toBe(false);
    });
  });

  describe('Boundary and constraint tests', () => {
    test('should handle maximum constraint values', () => {
      expect(containsDuplicate([10000, 9999, 10000])).toBe(true);
    });

    test('should handle minimum constraint values', () => {
      expect(containsDuplicate([-10000, -9999, -10000])).toBe(true);
    });

    test('should handle mixed boundary values', () => {
      expect(containsDuplicate([-10000, 0, 10000, -10000])).toBe(true);
      expect(containsDuplicate([-10000, 0, 10000, 5000])).toBe(false);
    });
  });

  describe('Performance edge cases', () => {
    test('should handle array where duplicate is at very end', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
      expect(containsDuplicate(array)).toBe(true);
    });

    test('should handle array with many near-duplicates but no actual duplicates', () => {
      const array = [1, 11, 111, 1111, 11111];
      expect(containsDuplicate(array)).toBe(false);
    });

    test('should handle array with duplicate in middle', () => {
      const array = [1, 2, 3, 4, 5, 3, 6, 7, 8, 9];
      expect(containsDuplicate(array)).toBe(true);
    });
  });

  describe('Special numeric cases', () => {
    test('should handle floating point integers', () => {
      expect(containsDuplicate([1.0, 2.0, 3.0, 1.0])).toBe(true);
    });

    test('should handle very large numbers', () => {
      expect(containsDuplicate([999999, 888888, 777777, 999999])).toBe(true);
    });

    test('should handle sequence with gaps', () => {
      expect(containsDuplicate([2, 4, 6, 8, 10, 2])).toBe(true);
      expect(containsDuplicate([2, 4, 6, 8, 10, 12])).toBe(false);
    });
  });

  describe('Real-world scenarios', () => {
    test('should handle typical interview example', () => {
      expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('should handle sorted array with duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 4, 4, 5])).toBe(true);
    });

    test('should handle unsorted array without duplicates', () => {
      expect(containsDuplicate([3, 1, 4, 1, 5, 9, 2, 6])).toBe(true);
    });

    test('should handle array with multiple sets of duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 1, 2, 4, 5, 3])).toBe(true);
    });
  });
});