import { TreeNode } from "./postorder_traversal.js";

function findHeight(root, diameterObj) {
  if (!root) return 0;
  let lh = findHeight(root.left, diameterObj);
  let rh = findHeight(root.right, diameterObj);

  diameterObj.diameter = Math.max(diameterObj.diameter, lh + rh);
  return 1 + Math.max(lh, rh);
}
function diameterOfBT(root) {
  let diameterObj = { diameter: 0 };
  if (!root) return 0;
  findHeight(root, diameterObj);
  return diameterObj.diameter;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(5);

const result = diameterOfBT(root);
console.log(result);
