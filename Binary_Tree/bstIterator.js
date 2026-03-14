class TreeNode{
   constructor(data,left=null,right=null){
      this.data =data;
      this.left = left;
      this.right = right;
   }
}
class Solutions {
   constructor(root) {
      this.stack =[];
      this.pushAll(root);
   }
   next(){
      let node = this.stack.pop();
      if(node.right!=null){
         this.pushAll(root.right);
      }
      return node.data;
   }
   hasNext(){
      return !this.stack.length>0;
   }
   pushAll(root){
      while(root!=null){
         this.stack.push(root);
         root = root.left;
      }
   }
}
let root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.right = new TreeNode(20);
root.right.left = new TreeNode(20);
let sol = new Solutions();
console.log(sol.next());
console.log(sol.next());
console.log(sol.next());
console.log(sol.hasNext());