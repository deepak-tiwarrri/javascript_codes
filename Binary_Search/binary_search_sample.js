/**
 * Binary search to search whether number is present in the array
 * prerequisite: array should be sorted
 * @param {Array} nums
 * @param {number} target
 * @returns
 */
function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
function binarySearchII(low, high, nums, target) {
  if (low > high) return -1;
  let mid = low + Math.floor((high - low) / 2);
  if (nums[mid] === target) return mid;
  else if (target > nums[mid])
    return binarySearchII(mid + 1, high, nums, target);
  else return binarySearchII(low, mid - 1, nums, target);
}
//recursive approach of binary search
function search(nums, target) {
  //it is gonna take low,high, nums and target
  return binarySearchII(0, nums.length - 1, nums, target);
}
const nums = [2, 3, 9, 10, 88];
const result = binarySearchII(nums, 3);
console.log(result);
