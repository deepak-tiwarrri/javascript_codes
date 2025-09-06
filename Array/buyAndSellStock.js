function buyAndSellStock(prices) {
      let maxiProfit = 0;
      let miniPrice = Number.POSITIVE_INFINITY;
      for(let ele of prices){
         maxiProfit = Math.max(maxiProfit,ele-miniPrice);
         miniPrice = Math.min(miniPrice,ele);
      }
      return maxiProfit;
}

const arr = [10, 7, 5, 8, 11, 9]
const res = buyAndSellStock(arr);
console.log(res);
// Output: 6

// Explanation: Buy on day 3 (price = 5) and sell on day 5 (price = 11), profit = 11 - 5 = 6.

let arr2 = [5, 4, 3, 2, 1]
const res2 = buyAndSellStock(arr2);
console.log(res2);


// Output: 0

// Explanation: In this case, no transactions are made. Therefore, the maximum profit remains 0.

let arr3 = [3, 8, 1, 4, 6, 2]
const res3 = buyAndSellStock(arr3);
console.log(res3);