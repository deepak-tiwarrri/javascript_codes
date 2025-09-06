//pascal triangle problem has three variety to solve them

// [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]
// 5
function nCr(row,col){
   //find the particular number if row and col is given
   //it can be done by using formula
   // first row will be row-1 and col will be col-1
   //because of zero based indexing
   row = row-1;
   col = col-1;
   let ans = 1;
   for(let i=0;i<col;i++){
      ans = ans*(row-i);
      ans = ans/(i+1);
   }
   return ans;
}
function generateRow(row){
   let resArray = [];
   let ans = 1;
   resArray.push(ans);
   for(let i=1;i<row;i++){
      ans = ans*(row-i);
      ans = ans/(i);
      resArray.push(ans);
   }
   return resArray;
}


function pascalTriangle(numOfRows) {
   const res = [];
   for(let i=1;i<=numOfRows;i++){
      res.push(generateRow(i));      
   }
   return res;
}


let ans = nCr(6,2);
let result = pascalTriangle(6);
console.log(result);
console.log(ans);//5