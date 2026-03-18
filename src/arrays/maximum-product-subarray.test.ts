import { maximumProductSubarray } from './maximum-product-subarray';

describe('Maximum Product Subarray - ', () => {
  describe('Given Tests', () => {
    test('Should find largest product in non zero numbers', () => {
      expect(maximumProductSubarray([2,3,-2,4])).toBe(6);
    });
    test('Should find 0 to be greatest among negatives', () => {
      expect(Math.abs(maximumProductSubarray([-2, 0, -1]))).toBe(0);
    });
    test('Should handle positive negative positive', () => {
      expect(maximumProductSubarray([3,-1,4])).toBe(4);
    });
    test('Should handle positive negative positive', () => {
      expect(maximumProductSubarray([2,-5,-2,-4,3])).toBe(24);
    });
  })

  describe('Edge Cases', () => {
    test('Should handle single element array', () => {
      expect(maximumProductSubarray([5])).toBe(5);
    });
    test('Should handle single negative element', () => {
      expect(maximumProductSubarray([-5])).toBe(-5);
    });
    test('Should handle single zero', () => {
      expect(maximumProductSubarray([0])).toBe(0);
    });
  });

  describe('Multiple Zeros', () => {
    test('Should handle multiple zeros', () => {
      expect(maximumProductSubarray([0, 0, 0])).toBe(0);
    });
    test('Should handle zeros with negatives', () => {
      expect(Math.abs(maximumProductSubarray([-1, 0, -2, 0, -3]))).toBe(0);
    });
  });

  describe('All Negative Numbers', () => {
    test('Should handle two negatives producing positive', () => {
      expect(maximumProductSubarray([-2, -3])).toBe(6);
    });
  });

  describe('All Positive Numbers', () => {
    test('Should return product of all positive numbers', () => {
      expect(maximumProductSubarray([2, 3, 4])).toBe(24);
    });
    test('Should handle single positive', () => {
      expect(maximumProductSubarray([7])).toBe(7);
    });
  });

  describe('Mixed Positive and Negative', () => {
    test('Should handle positive after zero', () => {
      expect(maximumProductSubarray([0, 2, 3, -2])).toBe(6);
    });
    test('Should isolate best subarray before zero', () => {
      expect(maximumProductSubarray([2, 3, 0, -2])).toBe(6);
    });
  });

  describe('Boundary Constraints', () => {
    test('Should handle maximum value constraint', () => {
      expect(maximumProductSubarray([10, 10])).toBe(100);
    });
    test('Should handle minimum value constraint', () => {
      expect(maximumProductSubarray([-10, -10])).toBe(100);
    });
  });
});