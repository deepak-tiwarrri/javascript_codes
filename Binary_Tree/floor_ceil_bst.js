function findFloorBST(root,key,ans) {
   //find floor is nothing but smaller value which should be high as possible
   let floor= -1;
   while(root){
      if(root.data===key){
         floor = root.data;
         break;
      }else if(root.data>key){
         root = root.left;
      }else{
         floor = root.data;
         root = root.right;
      }
   }
   ans.push(floor);
}
function findCeilBST(root,key,ans) {
   let ceil = -1;
   while (root) {
      if(root.data===key){
         ceil = root.data;
         break;
      }else if(root.data>key){
         ceil = root.data;
         root = root.left;
      }else{
         root = root.right;
      }
   }
   ans.push(ceil);
}
function floorCeilofBST(root,key) {
   let ans = [];
   findFloorBST(root,key,ans);
   findCeilBST(root,key,ans);
   return ans;
}

