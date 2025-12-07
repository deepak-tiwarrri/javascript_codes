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
    let low = mini;   // ❌ WRONG: Should be 1
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

const p = new Solution();

console.log("=== TEST CASES: low = mini (WRONG) ===\n");

// Test 1: Large pile, limited hours
const nums1 = [1000000000];
const h1 = 2;
const result1 = p.minimumRateToEatBananas(nums1, h1);
console.log("Test 1: nums=[1000000000], h=2");
console.log("Expected: 500000000");
console.log("Got (low=mini):", result1);
console.log("❌ WRONG! Missed checking speeds 1 to 999999999\n");

// Test 2: Another case where speed can be much lower than pile size
const nums2 = [312884132];
const h2 = 968709470;
const result2 = p.minimumRateToEatBananas(nums2, h2);
console.log("Test 2: nums=[312884132], h=968709470");
console.log("Expected: 1");
console.log("Got (low=mini):", result2);
console.log("❌ WRONG! Should be 1 (plenty of hours), not the pile size!\n");

// Test 3: Multiple piles with plenty of time
const nums3 = [1, 1, 1, 1];
const h3 = 4;
const result3 = p.minimumRateToEatBananas(nums3, h3);
console.log("Test 3: nums=[1, 1, 1, 1], h=4");
console.log("Expected: 1");
console.log("Got (low=mini):", result3);
console.log("✓ Correct (lucky case where mini equals answer)\n");
