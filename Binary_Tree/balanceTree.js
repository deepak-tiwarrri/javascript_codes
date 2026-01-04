import { TreeNode } from "./postorder_traversal.js";

function findHeight(root) {
  if (!root) return 0;
  let lh = findHeight(root.left);
  //if any of the left height or right height is -1 return -1;
  if (lh === -1) return -1;
  let rh = findHeight(root.right);
  if (rh === -1) return -1;
  if (Math.abs(lh - rh) > 1) return -1;
  return 1 + Math.max();
}
function isBalanceTree(root) {
  return findHeight(root) !== -1;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
const result = isBalanceTree(root);
console.log(result);
