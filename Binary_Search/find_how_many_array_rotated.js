class Solution {
  findKRotation(nums) {
    let low = 0;
    let high = nums.length - 1;
    let mini = Number.POSITIVE_INFINITY;
    let index = Number.POSITIVE_INFINITY;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (nums[low] <= nums[high]) {
        //take low as mini
        if (nums[low] < mini) {
          index = low;
          mini = nums[low];
        }
        break;
      } else if (nums[low] <= nums[mid]) {
        //left is sorted,move to right
        if (nums[low] < mini) {
          index = low;
          mini = nums[low];
        }
        low = mid + 1;
      } else {
        if (nums[mid] < mini) {
          index = mid;
          mini = nums[mid];
        }
        high = mid - 1;
      }
    }
    return { index, mini };
  }
}

let nums = [4, 5, 6, 7, 0, 1, 2, 3];
let sol = new Solution();
let result = sol.findKRotation(nums);
console.log(result);
