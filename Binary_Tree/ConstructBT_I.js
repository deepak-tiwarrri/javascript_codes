// construct a binary tree from preorder and inorder
//preorder: [3,4,5,6,2,9] //inorder: [5,4,6,3,2,9]

import { preOrderIterative } from "./preorder_traversal.js";

class TreeNode {
   constructor(val=null,left=null,right=null) {
      this.data = val;
      this.left = left;
      this.right = right; 
   }
}
const buildTree=(preorder,inorder)=>{
   let inStart  = 0;
   let inEnd = inorder.length-1;
   let preStart = 0;
   let preEnd = preorder.length-1;
   let inorderMap = new Map();
   inorder.forEach((ele,index) => {
      inorderMap.set(ele,index);
   });
   const buildBT = (inStart,inEnd,preStart,preEnd)=>{
      // base case: both index ranges must be valid
      if (inStart > inEnd || preStart > preEnd) return null;
      let rootVal = preorder[preStart];
      let root = new TreeNode(rootVal);
      let inRoot = inorderMap.get(rootVal);
      let numsLeft = inRoot - inStart;
      // left subtree uses inorder range [inStart, inRoot-1]
      root.left = buildBT(inStart, inRoot - 1, preStart + 1, preStart + numsLeft);
      // right subtree uses inorder range [inRoot+1, inEnd]
      root.right = buildBT(inRoot + 1, inEnd, preStart + numsLeft + 1, preEnd);
      return root;
   }
   return buildBT(inStart,inEnd,preStart,preEnd);
}

let preorder = [3,4,5,6,2,9]; 
let inorder = [5,4,6,3,2,9];
let root = buildTree(preorder,inorder);
console.log("constructed root =", root);

// inorderTraversal is only for manual checking, leave it commented
// function inorderTraversal(root) {
//    if(!root) return null;
//    inorderTraversal(root.left);
//    console.log(root.data);
//    inorderTraversal(root.right);
// }  
// inorderTraversal(root);
const arr = preOrderIterative(root);
console.log("preorder of constructed tree =", arr);
