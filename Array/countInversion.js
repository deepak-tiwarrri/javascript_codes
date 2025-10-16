function mergeArray(low, mid, high, arr) {
  let count = 0;
  let left = low;
  let right = mid + 1;
  let result = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      result.push(arr[left]);
      left++;
    } else {
      //if left is greater than right
      count += mid - left + 1;
      result.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    result.push(arr[left]);
    left++;
  }
  while (right <= high) {
    result.push(arr[right]);
    right++;
  }
  for (let i = 0; i < result.length; i++) {
    arr[i + low] = result[i];
  }
  return count;
}

function mergeSort(low, high, arr) {
  let cnt = 0;
  if (low === high) return cnt;
  let mid = low + Math.floor((high - low) / 2);
  cnt += mergeSort(low, mid, arr);
  cnt += mergeSort(mid + 1, high, arr);
  cnt += mergeArray(low, mid, high, arr);

  return cnt;
}
function countInversion(nums) {
  return mergeSort(0, nums.length - 1, nums);
}

let result = countInversion([5, 3, 2, 4, 9]);
console.log(result);
