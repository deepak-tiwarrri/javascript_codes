class Solution {
  findFirstOccurence(nums, x) {
    let ans = -1;
    let low = 0, high = nums.length;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === x) {
        ans = mid;
        high = mid - 1;
      } else if (nums[mid] > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
  findLastOccurence(nums, x) {
    let ans = -1;
    let low = 0, high = nums.length;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === x) {
        ans = mid;
        low = mid+1;
      } else if (nums[mid] > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
  /**
   * Finds the first and last index of the target{x} element
   * @param {Array} nums
   * @param {number} x
   * @returns {Object} {firstIndex,lastIndex}
   */
  searchRange(nums, target) {
    let first = this.findFirstOccurence(nums,target);
    let last = this.findLastOccurence(nums,target);
    return [first,last];
  }
}


const nums = [2, 4, 6, 8, 8, 8, 8, 11, 13];
const target = 8;
const sol = new Solution();
let result = sol.searchRange(nums, target);
console.log(`first and last occurence of ${target}: ${result}`);
