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
     * @return {void}
     */
    reorderList(head) {
        // get to middle, start reversing the list, and zip it back together.
        let mid = head;
        let end = head.next;
        while (end && end.next) {
            mid = mid.next;
            end = end.next.next;
        }

        let reverser = mid.next;
        let prev = null;
        mid.next = null; // I didn't disconnect;
        while (reverser) {
            const next = reverser.next;
            reverser.next = prev;
            prev = reverser;
            reverser = next;
        }

        let revHead = prev;
        let headRunner = head;
        while (revHead) {
            const headNext = headRunner.next;
            const revNext = revHead.next;
            headRunner.next = revHead;
            revHead.next = headNext;
            headRunner = headNext;
            revHead = revNext;
        }
        
    }
}
