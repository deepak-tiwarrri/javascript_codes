class Solution {
  findThreshold(nums, divisor) {
    let sum = 0;
    for (let ele of nums) {
      sum += Math.ceil(ele / divisor);
    }
    return sum;
  }
  smallestDivisor(nums, threshold) {
    let low = 1,
      high = Math.max(...nums);
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (this.findThreshold(nums, mid) <= threshold) {
        high = mid - 1;
      } else low = mid + 1;
    }
    return low;
  }
}
const sol = new Solution();
let nums = [1, 2, 5, 9],
  threshold = 6;
const result = sol.smallestDivisor(nums, threshold);
console.log(result);
