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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!inorder.length || !preorder.length) {
            return null;
        }

        let root = new TreeNode(preorder[0]);
        let rootIndex = inorder.indexOf(preorder[0]);

        root.left = this.buildTree(
            preorder.slice(1, rootIndex + 1),
            inorder.slice(0, rootIndex)
        );
        root.right = this.buildTree(
            preorder.slice(rootIndex + 1),
            inorder.slice(rootIndex + 1)
        );

        return root;

    }
}
