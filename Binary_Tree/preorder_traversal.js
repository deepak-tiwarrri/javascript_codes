class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function preorderTraversal(root, arr = []) {
  if (root === null) return arr;
  arr.push(root.data);
  preorderTraversal(root.left, arr);
  preorderTraversal(root.right, arr);
  return arr;
}

function preOrderIterative(root) {
  let arr = [];
  if (root === null) return ans;
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      let node = stack.pop();
      arr.push(node.data);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
  return arr;
}
const root = new TreeNode(10);
root.left = new TreeNode(15);
root.right = new TreeNode(20);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
// 10

//15   20

//5  3

// let arr = [];
// preorderTraversal(root, arr);
let result = preOrderIterative(root);
console.log(result);
// console.log(arr);
