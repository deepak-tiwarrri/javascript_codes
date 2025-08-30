function rearrangeArray(nums) {
   // let posArr = [];
   // let negArr = [];
   // if(nums.length===0) return nums;
   // for(const ele of nums){
   //    if(ele>0) posArr.push(ele);
   //    else negArr.push(ele);
   // }
   // for(let i=0;i<nums.length/2;i++){
   //    nums[2*i] = posArr[i];
   //    nums[2*i+1] = negArr[i];
   // }
   // //TC: O(2n) and space: O(n)
   // return nums;


   //while traversing put the element in the correct postion
   let negIndex = 1;
   let postIndex = 0;
   let result = new Array(nums.length).fill(0)
   for(let ele of nums){
      if (ele > 0) {
        //put in the positive postion
        result[postIndex] = ele;
        postIndex += 2;
      } else {
        result[negIndex] = ele;
        negIndex += 2;
      }
    }
   return result;

}

let  nums = [2, 4, 5, -1, -3, -4];
const result = rearrangeArray(nums);
console.log(result);