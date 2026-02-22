import { TreeNode } from "./TreeNode.js";

class Solution {
  deleteNode(root, key) {
    //deleting node we are following that we will attach last right child of the node to be deleted
    //will be attach to the deletedNode right child
    if (root === null) return null;
    if (root.data === key) {
      return this.helper(root);
    }
    let curr = root;
    while (curr) {
      //first check if the value is on right or left
      if (curr.data > key) {
        //key is on left
        if (curr.left != null && curr.left.data === key) {
          curr.left = this.helper(curr.left);
          break;
        } else {
          curr = curr.left;
        }
      } else {
        //key is on right
        if (curr.right != null && curr.right.data === key) {
          curr.right = this.helper(curr.right);
          break;
        } else {
          curr = curr.right;
        }
      }
    }
    return root;
  }

  helper(root) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    //if that is the not the case then find the last right child of the left side
    let rightChild = root.right;
    let lastRightChild = this.findLastRight(root.left);
    lastRightChild.right = rightChild;
    //return the left of the deleted node now
    return root.left;
  }
  findLastRight(root) {
    if (root.right === null) return root;
    return this.findLastRight(root.right);
  }
}
function printInOrder(root, ans) {
  if (root === null) return;
  printInOrder(root.left);
  ans.push(root.data);
  printInOrder(root.right);
}
function main() {
  // Create a sample binary search tree.
  let root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(4);

  let sol = new Solution();
  // Delete node with key 3 from the tree.
  root = sol.deleteNode(root, 3);
  let ans = [];
  printInOrder(root, ans);
  console.log(ans);
}
main();
