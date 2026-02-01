import {TreeNode, TreeRoot} from "./TreeNode.js";
function zigZagTraversal(root){
   let leftToRight = 0;
   let ans = [];
   if(root===null)return ans;
   let queue = [];
   queue.push(root);
   while(queue.length>0){
      let size  = queue.length;
      let levelResult = [];
      for(let i=0;i<size;i++){
         let node = queue.shift();
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right);
         levelResult.push(node.data);
      }
      if(leftToRight===0){
         ans.push(levelResult);
      }else{
         ans.push(levelResult.reverse());
         console.log("else part log",ans);
      }
      leftToRight = 1-leftToRight;
   }
   return ans;
}
const root = TreeRoot();
const resultant  = zigZagTraversal(root);
console.log(resultant);