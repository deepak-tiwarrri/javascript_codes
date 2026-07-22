//   Definition for a binary tree node.
  class TreeNode {
       constructor(val = 0, left = null, right = null){
           this.data = val;
           this.left = null;
           this.right = null;
       }
  }

class Solution {
    constructor(){
        this.prev = null;
        this.first = null;
        this.middle = null;
        this.last = null;
    }
    inorder(root){
        if(!root) return;
        this.inorder(root.left);
        if(this.prev!=null && (root.data < this.prev.data)){
            if(this.first!=null){
                this.first = this.prev;
                this.middle = root;
            }else this.last = root;
        }
        this.prev = root;
        this.inorder(root.right);
    }    
    recoverTree(root) {
        //your code goes here
        this.first = this.middle = this.last = null;
        this.prev = new TreeNode(Number.NEGATIVE_INFINITY);
        this.inorder(root);
       
        // Swap values, not references
        if (this.first && this.last) {
            [this.first.data, this.last.data] = [this.last.data, this.first.data];
        } else if (this.first && this.middle) {
            [this.first.data, this.middle.data] = [this.middle.data, this.first.data];
        }
    }
}
// for testing purposes
function insertLevelOrder(arr, i) {
    if (i >= arr.length || arr[i] === null) return null;
    const root = new TreeNode(arr[i]);
    root.left = insertLevelOrder(arr, 2 * i + 1);
    root.right = insertLevelOrder(arr, 2 * i + 2);
    return root;
}

// Helper function to print inorder traversal of the tree
function inorderPrint(root) {
    if (root) {
        inorderPrint(root.left);
        process.stdout.write(root.data + ' ');
        inorderPrint(root.right);
    }
}

// Main function to demonstrate the solution
const main = () => {
    // Example input tree: [1, 3, null, null, 2]
    const nodes = [1, 3, null, null, 2];
    const root = insertLevelOrder(nodes, 0);

    // Solution instance
    const sol = new Solution();
    sol.recoverTree(root);

    // Print corrected tree
    inorderPrint(root);
};

main();