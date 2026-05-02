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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const newHead = new ListNode();
        let runner = newHead;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                runner.next = list1;
                list1 = list1.next;
            } else {
                runner.next = list2;
                list2 = list2.next;
            }
            runner = runner.next;
        }

        if (list1 == null) {
            runner.next = list2;
        } else {
            runner.next = list1;
        }

        return newHead.next;
    }
}
