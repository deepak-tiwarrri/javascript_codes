function secondLargestElement(nums) {

   let maxEle = nums[0];
   let secMaxEle = nums[0];
   for(let num of nums){
      if(num>maxEle){
         secMaxEle = maxEle;
         maxEle = num;
      }else if(num>secMaxEle && num<maxEle){
         secMaxEle = num;
      }
   }
   return {secMaxEle,maxEle};
   // let largest = -1;
   // let secondLargest = -1;
   // for(let num of nums){
   //    largest = Math.max(largest,num);
   // }
   // for(let num of nums){
   //    if(num!==largest) secondLargest = Math.max(secondLargest,num);
   // }
   // return secondLargest;
}

let nums = [1, 1, 2,2];
let result = secondLargestElement(nums);
console.log(result);