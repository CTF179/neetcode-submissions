/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // we can reverse with a temp pointer to swap the direction of the current head
        // head's-next next pointer should point at head.
        let prev = null;
        while (head !== null){
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}
