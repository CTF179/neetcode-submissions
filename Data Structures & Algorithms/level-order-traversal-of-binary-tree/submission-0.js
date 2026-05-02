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
     * @return {number[][]}
     */
    levelOrder(root) {
        const ans = [];
        const queue = [root]
        while (queue.length > 0) {
            const level = [];
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();

                if (!node) continue;
                level.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            if(level.length > 0) ans.push(level);
        }
        return ans;
    }
}
