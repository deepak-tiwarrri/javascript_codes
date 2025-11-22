/*
Problem Statement: Find Minimum in Rotated Sorted Array

Input Format:
- An array 'arr' of size 'n'
- The array was initially sorted in ascending order and then rotated between 1 and n times
Example: [3,4,5,1,2] was initially [1,2,3,4,5] and was rotated 3 times

Output Format:
- Return the minimum element in the rotated sorted array
Example: For array [3,4,5,1,2], output will be 1

Example 1:
Input: arr = [3,4,5,1,2]
Output: 1

Example 2:
Input: arr = [4,5,6,7,0,1,2]
Output: 0

Example 3:
Input: arr = [11,13,15,17]
Output: 11
*/

function findMinRotatedSorted(nums) {
  let low = 0,
    high = nums.length - 1;
  let mini = Number.POSITIVE_INFINITY;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[low] <= nums[high]) {
      //that means u are in sorted array and nums[low] will be smallest
      mini = Math.min(nums[low], mini);
      break;
    } else if (nums[low] <= nums[mid]) {
      //then take the low value and move low to mid+1 because it is sorted on left side
      mini = Math.min(nums[low], mini);
      low = mid + 1;
    } else {
      mini = Math.min(nums[mid], mini);
      high = mid - 1;
    }
  }
  return mini;
}

let arr = [4, 5, 6, 7, 0, 1, 2];
const result = findMinRotatedSorted(arr);
console.log(result);

let arr2 = [11, 13, 15, 17];
const res2 = findMinRotatedSorted(arr2);
console.log(res2);
