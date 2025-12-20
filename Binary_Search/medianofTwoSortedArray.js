function median(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let total = n1 + n2;
  let left = Math.floor((n1 + n2 + 1) / 2);
  if (n1 > n2) return median(arr2, arr1);
  let low = 0,
    high = n1;
  while (low <= high) {
    let mid1 = Math.floor((high + low) / 2);
    let mid2 = left - mid1;
    let l1 = mid1 - 1 > 0 ? arr1[mid1 - 1] : Number.NEGATIVE_INFINITY;
    let l2 = mid2 - 1 > 0 ? arr2[mid2 - 1] : Number.NEGATIVE_INFINITY;
    let r1 = mid1 < n1 ? arr1[mid1] : Number.POSITIVE_INFINITY;
    let r2 = mid2 < n2 ? arr2[mid2] : Number.POSITIVE_INFINITY;
    if (l1 <= r2 && l2 <= r1) {
      if (total % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
      }
    } else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }
  return 0;
}

let arr1 = [2, 4, 6],
  arr2 = [1, 3, 5];
const result = median(arr1, arr2);
console.log(result);
let arr3 = [1, 3, 4, 7, 10, 12];
let arr4 = [2, 3, 6, 15];
const result2 = median(arr3, arr4);
console.log(result2);
