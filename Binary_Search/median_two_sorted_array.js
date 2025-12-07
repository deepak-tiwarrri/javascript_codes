function medianTwoSortedArray(nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let i = 0;
  let j = 0;
  let resultArray = [];
  while (i < n1 && j < n2) {
    if (nums1[i] <= nums2[j]) {
      resultArray.push(nums1[i]);
      i++;
    } else {
      resultArray.push(nums2[j]);
      j++;
    }
  }
  while (i < n1) {
    resultArray.push(nums1[i]);
    i++;
  }
  while (j < n2) {
    resultArray.push(nums2[j]);
    j++;
  }
  let n3 = resultArray.length;
  if (n3 % 2 === 1) {
    return resultArray[Math.floor(n3 / 2)];
  }
  return (
    (resultArray[Math.floor(n3 / 2)] + resultArray[Math.floor(n3 / 2 - 1)]) / 2
  );
}

let nums1 = [1, 2, 3, 4];
let nums2 = [8, 9];
let result = medianTwoSortedArray(nums1, nums2);
console.log(result);
