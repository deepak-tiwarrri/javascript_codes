import {TreeRoot,TreeBST,TreeNode} from "./TreeNode.js";


function findPredecessorBST(root,key,ans) {
   let predecessor  = -1;
   while(root){
      if(root.data<key){
         predecessor = root.data;
         root = root.right;
      }else{
         root = root.left;
      }
   }
   ans.push(predecessor); 
}
function findSuccessorBST(root,key,ans) {
   let successor = -1;
   while(root){
      if(root.data<=key){
         root = root.right;
      }else{
         successor = root.data;
         root = root.left;
      }
   }
   ans.push(successor);
}
function succPreBST(root,key){
   let ans = [];
   findPredecessorBST(root,key,ans);
   findSuccessorBST(root,key,ans);
   return ans;
}
function main(){
   let root  = TreeBST();
   let res = succPreBST(root,10);
   console.log(res);
}

main();