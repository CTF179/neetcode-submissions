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
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];
        while (stack.length > 0) {
            const [currP, currQ] = stack.pop();

            if (!currP && !currQ) continue; //  both null is fine.
            if (!currP || !currQ || currP.val !== currQ.val) { return false; }

            stack.push([currP.left, currQ.left]);
            stack.push([currP.right, currQ.right]);
        }
        return true;
    }
}
