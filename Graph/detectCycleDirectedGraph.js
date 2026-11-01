class Solution {
    dfsTraversal(visited,pathVisited,adj,node){
        visited[node] = 1;
        pathVisited[node]= 1;
        console.log(`--initial visited --`,visited);
        console.log(`--initial path visited --`,pathVisited);
        for(let ele of adj[node]){
            console.log("---ele---",ele);
            if(!visited[ele]){
                if(this.dfsTraversal(visited,pathVisited,adj,ele)===true) return true;
            }else if(pathVisited[ele]) return true;
        }
        pathVisited[node] = 0;

        console.log(`path visited: ${pathVisited}`);
        return false;
    }
    isCyclic(N, adj) {
        let visited  = new Array(N).fill(0);
        let pathVisited = new Array(N).fill(0);
        for(let i=0;i<N;i++){
             if(this.dfsTraversal(visited,pathVisited,adj,i)===true) return true;
        }
        return false;
    }
}

let  V = 6, adj= [ [1], [2, 5], [3], [4], [1], [ ] ];
let sol = new Solution();
console.log(sol.isCyclic(V,adj));