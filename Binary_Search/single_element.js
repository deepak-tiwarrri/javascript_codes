//generate the input and output for this

function singleElement(nums) {
  let n = nums.length;
  if (n == 1) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

  let low = 1,
    high = n - 2;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1])
      return nums[mid];
    if (
      (mid % 2 === 0 && nums[mid + 1] === nums[mid]) ||
      (mid % 2 === 1 && nums[mid] === nums[mid - 1])
    ) {
      //u are on the left move to right
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arr1 = [3];
const arr2 = [2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const r1 = singleElement(arr1);
const r2 = singleElement(arr2);

console.log(r1);
console.log(r2);
