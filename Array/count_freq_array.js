function countFrequency(nums){

   // let n = nums.length;
   // let result =0;
   // let visited = new Array(n).fill(false);
   // let maxEle = -1;
   // for (let i = 0; i < nums.length; i++) {
   //    if(visited[i]) continue;
   //    let cnt = 0;
   //    for(let j=0;j<n;j++){
   //       if(nums[j]===nums[i]){
   //          cnt++;
   //          visited[i] = true;
   //       }
   //    }
   //    if(cnt>maxEle){
   //       result = nums[i];
   //       maxEle = cnt;
   //    }
   //    else if(cnt===maxEle){
   //       result = Math.min(result,nums[i]);
   //    }
   // }
   // return result;

   let freqMap = new Map();
   for(let num of nums){
      freqMap.set(num,(freqMap.get(num) || 0) +1);
   }
   // for(let [key,freq] of freqMap){
   //    console.log([key,freq]);
   // }
   let result = Infinity;
   let maxFreq = 0;
   for(let [key,freq] of freqMap){
      if(freq>maxFreq){
         maxFreq = freq;
         result = key;
      }else if(freq===maxFreq){
         result = Math.min(result,key);
      }
   }
   return result;

}

let nums = [1,1,2,2,2,3,3,3,4,4,4];
let result = countFrequency(nums);
console.log(result);