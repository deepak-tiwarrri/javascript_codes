/**
 * Definition for a binary tree node.
 * class TreeNode {
 *      constructor(val = 0, left = null, right = null){
 *          this.data = val;
 *          this.left = null;
 *          this.right = null;
 *      }
 * }
 **/

/*
 * ================== PROBLEM STATEMENT ==================
 * 
 * Count the total number of nodes in a COMPLETE BINARY TREE.
 * 
 * A Complete Binary Tree is a binary tree in which:
 * - All levels are completely filled except possibly the last level
 * - The last level is filled from left to right
 * - No gaps between nodes
 *
 * EXAMPLE:
 *
 *              1
 *            /   \
 *           2     3
 *          / \   /
 *         4   5 6
 *
 * Output: 6 (Total nodes)
 *
 * ========================================================
 * 
 * APPROACH: Optimal Solution (O(log n)^2 time complexity)
 * - Calculate left height (always going left)
 * - Calculate right height (always going right)
 * - If left height == right height, it's a perfect binary tree
 *   Count = 2^height - 1
 * - Otherwise, recursively count left and right subtrees
 */

class Solution {
  leftHeight(root) {
    let height = 0;
    while (root) {
      height++;
      root = root.left;
    }
    return height;
  }
  rightHeight(root) {
    let height = 0;
    while (root) {
      height++;
      root = root.right;
    }
    return height;
  }

  countNodes(root) {
    //your code goes here
    if (root === null) return 0;
    let lh = this.leftHeight(root);
    let rh = this.rightHeight(root);
    if (lh === rh) return Math.pow(2, lh) - 1;
    return 1 + this.countNodes(root.left) + this.countNodes(root.right);
  }
}
