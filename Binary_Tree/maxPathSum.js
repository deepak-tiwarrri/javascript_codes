import { TreeNode } from "./postorder_traversal.js";
class Solution {
  findSumOfPaths(root, maxiSumOfPaths) {
    if (!root) return 0;
    let leftSum = this.findSumOfPaths(root.left, maxiSumOfPaths);
    let rightSum = this.findSumOfPaths(root.right, maxiSumOfPaths);

    maxiSumOfPaths[0] = Math.max(
      maxiSumOfPaths[0],
      leftSum + rightSum + root.data
    );

    return root.data + Math.max(leftSum, rightSum);
  }
  maxPathSum(root) {
    let maxiSumOfPaths = [Number.NEGATIVE_INFINITY];
    this.findSumOfPaths(root, maxiSumOfPaths);
    return maxiSumOfPaths[0];
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(5);

const res = new Solution();
console.log(res.maxPathSum(root));
