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
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) {
            return null;
        }
        const stack = [root];
        while (stack.length > 0) {
            const current = stack.pop();

            const right = current.right;
            const left = current.left;
            current.left = right;
            current.right = left;

            if (current.left) {
                stack.push(current.left);
            }
            if (current.right) {
                stack.push(current.right);
            }
        }

        return root;
    }
}
