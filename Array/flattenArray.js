function flattenArray(arr) {
  const ans = [];
  function helper(arr) {
    for (let val of arr) {
      if (Array.isArray(val)) {
        helper(val);
      } else {
        ans.push(val);
      }
    }
  }
  helper(arr);
  return ans;
}


const flat = (arr, n) => {
    let result = [];
    if (!n)
      //if n is 0
      return arr;
    function helper(arr, depth) {
      for (let ele of arr) {
        if (Array.isArray(ele) && depth < n) {
          result.push(...helper(arr, depth + 1));
        } else {
          result.push(ele);
        }
      }
      return result;
    }
    return helper(arr, 0);
};

const flattenArrayTwo = (arr)=>{
  const result = [];
  for(let ele of arr){
    if(Array.isArray(ele)){
      result.push(...flattenArray(ele));
    }else{
      result.push(ele);
    }
  }
  return result;
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const result = flattenArrayTwo(arr);
const res = flat(arr, 1);
console.log(res);
// console.log(result);
