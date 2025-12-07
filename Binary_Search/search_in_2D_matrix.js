class Solution {
  binarySearch(nums, m, target) {
    let low = 0,
      high = m - 1;
    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (nums[mid] === target) return true;
      else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return false;
  }
  searchMatrix(mat, target) {
    let n = mat.length;
    let m = mat[0].length;
    for (let i = 0; i < n; i++) {
      if (mat[i][0] <= target && target <= mat[i][m - 1]) {
        return this.binarySearch(mat[i], m, target);
      }
    }
    return false;
  }
}

// Test Cases
const solution = new Solution();

console.log("=== Test Case 1: Target found in first row ===");
const mat1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target1 = 3;
console.log(`Matrix: ${JSON.stringify(mat1)}`);
console.log(`Target: ${target1}`);
console.log(`Output: ${solution.searchMatrix(mat1, target1)}`);
console.log(`Expected: 1 (index in row 0)\n`);

console.log("=== Test Case 2: Target found in middle row ===");
const mat2 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target2 = 16;
console.log(`Matrix: ${JSON.stringify(mat2)}`);
console.log(`Target: ${target2}`);
console.log(`Output: ${solution.searchMatrix(mat2, target2)}`);
console.log(`Expected: 2 (index in row 1)\n`);

console.log("=== Test Case 3: Target found in last row ===");
const mat3 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target3 = 60;
console.log(`Matrix: ${JSON.stringify(mat3)}`);
console.log(`Target: ${target3}`);
console.log(`Output: ${solution.searchMatrix(mat3, target3)}`);
console.log(`Expected: 3 (index in row 2)\n`);

console.log("=== Test Case 4: Target not found ===");
const mat4 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target4 = 13;
console.log(`Matrix: ${JSON.stringify(mat4)}`);
console.log(`Target: ${target4}`);
console.log(`Output: ${solution.searchMatrix(mat4, target4)}`);
console.log(`Expected: -1\n`);

console.log("=== Test Case 5: Single element matrix (found) ===");
const mat5 = [[5]];
const target5 = 5;
console.log(`Matrix: ${JSON.stringify(mat5)}`);
console.log(`Target: ${target5}`);
console.log(`Output: ${solution.searchMatrix(mat5, target5)}`);
console.log(`Expected: 0\n`);

console.log("=== Test Case 6: Single element matrix (not found) ===");
const mat6 = [[5]];
const target6 = 3;
console.log(`Matrix: ${JSON.stringify(mat6)}`);
console.log(`Target: ${target6}`);
console.log(`Output: ${solution.searchMatrix(mat6, target6)}`);
console.log(`Expected: -1\n`);

console.log("=== Test Case 7: Single row matrix ===");
const mat7 = [[1, 3, 5, 7, 9]];
const target7 = 5;
console.log(`Matrix: ${JSON.stringify(mat7)}`);
console.log(`Target: ${target7}`);
console.log(`Output: ${solution.searchMatrix(mat7, target7)}`);
console.log(`Expected: 2\n`);

console.log("=== Test Case 8: Target at first element ===");
const mat8 = [
  [1, 3, 5],
  [10, 11, 16],
  [23, 30, 34],
];
const target8 = 1;
console.log(`Matrix: ${JSON.stringify(mat8)}`);
console.log(`Target: ${target8}`);
console.log(`Output: ${solution.searchMatrix(mat8, target8)}`);
console.log(`Expected: 0\n`);

console.log("=== Test Case 9: Target at last element ===");
const mat9 = [
  [1, 3, 5],
  [10, 11, 16],
  [23, 30, 34],
];
const target9 = 34;
console.log(`Matrix: ${JSON.stringify(mat9)}`);
console.log(`Target: ${target9}`);
console.log(`Output: ${solution.searchMatrix(mat9, target9)}`);
console.log(`Expected: 2\n`);

console.log("=== Test Case 10: Large matrix ===");
const mat10 = [
  [1, 2, 4, 8],
  [10, 20, 30, 40],
  [50, 60, 70, 80],
  [100, 200, 300, 400],
];
const target10 = 70;
console.log(`Matrix: ${JSON.stringify(mat10)}`);
console.log(`Target: ${target10}`);
console.log(`Output: ${solution.searchMatrix(mat10, target10)}`);
console.log(`Expected: 2 (index in row 2)\n`);
