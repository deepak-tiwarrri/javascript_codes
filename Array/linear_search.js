function linearSearch(nums, target) {

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
   }
   return -1;
}


let nums = [2, 9, 4, 5, 3];
let target = 3;

let result = linearSearch(nums,target);
console.log(result);