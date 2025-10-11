/**
 * return next greater element array
 * @param {Array} arr
 * @returns {Array}
 */
function nextGreaterElement(arr) {
  //[6,0,8,1,3]
  //[8,8,-1,-1,-1]
  let result = new Array(arr.length).fill(-1);
  let stackArray = [];
  // iterate from right to left (start at last index)
  for (let i = arr.length - 1; i >= 0; i--) {
    // pop elements from stack that are less than or equal to current
    while (
      stackArray.length > 0 &&
      stackArray[stackArray.length - 1] <= arr[i]
    ) {
      stackArray.pop();
    }

    // if stack has elements, top is next greater, otherwise -1
    result[i] = stackArray.length > 0 ? stackArray[stackArray.length - 1] : -1;

    // push current element as a candidate for elements to the left
    stackArray.push(arr[i]);
  }
  return result;
}

const ans = nextGreaterElement([6, 0, 8, 1, 3]);
console.log(ans);
