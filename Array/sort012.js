function sortZerosOnesTwos(nums) {
  // let cnt0 = 0;
  // let cnt1 = 0;
  // let cnt2 = 0;
  // for (let ele of nums) {
  //   if (ele === 0) cnt0++;
  //   else if (ele === 1) cnt1++;
  //   else cnt2++;
  // }
  // for (let i = 0; i < cnt0; i++) {
  //   nums[i] = 0;
  // }
  // for (let i = cnt0; i < cnt0 + cnt1; i++) {
  //   nums[i] = 1;
  // }
  // for (let i = cnt0 + cnt1; i < nums.length; i++) {
  //   nums[i] = 2;
  // }
  // return nums;
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}

const nums = [0, 1, 2, 2, 0, 0, 1, 1];
const result = sortZerosOnesTwos(nums);
console.log(result);
