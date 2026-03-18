import { reverseList, reverseListRecursive } from './reverse-linked-list';
import { ListNode, createLinkedList, linkedListToArray } from '../utils/data-structures';

describe('Reverse Linked List', () => {
  describe('reverseList (Iterative)', () => {
    test('should reverse a list with multiple nodes', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });

    test('should handle a list with two nodes', () => {
      const head = createLinkedList([1, 2]);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([2, 1]);
    });

    test('should handle empty list', () => {
      expect(reverseList(null)).toBeNull();
    });

    test('should handle single node', () => {
      const head = new ListNode(1);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([1]);
    });

    test('should handle list with duplicate values', () => {
      const head = createLinkedList([1, 1, 2, 1]);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([1, 2, 1, 1]);
    });
  });

  describe('reverseListRecursive', () => {
    test('should reverse a list with multiple nodes', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const reversed = reverseListRecursive(head);
      expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });

    test('should handle a list with two nodes', () => {
      const head = createLinkedList([1, 2]);
      const reversed = reverseListRecursive(head);
      expect(linkedListToArray(reversed)).toEqual([2, 1]);
    });

    test('should handle empty list', () => {
      expect(reverseListRecursive(null)).toBeNull();
    });

    test('should handle single node', () => {
      const head = new ListNode(1);
      const reversed = reverseListRecursive(head);
      expect(linkedListToArray(reversed)).toEqual([1]);
    });
  });

  describe('Both approaches should give same results', () => {
    const testCases = [
      [1, 2, 3, 4, 5],
      [1, 2],
      [42],
      [1, 1, 1],
      [5, 4, 3, 2, 1],
    ];

    testCases.forEach((arr) => {
      test(`should give same results for [${arr.join(',')}]`, () => {
        const head1 = createLinkedList(arr);
        const head2 = createLinkedList(arr);
        
        const result1 = reverseList(head1);
        const result2 = reverseListRecursive(head2);
        
        expect(linkedListToArray(result1)).toEqual(linkedListToArray(result2));
      });
    });
  });
});