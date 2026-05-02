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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const k = lists.length;
        let DummyHead = new ListNode();
        const ans = DummyHead;
        while (true) {
            // scan the heads
            let heads = [];
            for (let i = 0; i <= k; i++) {
                if (!lists[i]) continue;
                heads.push({ index: i, val: lists[i].val })
            }

            if (heads.length == 0) { break; }

            let min = { val: Infinity };
            for (const entry of heads) {
                min = min.val < entry.val ? min : entry;
            }

            // move that head
            const next = lists[min.index].next;
            DummyHead.next = lists[min.index];
            lists[min.index] = next;
            DummyHead = DummyHead.next;
        }
        return ans.next;

    }
}
