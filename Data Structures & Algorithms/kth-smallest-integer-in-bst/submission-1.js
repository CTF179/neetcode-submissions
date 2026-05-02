/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * 
 * --- lower bound ? 
 * l = 0
 * r = num.length - 1
 * while (l <= r) 
 *      m = floor( l + r / 2)
 *      if (num[m] >= t) 
 *          res = m;
 *          r = m
 *      else 
 *          l = m + 1;
 * 
 * --- quick select ? 
 * partition(nums, left, right): 
 *      let pivot = nums[right], pivotLoc = left;
 * 
 *      for (let i = left; i < right; i++){
 *          if (nums[i] < pivot) {
 *              let temp = nums[i];
 *              nums[i] = nums[pivotLoc]
 *              nums[pivotLoc] = temp;
 *              pivotLoc++;
 *          }
 *      }
 * 
 *      let temp = nums[right];
 *      nums[right] = nums[pivotLoc];
 *      nums[pivotLoc] = temp;
 * 
 *      return pivotLoc;
 * 
 * quickselect(nums, left, right, k):
 *      pivot = partition(nums, left, right);
 *      if (k == pivot) {
 *          return nums[k];
 *      } else if (k > pivot) {
 *          return quickselect(nums, left, pivot - 1);
 *      } else if (k < pivot){
 *          return quickselect(nums, pivot + 1, right);
 *      }
 *      
 * 
 */

class Solution {
    dfs(root, inorder) {
        if (!root) { return null; }
        this.dfs(root.left, inorder);
        inorder.push(root.val)
        this.dfs(root.right, inorder);
    }
    kthSmallest(root, k) {
        // In order traversal
        const nodes = [];
        this.dfs(root, nodes);
        return nodes[k-1];
    }
}
