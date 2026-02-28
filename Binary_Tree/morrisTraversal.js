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
  getInorder(root) {
    //your code goes here
    let ans = [];
    if (!root) return ans;
    let curr = root;
    while (curr) {
      if (curr.left === null) {
        ans.push(curr.data);
        curr = curr.right;
      } else {
        //now make a pointer and connect the pointer first
        let prevNode = curr.left;
        while (prevNode.right != null && prevNode.right != curr) {
          prevNode = prevNode.right;
        }
        if (prevNode.right === null) {
          //point the pointer now
          prevNode.right = curr;
          //after pointing the pointer u have to do the same for other left childrent too
          curr = curr.left;
        } else {
          //remove the pointer add that node
          prevNode.right = null;
          ans.push(curr.data);
          curr = curr.right;
        }
      }
    }
    return ans;
  }
}
