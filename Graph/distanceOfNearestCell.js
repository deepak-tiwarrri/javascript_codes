class Solution {
    constructor(){
        this.delRow = [-1,0,1,0];
        this.delCol = [0,1,0,-1];
    }
    nearest(grid) {
          let n = grid.length;
          let m = grid[0].length;
          let visited = Array.from({length:n},()=>Array(m).fill(0));   
          let distanceGrid = Array.from({length:n},()=>Array(m).fill(0));
          let q = [];
          for(let i=0;i<n;i++){
           for(let j=0;j<m;j++){
             if(grid[i][j]===1){
                q.push([[i,j],0]);
                visited[i][j] = 1;
             }else{
                visited[i][j] = 0;
             }
           }
          } 
          while(q.length>0){
             let [cordinate,dist] = q.shift();
             let row = cordinate[0];
             let col = cordinate[1];
             distanceGrid[row][col] = dist;
             for(let i=0;i<4;i++){
                let nRow = this.delRow[i]+ row;
                let nCol = this.delCol[i] + col;
                if(nRow>=0 && nRow<n && nCol<m && nCol>=0 && visited[nRow][nCol]===0){
                    q.push([[nRow,nCol],dist+1]);
                    visited[nRow][nCol] = 1;
                }
             }
          }
          return distanceGrid;
    }
}

function main(){
let grid = [
        [0, 1, 1, 0], 
        [1, 1, 0, 0], 
        [0, 0, 1, 1]
    ];
    
    /* Creating an instance of 
    Solution class */
    let sol = new Solution();
    
    /* Function call to find the distance of  
    the nearest 1 in the grid for each cell. */
    let ans = sol.nearest(grid);
    
    let n = ans.length;
    let m = ans[0].length;
    
    // Output
    console.log("The distance of the nearest 1 in the grid for each cell is: ");
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < m; j++) {
            row += ans[i][j] + " ";
        }
        console.log(row.trim());
    }
}
main();