
function flattenArr(arr) {
   let result = [];
   for(let ele of arr){
      if(!Array.isArray(ele)) result.push(ele);
      else {
         console.log(`ele: ${ele}`);
         result.push(...flattenArr(ele));
      }
   }
   return result;
}
let res = flattenArr(arr);
console.log(res);

// Input
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
let n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]