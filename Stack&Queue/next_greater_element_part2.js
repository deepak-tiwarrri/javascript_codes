/**
 * next greater element in the circular element
 * @param {Array} nums
 * @returns {Array}
 */
function nextGreaterElementPart2(nums) {
  // let result = new Array(nums.length).fill(-1);
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j <= nums.length + i - 1; j++) {
  //     let index = Math.floor(j % nums.length);
  //     if (nums[index] > nums[i]) {
  //       result[i] = nums[index];
  //       break;
  //     }
  //   }
  // }

  let st = [];
  let result = new Array(nums.length).fill(-1);
  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= nums[i % nums.length]) {
      st.pop();
    }
    result[i % nums.length] = st.length > 0 ? st[st.length - 1] : -1;
    st.push(nums[i % nums.length]);
  }
  return result;
}

const result = nextGreaterElementPart2([2, 10, 12, 1, 11]);
console.log(result);
