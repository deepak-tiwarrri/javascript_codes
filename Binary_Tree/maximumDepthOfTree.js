import { TreeNode } from "./postorder_traversal.js";
function maximumDepthBinaryTree(root) {
  if (root === null) return 0;
  let lh = maximumDepthBinaryTree(root.left);
  let rh = maximumDepthBinaryTree(root.right);
  return 1 + Math.max(lh, rh);
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.left.right = new TreeNode(7);
root.right.left.right.right = new TreeNode(8);

let result = maximumDepthBinaryTree(root);
console.log(result);
