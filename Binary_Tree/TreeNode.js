export class TreeNode {
   constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
   }
}

export function TreeRoot() {
   /*
               1
            /    \
         2        3
       /   \     / \
      4     5  6   
                 \
                  7
                    \
                     8
      */
   let root = new TreeNode(1);
   root.left = new TreeNode(2);
   root.right = new TreeNode(3);
   root.left.left = new TreeNode(4);
   root.left.right = new TreeNode(5);
   root.right.left = new TreeNode(6);
   root.right.left.right = new TreeNode(7);
   root.right.left.right.right = new TreeNode(8);
   return root;
}

export function TreeBST(){
   let root = new TreeNode(5);
   root.left  = new TreeNode(3);
   root.right = new TreeNode(6);
   root.left.left = new TreeNode(2);
   root.left.right = new TreeNode(4);
   root.right.right = new TreeNode(7);
   root.right.right.right = new TreeNode(10);
   root.right.right.right.left = new TreeNode(11);
   root.right.right.right.right = new TreeNode(12);
   return root;
}