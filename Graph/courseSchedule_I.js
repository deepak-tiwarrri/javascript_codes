class Solution {
    dfsTraversal(visited,pathVisited,adj,node){
        visited[node] = 1;
        pathVisited[node]= 1;
        for(let ele of adj[node]){
            if(!visited[ele]){
                if(this.dfsTraversal(visited,pathVisited,adj,ele)===true) return true;
            }else if(pathVisited[ele]) return true;
        }
        pathVisited[node] = 0;
        return false;
    }
    isCyclic(N, adj) {
        let visited  = new Array(N).fill(0);
        let pathVisited = new Array(N).fill(0);
        for(let i=0;i<N;i++){
             if(this.dfsTraversal(visited,pathVisited,adj,i)==true) return true;
        }
        return false;
    }
    canFinish(N, arr) {
        let adj = new Array(N).fill([]);
        for(let ele of arr)
        {
            console.log("ele: ",ele);
           adj[ele[1]].push([ele[0]]);
        }
        console.log("adj: ",adj);
            return this.isCyclic(N,adj)? false: true;
    }
}

let  N = 4, arr = [[1,0],[2,1],[3,2]];
let sol = new Solution();
let canFinishOrNot = sol.canFinish(N,arr);
console.log(`canFinishOrNot: ${canFinishOrNot}`);
