class Solution {
  calculateHours(hours, nums) {
    let totalHours = 0;
    for (let ele of nums) {
      totalHours += Math.ceil(ele / hours);
    }
    return totalHours;
  }
  minimumRateToEatBananas(nums, h) {
    let maxi = Math.max(...nums);
    let low = 1;
    let high = maxi;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (this.calculateHours(mid, nums) <= h) high = mid - 1;
      else low = mid + 1;
    }
    return low;
  }
}
