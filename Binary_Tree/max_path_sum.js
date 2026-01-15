import { TreeRoot } from "./TreeNode.js";

function maxPathSum(root,maxiSumObj) {
   if(!root) return 0;

   let leftSum = maxPathSum(root.left,maxiSumObj);
   let rightSum = maxPathSum(root.right,maxiSumObj);

   maxiSumObj.maxiSum = Math.max(maxiSumObj.maxiSum,leftSum+rightSum);
   return root.data + Math.max(leftSum,rightSum);
}
let root = TreeRoot();
let maxiSumObj = {maxiSum:Number.NEGATIVE_INFINITY};
let result = maxPathSum(root,maxiSumObj);
console.log(result);