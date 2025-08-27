class StackUsingArray {
  constructor(size = 1000) {
    //need three things
    this.capacity = size;
    this.topIndex = -1;
    this.stackArray = new Array();
  }
  push(x) {
    //first check if stack is full or not
    if (this.topIndex >= this.capacity - 1) {
      //if it is full then don't push
      console.log("stack is full or overflowing");
      return;
    }
    this.stackArray[++this.topIndex] = x;
  }
  pop() {
    //check if stack is empty, if it is then don't pop return -1;
    if (this.topIndex === -1) {
      console.log("stack is empty can't pop");
      return -1;
    }
    const poppedValue = this.stackArray[this.topIndex--];
    return poppedValue;
  }
  top() {
    if (this.topIndex !== -1) {
      return this.stackArray[this.topIndex];
    }
    return -1;
  }
  isEmpty() {
    if (this.topIndex === -1) return 1;
    return 0;
  }
}
const stack = new StackUsingArray(5);
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(2);
stack.pop();
console.log(stack.isEmpty());
console.log(stack.top());
stack.push(25);
stack.pop();
stack.pop();
console.log(stack.top());
