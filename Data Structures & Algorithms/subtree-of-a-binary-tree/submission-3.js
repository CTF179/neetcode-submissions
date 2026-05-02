/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    isSame(p, q) {
        const stack = [[p, q]];
        while (stack.length > 0) {
            const [cp, cq] = stack.pop();

            if (!cp && !cq) continue;
            if (!cp || !cq || cp.val !== cq.val) { return false };
            
            stack.push([cp.left, cq.left]);
            stack.push([cp.right, cq.right]);
        }
        return true;
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) { return true; }
        if (!root) { return false; }

        if (this.isSame(root, subRoot)) {
            return true;
        }

        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        )
    }
}
