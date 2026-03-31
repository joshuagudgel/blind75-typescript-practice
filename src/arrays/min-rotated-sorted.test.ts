import { findMin  } from './min-rotated-sorted';

describe('Min Rotated Sorted Array', () => {
  describe('findFind (binary search)', () => {
    test('find min in middle: odd', () => {
      expect(findMin([4, 5, 1, 2, 3])).toEqual(1);
    });
    
    test('find min in middle: even', () => {
      expect(findMin([5, 6, 1, 2, 3, 4])).toEqual(1);
    });

    test('find min in right side', () => {
      expect(findMin([4,5,6,7,0,1,2])).toEqual(0);
    });

    test('find min on left edge', () => {
      expect(findMin([11,13,15,17])).toEqual(11);
    });
  });
});