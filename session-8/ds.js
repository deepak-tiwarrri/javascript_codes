//MAANG-INTERVIEW QUES

//Write a function that accepts a number encoded as an array of digits, e.g. [1,9,3,8] for the number 1938, and returns the encoded number incremented by 1, e.g. returns [1,9,3,9]. 

/*Examples: 
[1,9,3,8] → [1,9,3,9] 
[4,4,4] → [4,4,5]   
[ 1, 9, 3, 9] → [1 , 9, 4, 0] 
[9, 9, 9, 9] → [ 1, 0, 0, 0, 0]
[9] → [1,0]
*/

/*const encodedNumInc = numArr => {
const numInc = Number(numArr.join(''))+1;
let arr = String(numInc).split('');
for(let i=0; i < arr.length; i++) {
 arr[i] = +arr[i]; 
}
return arr;
}
console.log(encodedNumInc([9, 9, 9, 9]));
*/
/*
function incrementNumber(number) {
  var add = 1;
  for (var i = number.length - 1; i >= 0; i--) {
    var digit = number[i];
    digit += add;
    if (digit > 9) {
      digit = 0;
      add = 1;
    } 
    else {
      add = 0;
    }
    number[i] = digit;
  }
  if(number[0]==0){
    number.unshift(1)
  }
  return number;
}

*/
//if last element is less than 9, simply increment last element
//else hold the last element of an array
//get a sub array from start to second lat element
//Implement Recurssion

function incrementNumber(arr){//[9,9,9]
      if(arr.length==0){
        arr.push(0)
      }
      const lastElement=arr[arr.length-1];//9
      if(lastElement <9){
        arr[arr.length-1]=arr[arr.length-1]+1;
        return arr;
      }
      else {
        arr.pop();//[9,9]
        return incrementNumber(arr).concat([0])//[,,,0]
      }
    }
    
    
    console.log(incrementNumber([9,9,9]))
    
    
    
    
    function incrementArrayElement(arr){//[ 9]
    if(arr.length==0)
    {
    arr.push(0)
    }
    const lastElement=arr[arr.length-1];//9
    
    if(lastElement <9){
    
    arr[arr.length-1]=arr[arr.length-1] +1;
    return arr;
    }
    else {
    
    const incrementedVals=arr.splice(0, arr.length-1)
    
    return incrementArrayElement(incrementedVals).concat([0]);
    
    }
    