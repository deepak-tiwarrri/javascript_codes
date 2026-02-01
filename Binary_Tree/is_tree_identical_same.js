import { TreeRoot } from "./TreeNode";

function isTreeIdenticalSame(p,q) {
   if(p === null || q ===null){
      return p===q;
   }
   (p.data===q.data) && isTreeIdenticalSame(p.left,q.left) && isTreeIdenticalSame(p.right,q.right);
}

let p = TreeRoot();
let q = TreeRoot();
let result = isTreeIdenticalSame(p,q);
console.log(result);