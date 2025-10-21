function lowerBound(nums, x) {
  let low = 0,
    high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] >= x) {
      //now u have find the lower bound index now go to left
      high = mid - 1;
      ans = mid;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let nums = [2, 5, 9, 10, 11, 15, 22];
//find the lower bound of 10
let result = lowerBound(nums, 10);
console.log(result);
