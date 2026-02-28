import {TreeNode,TreeRoot} from "./TreeNode.js";
function topViewBT(root){
   if(!root) return nullptr;
   let ans = [];
   let map = new Map();
   const queue = [{node:root,vertical:0}];
   while(queue.length>0){
      //take the value out of the   queue
      //if it is in the map then don't replace it(don't add it)
      const {node,vertical} = queue.shift();
      if(!map.has(vertical)){
         map.set(vertical,node.data);
      }
      if(node.left) queue.push({node:node.left,vertical:vertical-1});
      if(node.right) queue.push({node:node.right,vertical:vertical+1});
   }
   for(const [key,value] of map){
      console.log(`key:${key} and value:${value}`);
      ans.push(value);
   }
   return ans;
}
const root  = TreeRoot();
const result = topViewBT(root);
console.log(result);