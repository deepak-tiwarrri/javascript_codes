function findProductOfRoot(mid, n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= mid;
  }
  return product;
}

function nthRoot(n, m) {
  let low = 1,
    high = m;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (findProductOfRoot(mid, n) === m) {
      return mid;
    } else if (findProductOfRoot(mid, n) > m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const result = nthRoot(4, 256);
console.log(result);

const result2 = nthRoot(3, 67);
console.log(result2);
