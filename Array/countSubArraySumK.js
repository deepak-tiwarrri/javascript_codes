//same problem as longest sub array sum but u have tto find the count now
function countSubArraySum(nums,k){
   //optimal approach directly writing now
   let preSumCountHash = new Map();
   preSumCountHash.set(0,1);
   let count=0;
   let preSum = 0;
   for(let ele of nums){
      preSum+=ele;
      let remValue = preSum-k;
      count+= preSumCountHash.get(remValue) || 0;
      //set the preSum to hash
      preSumCountHash.set(preSum,(preSumCountHash.get(preSum) || 0)+1);
   }
   return count;
}

let nums = [1, 1, 1], k = 2;
let nums2 = [1, 2 ,3 ,-3 ,1 ,1, 1 ,3, 5 ,-2], k2 = 3;
const result = countSubArraySum(nums,k);
const result2 = countSubArraySum(nums2,k2);
console.log(result);
console.log(result2);