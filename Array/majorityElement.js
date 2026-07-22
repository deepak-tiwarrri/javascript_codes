class Solution {
    majorityElement(nums) {
        //brute force will be
      //   let mpp = new Map();
      //   nums.forEach((ele,index)=>{
      //    mpp.set(ele,(mpp.get(ele) || 0)+1);
      //   })
      //   for(let [key,value] of mpp){
      //     if(value> Math.floor((nums.length)/2)) return key;
      //   }
      //   return -1;

      //optimal solution
      let count = 0;
      let candidate = 0;
      for(let ele of nums){
         if(count===0) candidate = ele;
         if(candidate===ele) count++;
         else {
            count--;
         }
      }
      return candidate;
    }
    
}
let nums = [7, 0, 0, 1, 7, 7, 2, 7, 7];
const sol = new Solution();
let result =sol.majorityElement(nums);
console.log(result);