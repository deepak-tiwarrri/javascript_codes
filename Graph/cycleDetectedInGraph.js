class Solution {
    bfs(startNode,visited,adj){
        let queue = [];
        queue.push([startNode,-1]);
        visited[startNode] =1;
        while(queue.length>0){
            let [node,parent] = queue.shift();
            for(let neighbor of  adj[node]){
                if(!visited[neighbor]){
                    queue.push([neighbor,node]);
                    visited[neighbor] = 1;
                }else if(parent!=neighbor) return true;
            }
        }
        return false;
    }
    isCycle(V, adj) {
       let visited = new Array(V).fill(0);
       for(let i=0;i<V;i++){
        if(!visited[i]){
            if(this.bfs(i,visited,adj)==true) return true;
        }
       }
       return false;
    }
}