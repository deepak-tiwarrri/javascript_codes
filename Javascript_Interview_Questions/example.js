class Solution {
   countInversion(arr){
      return this.mergeSort(arr);
   }
   mergeArray(left,right,mid,arr,{cnt}){
      let i = left;
      let j = mid+1;
      let temp = [];
      while(i<=mid && j<=right){
         if(arr[i]<=arr[j]){
            temp.push(arr[i]);
            i++;
         }else{
            cnt+= mid-i+1;
            temp.push(arr[j]);
            j++;
         }
      }
      while(i<=mid){
         temp.push(arr[i]);
         i++;
      }
      while(j<=right){
         temp.push(arr[j]);
         j++;
      }
      for(let i=left;i<=right;i++){
         arr[i] = temp[i-left];
      }
      return cnt;
   }
   mergeSortArray(left,right,arr){
      let cnt = 0;
      if(left>=right) return cnt;
         let mid = left + Math.floor((right-left)/2);
      cnt+=this.mergeSortArray(left,mid,arr);
      cnt+= this.mergeSortArray(mid+1,right,arr);
      cnt+= this.mergeArray(left,right,mid,arr,{cnt:0});
      return cnt;
   }
   mergeSort(arr){
      let left =0,right = arr.length-1;
      return this.mergeSortArray(left,right,arr);
   }
}

let sol = new Solution();
let arr = [5,3,2,4,1];
let result = (sol.countInversion(arr));
console.log(result);
