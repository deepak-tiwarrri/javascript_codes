class Bfs{
   bfsTraversal(startNode,adjList,visArr) {
      //make the starting node as visited
      visArr[startNode] = 1;
      let queue = [];
      queue.push(startNode);
      let result = [];
      while(queue.length>0){
         const node = queue.shift();
         result.push(node);
         for(let ele of adjList[node]){
            if(!visArr[ele]){
               visArr[ele] = 1;
               queue.push(ele);
            }
         }
      }
      return result;
   }
   dfsTraversal(startNode,adjList,visArr){
      let result = [];
      const dfs = (node) => {
         visArr[node] = 1;
         result.push(node); // ✅ Add node to result here
         for (let val of adjList[node]) {
            if (!visArr[val]) {
               dfs(val);
            }
         }
      };
      dfs(startNode);
      return result;
   }
};

const main = ()=>{
   const V = 5;
   const edges = [
      [0,1],
      [2,3],
      [2,4],
      [0,2]
   ];
   console.log("hell world");
   //make adjList
   const adjList = Array.from({length:V},()=>[]);
   for(let i=0;i<edges.length;i++){
      adjList[edges[i][0]].push(edges[i][1]);
      adjList[edges[i][1]].push(edges[i][0]);
   }
   let visArr = new Array(V).fill(0);
   const sol = new Bfs();
   const result = sol.dfsTraversal(0,adjList,visArr);
   // const result = sol.bfsTraversal(0,adjList,visArr);
   // console.log(result);
   for(let val of result){
      console.log(val);
   }
}
main();