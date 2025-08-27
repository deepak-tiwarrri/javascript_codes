function secondMaxEle(nums) {
   //brute force approach //TC: O(2n) + SC: O(1)
   let maxEle = Number.NEGATIVE_INFINITY;
   let secMaxEle = Number.NEGATIVE_INFINITY;
   // for (const ele of nums) {
   //    maxEle = Math.max(maxEle,ele);
   // }
   // for(const ele of nums){
   //    if(ele>secMaxEle && ele!==maxEle){
   //       secMaxEle = ele;
   //    }
   // }
   // return secMaxEle===Number.NEGATIVE_INFINITY?-1:secMaxEle;
   for (const ele of nums) {
      if(ele>maxEle){
         //second max will take the value of maxEle and maxEle is now new ele
         secMaxEle = maxEle;
         maxEle = ele;
      }else if(ele>secMaxEle && ele<maxEle){
         secMaxEle =ele;
      }
   }
   return secMaxEle===Number.NEGATIVE_INFINITY?-1:secMaxEle;
}


const nums1 =  [1, 1, 0, 0, 1, 1, 1, 0];//0
const nums2 =  [0, 0, 0, 0, 0, 0, 0, 0];//-1
const nums3 = [8, 8, 7, 6, 5];//7
const numsa = [-383,-2832,-32,-25,32,-15];
const nums4 = [10, 10, 10, 10, 10];//-1

const result = secondMaxEle(numsa);
console.log(result);

