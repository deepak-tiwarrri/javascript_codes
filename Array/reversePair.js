function findReversePair(low, mid, high, nums) {
  let count = 0;
  let right = mid + 1;
  for (let i = low; i <= mid; i++) {
    //go till that number which is satisifies condition arr[i]> 2*arr[right]
    while (right <= high && nums[i] > 2 * nums[right]) right++;
    //count = count + (right-(mid+1))
    count += right - (mid + 1);
  }
  return count;
}
function mergeArray(low, mid, high, arr) {
  let left = low;
  let right = mid + 1;
  let result = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) result.push(arr[left++]);
    else result.push(arr[right++]);
  }
  while (left <= mid) result.push(arr[left++]);
  while (right <= high) result.push(arr[right++]);
  for (let i = 0; i < result.length; i++) arr[i + low] = result[i];
  return arr;
}

function mergeSort(low, high, arr) {
  let count = 0;
  if (low === high) return count;
  let mid = low + Math.floor((high - low) / 2);
  count += mergeSort(low, mid, arr);
  count += mergeSort(mid + 1, high, arr);
  count += findReversePair(low, mid, high, arr);
  mergeArray(low, mid, high, arr);
  return count;
}

//reverse pair question
function reversePair(nums) {
  return mergeSort(0, nums.length - 1, nums);
}

// const result = reversePair([2, 4, 3, 5, 1]);
const result = reversePair([5, 4, 3, 2, 1]);
console.log(result);
