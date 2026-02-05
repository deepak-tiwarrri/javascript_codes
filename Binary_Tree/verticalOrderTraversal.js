// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.data = val;
    this.left = left;
    this.right = right;
  }
}

function verticalTraversal(root) {
  let map = new Map();
  const queue = [{ node: root, x: 0, y: 0 }];
  while (queue.length > 0) {
    const { node, x, y } = queue.shift();
    if (!map.has(x)) {
      map.set(x, new Map());
    }
    //if x exists but y is not present in that case make y
    if (!map.get(x).has(y)) {
      map.get(x).set(y, []);
    }
    //if both are present (x,y)-> node.data push
    map.get(x).get(y).push(node.data);
    if (node.left) queue.push({ node: node.left, x: x - 1, y: y + 1 });
    if (node.right) queue.push({ node: node.right, x: x + 1, y: y + 1 });
  }
  let result = [];
  //now we have to push node.data in the [[]]
  //first make a key of x
  console.log("keys of map: ", map.keys());
  const sortedXKeys = Array.from(map.keys()).sort((a, b) => a - b);
  for (const x of sortedXKeys) {
    const yMap = map.get(x);
    console.log("keysof ymap: ", Array.from(yMap.keys()));
    const sortedYKeys = Array.from(yMap.keys()).sort((a, b) => a - b);
    const column = [];
    for (const y of sortedYKeys) {
      const node = map.get(y);
      column.push(...node);
    }
    result.push(column);
  }
  return result;
}

// Main method to test the verticalTraversal function
// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Creating an instance of Solution

// Getting the vertical order traversal
const result = verticalTraversal(root);

// Printing the result
console.log("Vertical Order Traversal:", result);
