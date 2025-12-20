class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

}

function levelOrderTraversal(root) {
  let result = [];
  if (root === null) return result;
  let queue = [];
  queue.push(root);
  while (queue.length>0 ) {
    
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(15);
root.right = new TreeNode(20);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
// 10

//15   20

//5  3

const result = levelOrderTraversal(root);
console.log(result);
