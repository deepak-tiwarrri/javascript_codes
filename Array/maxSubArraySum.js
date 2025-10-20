function maxSubArraySum(nums) {
  let maxsum = Number.NEGATIVE_INFINITY;
  // for (let i = 0; i < nums.length; i++) {
  //   let sum = 0;
  //   for (let j = i; j < nums.length; j++) {
  //     sum += nums[j];
  //     maxsum = Math.max(sum, maxsum);
  //   }
  // }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxsum = Math.max(sum, maxsum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxsum;
}

let nums = [2, 3, 5, -2, 7, -4];
let result = maxSubArraySum(nums);
console.log(result);
