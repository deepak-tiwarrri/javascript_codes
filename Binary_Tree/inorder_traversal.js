class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
function inorder_traversal(root, arr = []) {
  if (root === null) return arr;
  inorder_traversal(root.left, arr);
  arr.push(root.data);
  inorder_traversal(root.right, arr);
  return arr;
}

function inorderTraversalIterative(root) {
  const ans = [];
  if (root === null) return ans;
  let node = root;
  const stack = [];
  while (true) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      if (!stack.length) break;
      node = stack.pop();
      ans.push(node.data);
      node = node.right;
    }
  }
  return ans;
}

const root = new TreeNode(10);
root.left = new TreeNode(15);
root.right = new TreeNode(20);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
// 10

//15   20

//5  3

let arr = [];
// inorder_traversal(root, arr);
const result = inorderTraversalIterative(root);
// console.log(arr);
console.log(result);
