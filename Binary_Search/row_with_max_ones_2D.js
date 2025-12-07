//your task is to find maximum number of ones present in the matrix
//  [
//    [1, 1, 1],
//    [0, 0, 1],
//    [0, 0, 0],
//  ];
//output is : 3
function lowerBound(nums, m, x) {
  let low = 0,
    high = m - 1;
  let ans = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
/**
 *
 * @param {[[Number]]} matrix
 * @returns {Number} index
 */

function rowWithMaxOnes2D(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let index = -1;
  let maxCount = 0;
  //brute force approach
  // for (let i = 0; i < matrix.length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < m; j++) {
  //     sum += matrix[i][j];
  //   }
  //   if (sum > maxSum) {
  //     maxSum = sum;
  //     index = i;
  //   }
  for (let i = 0; i < matrix.length; i++) {
    let cntOnes = m - lowerBound(matrix[i], m, 1);
    if (cntOnes > maxCount) {
      maxCount = cntOnes;
      index = i;
    }
  }
  // }
  return index;
}
// Test Cases
console.log("========== TEST CASES ==========\n");

// Test Case 1: Simple matrix with max ones in first row
const matrix1 = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 0],
];
const result1 = rowWithMaxOnes2D(matrix1);
console.log("Test Case 1:");
console.log("Matrix:", matrix1);
console.log("Expected Output: 0 (Row 0 has 3 ones)");
console.log("Actual Output:", result1);
console.log("Status:", result1 === 0 ? "✓ PASS" : "✗ FAIL\n");

// Test Case 2: All zeros matrix
const matrix2 = [
  [0, 0],
  [0, 0],
];
const result2 = rowWithMaxOnes2D(matrix2);
console.log("\nTest Case 2:");
console.log("Matrix:", matrix2);
console.log("Expected Output: -1 (No ones found)");
console.log("Actual Output:", result2);
console.log("Status:", result2 === -1 ? "✓ PASS" : "✗ FAIL");

// Test Case 3: Max ones in last row
const matrix3 = [
  [0, 0, 1],
  [0, 1, 1],
  [0, 1, 1],
];
const result3 = rowWithMaxOnes2D(matrix3);
console.log("\nTest Case 3:");
console.log("Matrix:", matrix3);
console.log(
  "Expected Output: 1 or 2 (Both rows 1 and 2 have 2 ones, returns first occurrence)"
);
console.log("Actual Output:", result3);
console.log("Status:", result3 === 1 ? "✓ PASS" : "✗ FAIL");

// Test Case 4: All ones matrix
const matrix4 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const result4 = rowWithMaxOnes2D(matrix4);
console.log("\nTest Case 4:");
console.log("Matrix:", matrix4);
console.log("Expected Output: 0 (All rows have same count, returns first)");
console.log("Actual Output:", result4);
console.log("Status:", result4 === 0 ? "✓ PASS" : "✗ FAIL");

// Test Case 5: Single row
const matrix5 = [[1, 1, 0, 1]];
const result5 = rowWithMaxOnes2D(matrix5);
console.log("\nTest Case 5:");
console.log("Matrix:", matrix5);
console.log("Expected Output: 0 (Only one row with 3 ones)");
console.log("Actual Output:", result5);
console.log("Status:", result5 === 0 ? "✓ PASS" : "✗ FAIL");

// Test Case 6: Single column
const matrix6 = [[1], [0], [1]];
const result6 = rowWithMaxOnes2D(matrix6);
console.log("\nTest Case 6:");
console.log("Matrix:", matrix6);
console.log("Expected Output: 0 (Rows 0 and 2 both have 1 one, returns first)");
console.log("Actual Output:", result6);
console.log("Status:", result6 === 0 ? "✓ PASS" : "✗ FAIL");

// Test Case 7: Max ones in middle row
const matrix7 = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];
const result7 = rowWithMaxOnes2D(matrix7);
console.log("\nTest Case 7:");
console.log("Matrix:", matrix7);
console.log("Expected Output: 1 (Row 1 has 3 ones)");
console.log("Actual Output:", result7);
console.log("Status:", result7 === 1 ? "✓ PASS" : "✗ FAIL");

// Test Case 8: Large matrix with max at end
const matrix8 = [
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 1, 1, 1],
];
const result8 = rowWithMaxOnes2D(matrix8);
console.log("\nTest Case 8:");
console.log("Matrix:", matrix8);
console.log("Expected Output: 2 (Row 2 has 4 ones)");
console.log("Actual Output:", result8);
console.log("Status:", result8 === 2 ? "✓ PASS" : "✗ FAIL");
