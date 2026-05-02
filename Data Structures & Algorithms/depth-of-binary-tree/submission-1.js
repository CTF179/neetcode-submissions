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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) {
            return 0;
        }
        const stack = [[1, root]];
        let max = -Infinity;

        while (stack.length > 0) {
            const [depth, node] = stack.pop();

            max = Math.max(max, depth);

            if (node.left) {
                stack.push([depth + 1, node.left]);
            }
            if (node.right) {
                stack.push([depth + 1, node.right]);
            }

        }
        return max;

    }
}
