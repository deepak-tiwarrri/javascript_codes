// const arr = [1, [2], [3, [4]]]
//output: flatten array completely
// [1, 2, 3, 4]
//flatten simple array completely 
function flat(arr) {
  let result = [];
  for(let ele of arr){
    if(!Array.isArray(ele)) result.push(ele);
    else result.push(...flat(ele));
  }
  return result;
}
//testing function I
// let ans = flat(arr);
// console.log(ans);



// Input
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
let n = 0;
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

function flatII(arr,n) {
    let result = [];
    if (n === 0) return arr;
    for (let ele of arr) {
        if (!Array.isArray(ele)) result.push(ele);
        else {
            let resultantArray = flat(ele, n - 1);
            result.push(...resultantArray);
        }
    }
    return result;
}

let ans = flat(arr, n);
console.log(ans);

// const flattenArrayTwo = (arr)=>{
//   const result = [];
//   for(let ele of arr){
//     if(Array.isArray(ele)){
//       result.push(...flattenArray(ele));
//     }else{
//       result.push(ele);
//     }
//   }
//   return result;
// }

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const result = flattenArray(arr);
// // const res = flat(arr, 1);
// // console.log(res);
// console.log(result);
