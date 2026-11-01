// Min-Heap Priority Queue Implementation
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Get parent and child indexes
    parentIndex(i) { return Math.floor((i - 1) / 2); }
    leftChildIndex(i) { return 2 * i + 1; }
    rightChildIndex(i) { return 2 * i + 2; }

    // Swap helper
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert element with priority
    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    // Remove element with highest priority (lowest priority number)
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    // Peek at top element
    peek() {
        return this.heap[0] || null;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    // Maintain heap property after insertion
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index].priority < this.heap[this.parentIndex(index)].priority) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    // Maintain heap property after removal
    heapifyDown() {
        let index = 0;
        while (this.leftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.leftChildIndex(index);
            if (this.rightChildIndex(index) < this.heap.length &&
                this.heap[this.rightChildIndex(index)].priority < this.heap[smallerChildIndex].priority) {
                smallerChildIndex = this.rightChildIndex(index);
            }
            if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue("Task A", 2);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 3);

console.log(pq.dequeue()); // { value: 'Task B', priority: 1 }
console.log(pq.peek());    // { value: 'Task A', priority: 2 }
