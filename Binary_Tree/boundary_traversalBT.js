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

class Solution {
  isLeafNode(root) {
    return root.left === null && root.right === null;
  }
  leftBoundary(arr, root) {
    let currNode = root;
    while (currNode) {
      if (!this.isLeafNode(currNode)) arr.push(currNode.data);
      if (currNode.left) currNode = currNode.left;
      else currNode = currNode.right;
    }
  }
  leafBoundary(arr, root) {
    if (!root) return null;
    //inorder traversal
    if (root.left) this.leafBoundary(arr, root.left);
    if (this.isLeafNode(root)) arr.push(root.data);
    if (root.right) this.leafBoundary(arr, root.right);
  }
  rightBoundary(arr, root) {
    let currNode = root;
    let temp = [];
    while (currNode) {
      if (!this.isLeafNode(currNode)) temp.push(currNode.data);
      if (currNode.right) currNode = currNode.right;
      else currNode = currNode.left;
    }
    // for(let i=temp.length-1;i>=0;i--){
    //     arr.push(temp[i]);
    // }
    arr.push(...temp.reverse());

  }
  boundary(root) {
    //your code goes here
    let arr = [];
    if (!root) return arr;
    if (!this.isLeafNode(root)) arr.push(root.data);
    this.leftBoundary(arr, root.left);
    this.leafBoundary(arr, root);
    this.rightBoundary(arr, root.right);
    return arr;
  }
}
