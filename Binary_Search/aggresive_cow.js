function check(x, k, stalls) {
  // Write your code here.
  let countCow = 1;
  let lastPlace = stalls[0];
  for (let i = 0; i < stalls.length; i++) {
    let diff = stalls[i] - lastPlace;
    if (diff >= x) {
      countCow++;
      lastPlace = stalls[i];
    }

    if (countCow >= k) return true;
  }
  return false;
}

function aggressiveCows(stalls, k) {
  // Write your code here.
  stalls.sort((a, b) => a - b);
  let low = 1,
    high = stalls[stalls.length - 1] - stalls[0];
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (check(mid, k, stalls)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
const n = 6,
  k = 4;
const arr = [0, 3, 4, 7, 10, 9];
// 0,3,4,7,9,10

const result = aggressiveCows(arr, k);
console.log(result);
