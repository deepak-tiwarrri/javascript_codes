function highestOccurElement(nums) {
  let maxFreq = nums[0];
  for (let num of nums) {
    if (num > maxFreq) {
      maxFreq = num;
    }
  }
  return maxFreq;
}

let nums = [22, 3, 3, 3, 1, 5];
let result = highestOccurElement(nums);
console.log(result);
