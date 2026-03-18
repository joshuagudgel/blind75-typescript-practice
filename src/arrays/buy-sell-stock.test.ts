import { maxProfit } from './buy-sell-stock';

describe('Best Time to Buy and Sell Stock', () => {
  test('should return maximum profit for normal case', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('should return 0 when prices only decrease', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('should handle single price', () => {
    expect(maxProfit([5])).toBe(0);
  });

  test('should handle two prices with profit', () => {
    expect(maxProfit([1, 5])).toBe(4);
  });

  test('should handle two prices with loss', () => {
    expect(maxProfit([5, 1])).toBe(0);
  });

  test('should handle all same prices', () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0);
  });

  test('should find maximum profit with multiple peaks', () => {
    expect(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toBe(8);
  });

  test('should handle prices starting high then going low then high', () => {
    expect(maxProfit([10, 1, 2, 15])).toBe(14);
  });

  test('should handle minimum constraint (single element)', () => {
    expect(maxProfit([100])).toBe(0);
  });

  test('should handle zero prices', () => {
    expect(maxProfit([0, 0, 0])).toBe(0);
  });

  test('should handle maximum values within constraints', () => {
    expect(maxProfit([0, 10000])).toBe(10000);
  });

  test('should handle prices with steady increase', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });
});