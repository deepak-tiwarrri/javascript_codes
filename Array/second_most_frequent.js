function secondMostFrequentElement(nums) {
  let maxFreq = 0;
  let secMaxFreq = 0;
  let secMaxEle = -1;
  let maxEle = -1;
  let freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  for (let [ele, freq] of freqMap) {
    //   console.log([ele, freq]);
    if (freq > maxFreq) {
      secMaxFreq = maxFreq;
      maxFreq = freq;
      secMaxEle = maxEle;
      maxEle = ele;
    } else if (freq === maxFreq) {
      maxEle = Math.min(maxEle, ele);
    } else if (freq > secMaxFreq) {
      secMaxFreq = freq;
      secMaxEle = ele;
    } else if (freq === secMaxFreq) {
      secMaxEle = Math.min(secMaxEle, ele);
    }
  }
  return secMaxEle;
}
let nums = [100, 200, 200, 300, 300];
let result = secondMostFrequentElement(nums);
console.log(result);