function findReversePair(low, mid, high, nums) {
  let count = 0;
  let right = mid + 1;
  for (let i = low; i <= high; i++) {
    //go till that number which is satisifies condition arr[i]> 2*arr[right]
    while (right <= high && arr[i] > 2 * arr[right]) right++;
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
    if (arr[left] <= arr[right]) {
      result.push(arr[left]);
      left++;
    } else {
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
  return arr;
}

function mergeSort(low, high, arr) {
  let count = 0;
  if (low === high) return count;
  let mid = low + Math.floor((high - low) / 2);
  mergeSort(low, mid, arr);
  mergeSort(mid + 1, high, arr);
  count += reversePair(low, mid, high, arr);
  mergeArray(low, mid, high, arr);
  return count;
}

//reverse pair question
function reversePair(nums) {
  return mergeSort(0, nums.length, nums);
}


const result = reversePair([]
