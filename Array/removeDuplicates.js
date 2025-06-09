function removeDuplicates(nums)
{
   let n = nums.length;
   //first approach is using set
   // let stt = new Set();
   //time complexity of nlogn + n
   //space complexity of O(n)
   // for(let val of nums){
   //    stt.add(val);
   // }
   // let k = stt.size;
   // let i=0;
   // for(let ele of stt){
   //    nums[i] = ele;
   //    i++;
   // }
   // return k;


   //optimal approach
   let i=0;
   for(let j=1;j<nums.length;j++){
      if(nums[i]!==nums[j]){
         nums[i+1] = nums[j];
         i++;
      }
   }
   return i+1;
}

let nums = [0,0,3,3];
let result = removeDuplicates(nums);
console.log(result);