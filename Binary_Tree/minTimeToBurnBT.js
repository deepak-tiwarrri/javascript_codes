/*
 * ================== PROBLEM STATEMENT ==================
 * 
 * Given a binary tree and a starting node, find the minimum time required 
 * to BURN the entire tree. The fire spreads to adjacent nodes (parent, left
 * child, right child) in each unit of time.
 *
 * EXAMPLE:
 *
 *              1
 *            /   \
 *           2     3
 *          / \   / \
 *         4   5 6   7
 *
 * Start burning from node 5:
 * Time 0: Node 5 is burning
 * Time 1: Nodes 2 and 4 catch fire (child of 5, and sibling)
 * Time 2: Nodes 1 and 3 catch fire (parent of 2, and sibling through parent)
 * Time 3: Nodes 6 and 7 catch fire (children of 3)
 *
 * Output: 3 minutes to burn entire tree
 *
 * ========================================================
 * 
 * APPROACH:
 * 1. Find the target node and create a parent map (BFS)
 * 2. Perform multi-source BFS starting from target node
 * 3. Fire spreads to left child, right child, and parent
 * 4. Track visited nodes to avoid revisiting
 * 5. Count levels in BFS as time taken
 */

class Solution {
  findTargetNode(root, start) {
    let parentMap = new Map();
    let nodeToBurn = null;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        if (node.data === start) nodeToBurn = node;
        if (node.left) {
          parentMap.set(node.left, node);
          queue.push(node.left);
        }
        if (node.right) {
          parentMap.set(node.right, node);
          queue.push(node.right);
        }
      }
    }
    return { nodeToBurn, parentMap };
  }
  timeToBurnTree(root, start) {
    //your code goes here
    let map = new Map();
    let { nodeToBurn, parentMap } = this.findTargetNode(root, start);
    let visitedMap = new Map();
    let timeToBurn = 0;
    let queue = [nodeToBurn];
    visitedMap.set(nodeToBurn, 1);
    while (queue.length > 0) {
      let size = queue.length;
      let flag = 0;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        if (node.left && !visitedMap.has(node.left)) {
          queue.push(node.left);
          visitedMap.set(node.left, 1);
          flag = 1;
        }
        if (node.right && !visitedMap.has(node.right)) {
          queue.push(node.right);
          visitedMap.set(node.right, 1);
          flag = 1;
        }
        if (parentMap[node] && !visitedMap.has(node)) {
          queue.push(node);
          visitedMap.set(node, 1);
          flag = 1;
        }
      }
      if (flag) timeToBurn++;
    }
    return timeToBurn;
  }
}
