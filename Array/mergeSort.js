function mergeArray(low, mid, high, arr) {
   let left = low;
   let right = mid+1;
   let result = [];
   while (left<=mid && right<=high ) {
      if (arr[left]<=arr[right]) {
         result.push(arr[left]);
         left++;
      }else{
         result.push(arr[right]);
         right++;
      }
   }
   while(left<=mid){
      result.push(arr[left]);
      left++;
   }
   while(right<=high){
      result.push(arr[right]);
      right++;
   }
   for(let i=0;i<result.length;i++){
      arr[i+low] = result[i]; 
   }
   return arr;
}

function mergeSort(low, high, arr) {
   if (low < high) {
      let mid = low + Math.floor((high - low) / 2);
      mergeSort(low, mid, arr);
      mergeSort(mid + 1, high, arr);
      mergeArray(low, mid, high, arr);
   }
}

function sortArray(arr) {
   let low = 0;
   let high = arr.length-1;
   mergeSort(low,high,arr);
   return arr;
}


const arr = [2, 9, 1, 22, 3, 10, 8, 5];

const result = sortArray(arr);
console.log(result);
