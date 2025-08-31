function longestSubArray(nums,k) {
   // let maxLen = 0;
   // for(let i=0;i<nums.length;++i){
   //    let sum = 0;
   //    for (let j = i; j < nums.length; ++j) {
   //       sum+=nums[j];
   //       if(sum===k){
   //          maxLen = Math.max(maxLen,j-i+1);
   //       }
   //    }
   // }
   // return maxLen;

   // let sum = 0;
   // let preSumMap = new Map();
   // let maxLen = 0;
   // for(let i=0;i<nums.length;++i){
   //    sum+=nums[i];
   //    if(sum===k){
   //       maxLen = Math.max(maxLen,i+1);
   //    }
   //    const remSum = sum-k;
   //    if(preSumMap.has(remSum)){
   //       const len = i-preSumMap.get(remSum);
   //       maxLen = Math.max(len,maxLen);
   //    }
   //    if(!preSumMap.has(sum)){
   //       preSumMap.set(sum,i);
   //    }
   // }
   // return maxLen;


   //optimal solution if postivies are present
   let left = 0,right = 0;
   let sum =0;
   let maxLen = 0;
   while(right<nums.length){
      if(right<nums.length)sum+=nums[right];
      while(sum>k && left<=right){
         sum-=nums[left];
         left++;
      }
      if(sum===k){
         maxLen = Math.max(maxLen,right-left+1);
      }
      right++;
   }
   return maxLen;
}

let  nums = [10, 5, 2, 7, 1, 9];
// let  nums =  [-3, 2, 1];
// let  nums =  [-1,1,1];
let k=15;
let result = longestSubArray(nums,k);

console.log(result);