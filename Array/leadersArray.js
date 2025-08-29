function leaders(nums) {
  const result = [];
  let maxEle = nums[nums.length - 1];
  result.push(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > maxEle) {
      result.push(nums[i]);
    }
    maxEle = Math.max(maxEle, nums[i]);
  }
  return result.reverse();

  //brute force approach
  // let ans = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let isLeaderPresent = true;
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[j] >= nums[i]) {
  //       isLeaderPresent = false;
  //       break;
  //     }
  //   }
  //   if (isLeaderPresent) ans.push(nums[i]);
  // }
  // return ans;
}

const nums = [1, 2, 5, 3, 1, 2];
const arr = [-3, 4, 5, 1, -4, -5];
const ans1 = leaders(nums);
const ans2 = leaders(arr);
console.log(ans1);
console.log(ans2);
