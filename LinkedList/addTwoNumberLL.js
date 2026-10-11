const fs = require('fs');

class ListNode {
    constructor(x, next = null) {
        this.data = x;
        this.next = next;
    }
}

class Solution {
    addTwoNumbers(linkedList1, linkedList2) {
        const dummyNode = new ListNode(-1);
        let temp = dummyNode;
        let carry = 0;

        while (linkedList1 != null || linkedList2 != null) {
            let sum = carry;
            if (linkedList1) {
                sum += linkedList1.data;
                linkedList1 = linkedList1.next;
            }
            if (linkedList2) {
                sum += linkedList2.data;
                linkedList2 = linkedList2.next;
            }
            carry = Math.floor(sum / 10);
            temp.next = new ListNode(sum % 10);
            temp = temp.next;
        }

        if (carry) {
            temp.next = new ListNode(carry);
        }

        return dummyNode.next;
    }
}

// --- Helper functions to build and format linked lists ---
function buildList(arr) {
    let dummy = new ListNode(-1);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printList(head) {
    let result = [];
    while (head) {
        result.push(head.data);
        head = head.next;
    }
    return result.join(" -> ");
}

// --- File I/O Logic ---
function main() {
    // Read input.txt
    const inputData = fs.readFileSync('LinkedList/input.txt', 'utf-8').trim().split('\n');

    if (inputData.length < 2) return;

    const list1Array = inputData[0].trim().split(/\s+/).map(Number);
    const list2Array = inputData[1].trim().split(/\s+/).map(Number);

    const l1 = buildList(list1Array);
    const l2 = buildList(list2Array);

    const solution = new Solution();
    const resultHead = solution.addTwoNumbers(l1, l2);

    const outputStr = printList(resultHead);

    // Write to output.txt
    fs.writeFileSync('LinkedList/output.txt', outputStr);
}

main();