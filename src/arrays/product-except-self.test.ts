import { productExceptSelf, productExceptSelfOptimal } from './product-except-self';

describe('Product of Array Except Self', () => {
  const implementations = [
    { name: 'productExceptSelf', fn: productExceptSelf },
    { name: 'productExceptSelfOptimal', fn: productExceptSelfOptimal }
  ];

  implementations.forEach(({ name, fn }) => {
    describe(`${name} implementation`, () => {
      describe('Basic functionality', () => {
        test('should return correct products for basic positive numbers', () => {
          expect(fn([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
        });

        test('should handle array with negative numbers and zero', () => {
          expect(fn([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
        });

        test('should handle all positive numbers', () => {
          expect(fn([2, 3, 4, 5])).toEqual([60, 40, 30, 24]);
        });

        test('should handle mix of positive and negative', () => {
          expect(fn([1, -2, 3, -4])).toEqual([24, -12, 8, -6]);
        });
      });

      describe('Edge cases with zeros', () => {
        test('should handle single zero in array', () => {
          expect(fn([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
        });

        test('should handle zero at beginning', () => {
          expect(fn([0, 2, 3, 4])).toEqual([24, 0, 0, 0]);
        });

        test('should handle zero at end', () => {
          expect(fn([1, 2, 3, 0])).toEqual([0, 0, 0, 6]);
        });

        test('should handle multiple zeros', () => {
          expect(fn([0, 0, 2, 3])).toEqual([0, 0, 0, 0]);
          expect(fn([1, 0, 0, 4])).toEqual([0, 0, 0, 0]);
        });

        test('should handle all zeros', () => {
          expect(fn([0, 0, 0])).toEqual([0, 0, 0]);
        });
      });

      describe('Minimum constraint cases', () => {
        test('should handle minimum array length of 2', () => {
          expect(fn([2, 3])).toEqual([3, 2]);
        });

        test('should handle minimum array with zero', () => {
          expect(fn([0, 5])).toEqual([5, 0]);
        });

        test('should handle minimum array with negatives', () => {
          expect(fn([-2, -3])).toEqual([-3, -2]);
        });
      });

      describe('Negative numbers', () => {
        test('should handle all negative numbers', () => {
          expect(fn([-1, -2, -3])).toEqual([6, 3, 2]);
        });

        test('should handle single negative number', () => {
          expect(fn([1, -2, 3, 4])).toEqual([-24, 12, -8, -6]);
        });

        // Fixed: Corrected expected values
        test('should handle even count of negatives', () => {
          // [-1, -2] = 2 (positive), so products: [2*3*4], [1*3*4], [1*2*4], [1*2*3]
          expect(fn([-1, -2, 3, 4])).toEqual([-24, -12, 8, 6]);
        });

        test('should handle odd count of negatives', () => {
          // [-1, -2, -3] = -6 (negative), so all products negative except last
          expect(fn([-1, -2, -3, 4])).toEqual([24, 12, 8, -6]);
        });
      });

      describe('Boundary value testing', () => {
        test('should handle maximum positive values', () => {
          expect(fn([30, 30])).toEqual([30, 30]);
        });

        test('should handle maximum negative values', () => {
          expect(fn([-30, -30])).toEqual([-30, -30]);
        });

        test('should handle mix of boundary values', () => {
          expect(fn([-30, 0, 30])).toEqual([0, -900, 0]);
        });

        test('should handle ones and boundary values', () => {
          expect(fn([1, 30, 1])).toEqual([30, 1, 30]);
        });
      });

      describe('Special numeric cases', () => {
        test('should handle array with ones', () => {
          expect(fn([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
        });

        test('should handle mix of ones and other numbers', () => {
          expect(fn([1, 2, 1, 4])).toEqual([8, 4, 8, 2]);
        });

        test('should handle powers of 2', () => {
          expect(fn([1, 2, 4, 8])).toEqual([64, 32, 16, 8]);
        });
      });

      describe('Mathematical edge cases', () => {
        test('should handle consecutive integers', () => {
          expect(fn([1, 2, 3])).toEqual([6, 3, 2]);
        });

        test('should handle descending order', () => {
          expect(fn([4, 3, 2, 1])).toEqual([6, 8, 12, 24]);
        });

        test('should handle repeated numbers', () => {
          expect(fn([2, 2, 3, 3])).toEqual([18, 18, 12, 12]);
        });
      });

      describe('Constraint validation', () => {
        test('should handle minimum constraint length exactly', () => {
          expect(fn([5, 7])).toEqual([7, 5]);
        });

        // Fixed: Corrected calculation [-30 * 30 = -900, 1 * 30 = 30, -30 * 1 = -30]
        test('should handle constraint boundary values', () => {
          expect(fn([-30, 1, 30])).toEqual([30, -900, -30]);
        });
      });
    });
  });

  describe('Implementation comparison', () => {
    test('should produce identical results for same input', () => {
      const testCases = [
        [1, 2, 3, 4],
        [-1, 1, 0, -3, 3],
        [0, 0, 2, 3],
        [-30, 1, 30],
        [1, -2, 3, -4]
      ];

      testCases.forEach(testCase => {
        const result1 = productExceptSelf(testCase);
        const result2 = productExceptSelfOptimal(testCase);
        expect(result1).toEqual(result2);
      });
    });
  });
});