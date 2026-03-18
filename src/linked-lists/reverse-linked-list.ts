import { ListNode } from '../utils/data-structures';

/**
 * Problem: Reverse Linked List (Leetcode #206)
 * 
 * Description:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Examples:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Input: head = []
 * Output: []
 * 
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000]
 * - -5000 <= Node.val <= 5000
 * 
 * @param head Head of the linked list to reverse
 * @returns Head of the reversed linked list
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  
  while (current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  
  return prev;
}

/**
 * Recursive approach to reverse linked list
 * 
 * @param head Head of the linked list to reverse
 * @returns Head of the reversed linked list
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to recursion stack
 */
export function reverseListRecursive(head: ListNode | null): ListNode | null {
  // Base case: empty list or single node
  if (!head || !head.next) {
    return head;
  }
  
  // Recursively reverse the rest of the list
  const reversedHead = reverseListRecursive(head.next);
  
  // Reverse the current connection
  head.next.next = head;
  head.next = null;
  
  return reversedHead;
}