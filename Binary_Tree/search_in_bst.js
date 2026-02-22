function searchInBst(root,key) {
   //first check if the root is null or not
   if(root===null) return -1;
   while(root){
      if(root.data===key) return root;
      else if(root.data>key) root = root.left;
      else root = root.right;
   }
   return root;
}