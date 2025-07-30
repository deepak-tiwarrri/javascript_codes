function rotateArrayByOne(nums){
   let temp = nums[0];
   for(let i=1;i<nums.length;i++){
      nums[i-1] = nums[i];
   }
   nums[nums.length-1] = temp;
   return nums;
}

// let nums =  [1, 2, 3, 4, 5];
let nums =  [-1, 0, 3, 6];
let result = rotateArrayByOne(nums);
for(let val of result){
   console.log(val," ");   
}
