function nextPermuation(nums) {
  //first 1 2 3
  // 2 1 3
  //find the first number that is smaller than it's right
  let n = nums.length;
  let index = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    //that means number is in desceding order
    //in that case reverse and written the number
    nums.reverse();
    return nums;
  }
  // now u  find the first number from right which is
  //greater then index number
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      break;
    }
  }
  let left = index + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
}

const arr1 = [2, 1, 5, 4, 3, 0, 0];
const arr2 = [1, 2, 3, 4];
const arr3 = [4, 3, 2, 1];
const result1 = nextPermuation(arr1);
const result2 = nextPermuation(arr2);
const result3 = nextPermuation(arr3);
console.log(result1);
console.log(result2);
console.log(result3);
