function searchInBST(root, val) {
  //check if the root is not null first
  if (root === null) return null;
  while (root != null) {
    if (root.data === val) return root;
    else if (root.data > val) root = root.left;
    else root = root.right;
  }
  return root;
}
