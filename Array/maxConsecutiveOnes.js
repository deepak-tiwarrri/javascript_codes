function maxConsecutiveOnes(nums){
   let maxCount =0;
   let count =0;
   for(let ele of nums){
      if(ele===1){
         count++;
         if(count>maxCount){
            maxCount = count;
         }
      }else{
         count=0;
      }
   }
   return maxCount;
}


let nums =[1, 0, 1, 1, 1, 0, 1, 1, 1];
let result = maxConsecutiveOnes(nums);
console.log(result);