class StackUsingArray{
    constructor(size=10){
        this.capacity = size;
        this.topIndex = -1;
        this.stack = new Array();
    }
    /**
     * take a value and return a value
     * @param {number} x 
     * @returns {number}
     */
    push(x){
        //before pushing check if the topindex is equal to capacity
        if(this.topIndex===this.capacity-1){
            console.log("stack is full,can't push ");
            return;
        }
        this.stack[++this.topIndex] = x;
    }
    /**
     * @param {}
     * @return {value}
     */
    pop(){
        if(this.topIndex===-1){
            console.log("stack is empty,can't pop");
            return -1;
        }
        //pop will return popped value
        const poppedVal = this.stack[this.topIndex--];
        return poppedVal;
    }
    isEmpty(){
        if(this.topIndex===-1){
            return true;
        }
        return false;
    }
    top(){
        if(this.topIndex===-1){
            return -1;
        }
        const topVal = this.stack[this.topIndex];
        return topVal;
    }
}

const stack1 = new StackUsingArray(5);
stack1.push(5);
stack1.push(10);
stack1.push(15);
stack1.push(20);
stack1.push(2);
const res1 = stack1.pop();
console.log(res1);
console.log(stack1.isEmpty());
const res2 = stack1.top();
console.log(res2);
stack1.push(25);
const res3 = stack1.pop();
console.log(res3);
const res4 = stack1.pop();
console.log(res4);
console.log(stack1.top());

