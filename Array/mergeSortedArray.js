//merge sorted array without space
class Solution{
   swapIfGreater(arr1,arr2,ind1,ind2){
      if(arr1[ind1]>arr2[ind2]){
         [arr1[ind1],arr2[ind2]] = [arr2[ind2],arr1[ind1]];
      }
   }
   mergeArrayInPlace(arr1,arr2){
      //gap method
      let n = arr1.length;
      let m = arr2.length;
      let len = n+m;
      let gap = Math.ceil(len/2);
      
      while(gap>0){
         console.log("gap: ",gap);
         let left = 0;
         let right = gap+left;
         while(right<len){
            if(left<n && right<len){
               //in arr1 and arr2
               this.swapIfGreater(arr1, arr2,left,right-n);
            }else if(left>=n){
               //in arr2 and arr2
               this.swapIfGreater(arr2,arr2,left-n,right-n);
            }else{
               // arr1 and arr1
               this.swapIfGreater(arr1,arr1,left,right);
            }
            left++,right++;
            console.log(arr1);
      console.log(arr2);
         }
         if(gap===1) break;
         gap = Math.ceil(gap/2);
      }
      // return {arr1,arr2};
   }
}

const arr1 = [1,5,3,4,8];
const arr2 = [7,1,2,3,10,11];
const sol = new Solution();
const result = sol.mergeArrayInPlace(arr1,arr2);
console.log(arr1);
console.log(arr2);