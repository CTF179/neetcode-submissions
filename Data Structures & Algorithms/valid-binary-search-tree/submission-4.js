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
    isValid(root, lower, upper) {
        if (!root) {
            return true;
        }
        
        if (!(root.val > lower && root.val < upper)) {
            return false;
        }

        return (
            this.isValid(root.left, lower, root.val) &&
            this.isValid(root.right, root.val, upper)
        )

    }

    isValidBST(root) {
        return this.isValid(root, -Infinity, Infinity);
    }
}
