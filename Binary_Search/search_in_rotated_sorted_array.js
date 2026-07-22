function searchInRotatedSortedArray(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    //first check if left half is sorted or right half is sorted
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[low] <= nums[mid]) {
      //left half is sorted that means
      //now check if the target is between that range or not
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //right half is sorted that means
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
class Solution {
  search(nums, k) {
    let low = 0, high = nums.length - 1;
    let ans = -1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === k) return mid;
      else if (nums[low] <= nums[mid]) {
        //that means left half is sorted
        //check if the value exist in this half or not
        if (nums[low] <= k && k <= nums[mid])
          //it means it is in range so move the high to this side
          high = mid - 1;
        else
          low = mid + 1;
      } else {
        //that means right half is sorted
        if(nums[mid]<=k && k<=nums[high]) low = mid+1;
        else high = mid-1;
      }
    }
    return ans;
  }
}

class Solution {
    searchInARotatedSortedArrayII(nums, k) {
       
    }
}

const nums = [8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7];
const target = 4;
// const result = searchInRotatedSortedArray(nums, target);
const sol = new Solution();
const result = sol.search(nums,target);
console.log(result);
