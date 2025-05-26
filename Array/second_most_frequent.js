function secondMostFrequentElement(nums) {
   let maxFreq = 0;
   let secMaxFreq = 0;
   let maxEle = -1;
   let secMaxEle = -1;
   let freqMap = new Map();
   for (let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
   }

   for (let [num, freq] of freqMap) {
      if (freq > maxFreq) {
         secMaxFreq = maxFreq;
         secMaxEle = maxEle;
         maxEle = num;
         maxFreq = freq;
      } else if (maxFreq === freq) {
         maxEle = Math.min(maxEle, num);
      } else if (freq > secMaxFreq) {
         secMaxFreq = freq;
         secMaxEle = num;
      } else if (freq === secMaxFreq) {
         secMaxEle = Math.min(secMaxEle, num);
      }
   }
   return secMaxEle;
}


let nums = [1, 2, 2, 3, 3, 3];
let result = secondMostFrequentElement(nums);
console.log(result);