class Solution {
  totalHoursTaken(nums, perHourCapacity) {
    let sumOfHours = 0;
    for (let capacity of nums) {
      sumOfHours += Math.ceil(capacity / perHourCapacity);
    }
    return sumOfHours;
  }
  findMinMaxPiles(nums) {
    let mini = Number.POSITIVE_INFINITY;
    let maxi = Number.NEGATIVE_INFINITY;
    for (let ele of nums) {
      mini = Math.min(mini, ele);
      maxi = Math.max(maxi, ele);
    }
    return { mini, maxi };
  }
  /**
   * find the Minimum time take to eat banana
   * @param {Array} nums
   * @param {Number} h
   */
  minimumRateToEatBananas(nums, h) {
    let { mini, maxi } = this.findMinMaxPiles(nums);
    let low = mini;
    let high = maxi;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (this.totalHoursTaken(nums, mid) <= h) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
}
const n = 4;
const nums = [7, 15, 6, 3];
const h = 8;
const p = new Solution();
const result = p.minimumRateToEatBananas(nums, h);
console.log(result);
//output 5

const n2 = 5;
const nums2 = [25, 12, 8, 14, 19];
const h2 = 5;
const result2 = p.minimumRateToEatBananas(nums2, h2);
console.log(result2);
//output 25

// TEST CASE: where low = mini will FAIL
// If we have a large pile but need to eat very slowly to stay within hours
const nums3 = [1000000000]; // Only 1 banana pile (very large)
const h3 = 2;              // But 2 hours available
const result3 = p.minimumRateToEatBananas(nums3, h3);
console.log("Test case 3 (nums=[1000000000], h=2):", result3);
// Expected: 500000000 (eat at 500M bananas/hour to finish in 2 hours)
// 
// With low = mini (1000000000):
//   - Binary search starts at 1000000000, misses checking speeds 1 to 999999999
//   - Answer 500000000 is SKIPPED, returns wrong result
//
// With low = 1:
//   - Binary search checks all speeds from 1 to 1000000000
//   - Correctly finds minimum speed 500000000
console.log("---");

// Another test case
const nums4 = [312884132];  // Large pile
const h4 = 968709470;       // Plenty of hours
const result4 = p.minimumRateToEatBananas(nums4, h4);
console.log("Test case 4 (nums=[312884132], h=968709470):", result4);
// Expected: 1 (can eat at 1 banana/hour and still finish in time)
//
// With low = mini (312884132):
//   - Starts binary search at 312884132
//   - NEVER checks speed 1, returns 312884132 instead of 1 (WRONG!)
//
// With low = 1:
//   - Correctly finds minimum speed 1

