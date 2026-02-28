import { TreeRoot,TreeNode } from "./TreeNode.js";

function rightViewBinaryTree(root) {
   let map = new Map();
   let ans = [];
   let queue  = [{node:root,level:0}];
   console.log("----queue-----",queue);
   while(queue.length>0){
      const frontVal= queue.shift();
      const {node,level} = frontVal;
      console.log("frontVal:",frontVal.node);
      console.log("frontVal level",frontVal.level);
      if(!map.has(level)){
         map.set(level,node);
         console.log("---map---",map);
      }
      if(node.right){
         queue.push({node:node.right,level:level+1});
         console.log("----queue right----",queue);
      }
      if(node.left){
         queue.push({node:node.left,level:level+1});
         console.log("----queue left----",queue);
      }
   }
   for(let [key,value] of map){
      ans.push(value);
   }
   return ans;

}

const root = TreeRoot;
const result = rightViewBinaryTree(root);
console.log(result);

