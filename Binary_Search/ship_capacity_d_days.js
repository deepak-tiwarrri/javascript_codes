/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function findDaysRequired(weights, capacity) {
  let day = 1;
  let sum = 0;
  console.log(`current capacity: ${capacity}`);
  for (let weight of weights) {
    if (sum + weight <= capacity) {
      sum += weight;
      console.log(`sum: ${sum}`);
    } else {
      day++;
      sum = weight;
      console.log(`got in else with sum: ${sum},day: ${day}`);
    }
  }
  return day;
}
var shipWithinDays = function (weights, days) {
  let miniEle = Math.max(...weights);
  console.log(`miniElement: ${miniEle}`);
  let maxSum = weights.reduce((accu, ele) => accu + ele, 0);
  console.log(`totalSum: ${maxSum}`);
  for (let cap = miniEle; cap <= maxSum; cap++) {
    if (findDaysRequired(weights, cap) <= days) {
      return cap;
    }
  }
  return -1;
};
// let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// days = 5;
// let weights = [3, 2, 2, 4, 1, 4],
// days = 3;
let weights = [1, 2, 3, 1, 1];
let days = 4;
let result = shipWithinDays(weights, days);
console.log(result);
