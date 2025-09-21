class Queue{
   constructor(capacity=5){
      this.capacity = capacity;
      this.start = -1;
      this.currSize = 0;
      this.end = -1;
      this.arr = new Array(this.capacity);
   }
   /**
    * 
    * @param {number} x 
    * @return {void}
    */
   push(x){
      //check condition for full
      if(this.capacity ===this.currSize){
         console.log('Queue is full');
         return;
      }
      //first push
      if(this.start===-1) this.start = 0;
      this.end = (this.end+1)%(this.capacity);
      this.currSize++;
      this.arr[this.end] = x;
   }
   /**
    * 
    * @returns {number}
    * returns popped value from the queue
    */
   pop(){
      if(this.currSize===0){
         console.log('Queue is empty');
         return -1;
      }
      let poppedVal = this.arr[this.start];
      this.start = (this.start+1)%(this.capacity);
      this.currSize--;
      if(this.currSize===0){
         this.start = -1;
         this.end = -1;
      }
      return poppedVal;
   }
   size(){
      return this.currSize;
   }
   top(){
      if(this.start===-1) {
         return -1;
      }
      return this.arr[this.start];
   }
}

const q = new Queue();
q.push(39);
q.push(38);
q.push(8);
const res1 =  q.pop();
console.log(res1);//39
const res2 = q.pop();
console.log(res2);//383
let res3 = q.pop();
console.log(res3);//1
console.log(q.top());
console.log(q.size());
q.push(398);
q.push(583);
q.push(5);
console.log(q.top());
console.log(q.size());