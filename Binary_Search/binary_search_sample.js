function binarySearch(nums,target) {
  nums.sort()
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      
    } else {
      
    }
  }
}


const nums = [2, 3, 9, 10, 2, 88];
const result = binarySearch(nums);
console.log(result);