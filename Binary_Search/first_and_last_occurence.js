/**
 * Finds the first and last index of the target{x} element
 * @param {Array} nums
 * @param {number} x
 * @returns {Object} {firstIndex,lastIndex}
 */
function firstAndLastOccurence(nums, x) {
  //brute force appraoch
  let first = -1,
    last = -1;
  //brute force appraoch takes O(n)
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === x) {
  //     if (first === -1) {
  //       first = i;
  //     }
  //     last = i;
  //   }
  // }

  first = findFirstOccurence(nums, x);
  last = findLastOccurence(nums, x);
  return { first, last };
}

function findFirstOccurence(nums, x) {
  
}
function findLastOccurence(nums,x) {
  
}
const nums = [2, 4, 6, 8, 8, 8, 8, 11, 13];
const result = firstAndLastOccurence(nums, 8);
console.log(result);
