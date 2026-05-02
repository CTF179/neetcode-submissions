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
        if (!p && !q) { return true; }
        if (!p && q || p && !q) { return false; }

        const stack = [[p, q]];
        while (stack.length > 0) {
            const [currP, currQ] = stack.pop();

            if (currP.val !== currQ.val) { return false; }
            // If a tree p is missing a left/right but q has one; Vice versa
            if ((currP.left && !currQ.left) || (!currP.left && currQ.left)) { return false; }
            if ((currP.right && !currQ.right) || (!currP.right && currQ.right)) { return false; }

            if (currP.left && currQ.left) {
                stack.push([currP.left, currQ.left]);
            }

            if (currP.right && currQ.right) {
                stack.push([currP.right, currQ.right]);
            }
        }
        return true;
    }
}
