class Solution {
  findNoOfBouquetRequired(nums, k, divisor) {
    let sum = 0;
    let count = 0;
    let m = 0;
    for (let i = 0; i < nums.length; i++) {
      let noOfFlower = Math.ceil(nums[i] / divisor);
      if (noOfFlower === 1) {
        count++;
        if (count === k) m++;
      } else if (noOfFlower > 1) {
        count = 0;
      }
    }
    return m;
  }
  roseGarden(n, nums, k, m) {
    if (m * k > n) return -1;
    let mini = Math.min(...nums);
    let maxi = Math.max(...nums);
    // for (let i = mini; i <= maxi; i++) {
    //   if (this.findNoOfBouquetRequired(nums, k, i) === m) {
    //     return i;
    //   }
    // }
    //u have to use binary search now
    let low = mini,
      high = maxi;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (this.findNoOfBouquetRequired(nums, k, mid) >= m) high = mid - 1;
      else low = mid + 1;
    }
    return low;
  }
}
// let n = 8,
//   nums = [7, 7, 7, 7, 13, 11, 12, 7],
//   m = 2,
//   k = 3;
let n = 5,
  nums = [1, 10, 3, 10, 2],
  m = 3,
  k = 2;
const sol = new Solution();
let result = sol.roseGarden(n, nums, k, m);
console.log(result);
