/**
 * Search the floor of square root of a number
 * @param  {Number},
 * @returns {Number}
 */

function findSquareRoot(n) {
  let low = 1,
    high = n;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid * mid <= n) {
      //go for bigger number
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

let result = findSquareRoot(20);
console.log(result);
