import { threeSumBruteForce } from './three-sum';

describe('Three Sum', () => {
  describe('threeSum (Brute Force)', () => {
    test('1', () => {
      const result = threeSumBruteForce([-1,0,1,2,-1,-4]);
      const expected = [[-1,-1,2],[-1,0,1]];
      expect(result).toHaveLength(expected.length);
      expected.forEach(triplet => {
        expect(result).toContainEqual(triplet);
      });
    });
    test('2', () => {
      expect(threeSumBruteForce([0,1,1])).toEqual([]);
    });
    test('3', () => {
      expect(threeSumBruteForce([0,0,0])).toEqual([[0,0,0]]);
    });
  });
});