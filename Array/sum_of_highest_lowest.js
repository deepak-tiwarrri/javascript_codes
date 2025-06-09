function sumHighestAndLowestFrequency(nums) {
   // brute force approach
   // let n = nums.length;
   // let visited = new Array(n).fill(false);
   // let maxFreq = 0,minFreq = n;
   // for(let i=0;i<n;i++){
   //    if(visited[i]) continue;
   //    let cnt = 0;
   //    for(let j=i;j<n;j++){
   //       if(nums[i]===nums[j]){
   //          cnt++;
   //          visited[i] = true;
   //       }
   //    }
   //    maxFreq = Math.max(maxFreq,cnt);
   //    minFreq = Math.min(minFreq,cnt);
   // }
   // return maxFreq + minFreq;


   //optimal approach
   let freqMap = new Map();
   let maxFreq = 0, minFreq = nums.length;
   for (let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
   }
   for (let [ele, freq] of freqMap) {
      maxFreq = Math.max(freq, maxFreq);
      minFreq = Math.min(freq, minFreq);
   }
   return minFreq + maxFreq;
}

let nums = [1];
let result = sumHighestAndLowestFrequency(nums);
console.log(result);