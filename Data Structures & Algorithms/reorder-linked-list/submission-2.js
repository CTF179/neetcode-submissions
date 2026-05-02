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
        head = this.rec(head, head.next);
    }

    rec(root, current) {
        if (!current) {
            return root;
        }

        root = this.rec(root, current.next);
        if (root === null) {
            return null;
        }

        let temp = null;
        if (root === current || root.next === current) {
            current.next = null;
        } else {
            temp = root.next;
            root.next = current;
            current.next = temp;
        }

        return temp ;
    }
}
