function upperBound(nums, x) {
  //find the smallest index such that arr[index]>x;
  let low = 0,
    high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

// Example Usage:
let nums = [2, 5, 9, 10, 11, 15, 22];

// 1. Upper bound of 10: The first element > 10 is 11 at index 4.
let result1 = upperBound(nums, 10);
console.log(
  `Upper bound of 10 is at index: ${result1} (Value: ${nums[result1]})`
); // Output: 4

// 2. Upper bound of 6: The first element > 6 is 9 at index 2.
let result2 = upperBound(nums, 6);
console.log(
  `Upper bound of 6 is at index: ${result2} (Value: ${nums[result2]})`
); // Output: 2

// 3. Upper bound of 25: All elements <= 25, so it returns nums.length (7).
let result3 = upperBound(nums, 25);
console.log(`Upper bound of 25 is at index: ${result3}`); // Output: 7
